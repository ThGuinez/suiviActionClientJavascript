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
import fr.guinez.suivi.clients.model.Historique;

@Repository
public class ApiDaoImpl implements IApiDao {

	private Logger logger = Logger.getLogger(ApiDaoImpl.class);

	@Autowired
	private DataSource ds;

	public List<Action> supprimerAction(Action action) {
		return null; // TODO Auto-generated method stub

	}

	public void supprimerHistorique(Historique historique) {
		// TODO Auto-generated method stub

	}

	@Transactional
	@Override
	public List<Client> ajouterClient(Client nouveauClient) {

		// on enregistre  le nouveau client
		StringBuilder rqt = new StringBuilder();
		rqt.append("INSERT INTO client (nom,mel) ");
		rqt.append("VALUES (?, ?)");
		PreparedStatement ps;
		int id = 0;
		try {
			ps = ds.getConnection().prepareStatement(rqt.toString());
			ps.setString(1, nouveauClient.getNom());
			ps.setString(2,nouveauClient.getMel());
			ps.executeUpdate();

		} catch (SQLException e) {
			logger.debug(e.getMessage());
			throw new ExceptionTechnique(e, e.getMessage());
		}	
		
		// on retourne la nouvelle liste de client
		return listerClients(); 
	} 

	public List<Action> ajouterAction(Action nouvelleAction) {
		// TODO Auto-generated method stub
		return null;
	}

	public void ajouterHistorique(Historique nouvelHistorique) {
		// TODO Auto-generated method stub

	}

	public List<Action> listerActions(Client client) {
		// TODO Auto-generated method stub
		return null;
	}

	public List<Client> listerClients() {
		StringBuilder rqt = new StringBuilder();
		rqt.append("SELECT * FROM client ");
		rqt.append("ORDER BY nom ASC");
		ResultSet rs;
		List<Client> listeClients = new ArrayList<>();
		try {
			rs = ds.getConnection().createStatement().executeQuery(rqt.toString());
			while (rs.next()) {
				
				Client client = new Client(rs.getInt("id"),rs.getString("nom"),rs.getString("mel"));
				listeClients.add(client);
			}
		} catch (SQLException e) {
			logger.debug(e.getMessage());
			throw new ExceptionTechnique(e, e.getMessage());
		} 
		return listeClients;
	}

}
