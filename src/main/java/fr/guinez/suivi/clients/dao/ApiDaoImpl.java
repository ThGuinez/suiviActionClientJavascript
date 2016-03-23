package fr.guinez.suivi.clients.dao;

import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;

import javax.sql.DataSource;

import org.apache.commons.lang3.time.DateUtils;
import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import fr.guinez.suivi.clients.exception.ExceptionTechnique;
import fr.guinez.suivi.clients.model.Action;
import fr.guinez.suivi.clients.model.Client;
import fr.guinez.suivi.clients.model.Etat;
import fr.guinez.suivi.clients.model.Historique;

@Repository
public class ApiDaoImpl implements IApiDao {

	private Logger logger = Logger.getLogger(ApiDaoImpl.class);

	@Autowired
	private DataSource ds;

	@Transactional
	@Override
	public void supprimerAction(int id) {
		// on enregistre le nouveau client
		StringBuilder rqt = new StringBuilder();
		rqt.append("DELETE FROM action ");
		rqt.append("WHERE id=" + id);
		PreparedStatement ps;
		try {
			ps = ds.getConnection().prepareStatement(rqt.toString());
			ps.executeUpdate();
			// on efface les historiques correspondant
			StringBuilder rqt2 = new StringBuilder();
			rqt2.append("DELETE FROM historique ");
			rqt2.append("WHERE action=" + id);
			PreparedStatement ps2;
			try{
				ps2 = ds.getConnection().prepareStatement(rqt2.toString());
				ps2.executeUpdate();
			}catch(SQLException e){
				logger.debug(e.getMessage());
				throw new ExceptionTechnique(e, e.getMessage());
			}

		} catch (SQLException e) {
			logger.debug(e.getMessage());
			throw new ExceptionTechnique(e, e.getMessage());
		}
		// on retourne la nouvelle liste
	}

	@Transactional
	public void supprimerHistorique(int id) {
		// on enregistre le nouveau client
		StringBuilder rqt = new StringBuilder();
		rqt.append("DELETE FROM historique ");
		rqt.append("WHERE id=" + id);
		PreparedStatement ps;
		try {
			ps = ds.getConnection().prepareStatement(rqt.toString());
			ps.executeUpdate();

		} catch (SQLException e) {
			logger.debug(e.getMessage());
			throw new ExceptionTechnique(e, e.getMessage());
		}
	}

	@Transactional
	@Override
	public List<Client> ajouterClient(Client nouveauClient) {

		// on enregistre le nouveau client
		StringBuilder rqt = new StringBuilder();
		rqt.append("INSERT INTO client (nom,mel) ");
		rqt.append("VALUES (?, ?)");
		PreparedStatement ps;
		int id = 0;
		try {
			ps = ds.getConnection().prepareStatement(rqt.toString());
			ps.setString(1, nouveauClient.getNom());
			ps.setString(2, nouveauClient.getMel());
			ps.executeUpdate();

		} catch (SQLException e) {
			logger.debug(e.getMessage());
			throw new ExceptionTechnique(e, e.getMessage());
		}

		// on retourne la nouvelle liste de client
		return listerClients();
	}

	@Transactional
	@Override
	public Action ajouterAction(Action nouvelleAction) {
		// on enregistre le nouveau client
		StringBuilder rqt = new StringBuilder();
		rqt.append("INSERT INTO action (titre,etat,client) ");
		rqt.append("VALUES (?, ?, ?)");
		PreparedStatement ps;
		Action action = new Action();
		try {
			ps = ds.getConnection().prepareStatement(rqt.toString(),Statement.RETURN_GENERATED_KEYS);
			ps.setString(1, nouvelleAction.getTitre());
			ps.setInt(2, nouvelleAction.getEtat().getId());
			ps.setInt(3, nouvelleAction.getClient().getId());
			ps.executeUpdate();
			// on récupère l'id attribué
			ResultSet keyset = ps.getGeneratedKeys();
			keyset.next();
			int id = keyset.getInt(1);
			// on crée l'objet action qu'on va retourner
			action.setId(id);
			action.setClient(nouvelleAction.getClient());
			action.setEtat(nouvelleAction.getEtat());
			action.setTitre(nouvelleAction.getTitre());

		} catch (SQLException e) {
			logger.debug(e.getMessage());
			throw new ExceptionTechnique(e, e.getMessage());
		}

		// on retourne la nouvelle liste de client
		return action;
	}

	@Transactional
	@Override
	public void ajouterHistorique(Historique nouvelHistorique) {
		// on enregistre le nouveau client
		StringBuilder rqt = new StringBuilder();
		rqt.append("INSERT INTO historique (action,date,etat) ");
		rqt.append("VALUES (?, ?, ?)");
		PreparedStatement ps;
		int id = 0;
		try {
			ps = ds.getConnection().prepareStatement(rqt.toString());
			ps.setInt(1, nouvelHistorique.getAction().getId());
			ps.setDate(2, nouvelHistorique.getDate());
			ps.setInt(3, nouvelHistorique.getEtat().getId());
			ps.executeUpdate();

		} catch (SQLException e) {
			logger.debug(e.getMessage());
			throw new ExceptionTechnique(e, e.getMessage());
		}
	}

	public List<Action> listerActions() {
		StringBuilder rqt = new StringBuilder();
		rqt.append("SELECT * FROM action ");
		rqt.append("ORDER BY id DESC");
		ResultSet rs;
		List<Action> listeActions = new ArrayList<Action>();
		try {
			rs = ds.getConnection().createStatement().executeQuery(rqt.toString());
			while (rs.next()) {
				Action action = new Action(rs.getInt("id"), rs.getString("titre"), getEtatById(rs.getInt("etat")),
						getClientById(rs.getInt("client")));
				listeActions.add(action);
			}
		} catch (SQLException e) {
			logger.debug(e.getMessage());
			throw new ExceptionTechnique(e, e.getMessage());
		}
		return listeActions;
	}

	public List<Client> listerClients() {
		StringBuilder rqt = new StringBuilder();
		rqt.append("SELECT * FROM client ");
		rqt.append("ORDER BY nom ASC");
		ResultSet rs;
		List<Client> listeClients = new ArrayList<Client>();
		try {
			rs = ds.getConnection().createStatement().executeQuery(rqt.toString());
			while (rs.next()) {

				Client client = new Client(rs.getInt("id"), rs.getString("nom"), rs.getString("mel"));
				listeClients.add(client);
			}
		} catch (SQLException e) {
			logger.debug(e.getMessage());
			throw new ExceptionTechnique(e, e.getMessage());
		}
		return listeClients;
	}

	public Client getClientById(int id) {
		StringBuilder rqt = new StringBuilder();
		rqt.append("SELECT * FROM client ");
		rqt.append("WHERE id=" + id);
		ResultSet rs;
		Client client = new Client();
		try {
			rs = ds.getConnection().createStatement().executeQuery(rqt.toString());
			while (rs.next()) {
				client = new Client(rs.getInt("id"), rs.getString("nom"), rs.getString("mel"));
			}
		} catch (SQLException e) {
			logger.debug(e.getMessage());
			throw new ExceptionTechnique(e, e.getMessage());
		}
		return client;
	}

	public Etat getEtatById(int id) {
		StringBuilder rqt = new StringBuilder();
		rqt.append("SELECT * FROM etat ");
		rqt.append("WHERE id=" + id);
		ResultSet rs;
		Etat etat = new Etat();
		try {
			rs = ds.getConnection().createStatement().executeQuery(rqt.toString());
			while (rs.next()) {
				etat.setId(rs.getInt("id"));
				etat.setLibelle(rs.getString("libelle"));
			}
		} catch (SQLException e) {
			logger.debug(e.getMessage());
			throw new ExceptionTechnique(e, e.getMessage());
		}
		return etat;
	}

	public Action getActionById(int id) {
		StringBuilder rqt = new StringBuilder();
		rqt.append("SELECT * FROM action ");
		rqt.append("WHERE id=" + id);
		ResultSet rs;
		Action action = new Action();
		try {
			rs = ds.getConnection().createStatement().executeQuery(rqt.toString());
			while (rs.next()) {
				action.setId(rs.getInt("id"));
				action.setClient(getClientById(rs.getInt("client")));
				action.setTitre(rs.getString("titre"));
				action.setEtat(getEtatById(rs.getInt("etat")));
			}
		} catch (SQLException e) {
			logger.debug(e.getMessage());
			throw new ExceptionTechnique(e, e.getMessage());
		}
		return action;
	}
	
	public List<Etat> listerEtats() {
		StringBuilder rqt = new StringBuilder();
		rqt.append("SELECT * FROM etat ");
		rqt.append("ORDER BY id ASC");
		ResultSet rs;
		List<Etat> listeEtats = new ArrayList<Etat>();
		try {
			rs = ds.getConnection().createStatement().executeQuery(rqt.toString());
			while (rs.next()) {

			Etat etat = new Etat(rs.getInt("id"), rs.getString("libelle"));
			listeEtats.add(etat);
			}
		} catch (SQLException e) {
			logger.debug(e.getMessage());
			throw new ExceptionTechnique(e, e.getMessage());
		}
		return listeEtats;
	}

	@Override
	public List<Historique> listerHistoriques() {
		StringBuilder rqt = new StringBuilder();
		rqt.append("SELECT * FROM historique ");
		rqt.append("ORDER BY date DESC");
		ResultSet rs;
		List<Historique> listeHistoriques = new ArrayList<Historique>();
		try {
			rs = ds.getConnection().createStatement().executeQuery(rqt.toString());
			while (rs.next()) {
				Historique historique = new Historique(rs.getInt("id"), getActionById(rs.getInt("action")), rs.getDate("date"),getEtatById(rs.getInt("etat")));
				listeHistoriques.add(historique);
			}
		} catch (SQLException e) {
			logger.debug(e.getMessage());
			throw new ExceptionTechnique(e, e.getMessage());
		}
		return listeHistoriques;
	}
}
