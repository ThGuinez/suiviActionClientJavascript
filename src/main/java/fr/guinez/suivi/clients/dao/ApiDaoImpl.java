package fr.guinez.suivi.clients.dao;

import java.util.List;

import javax.sql.DataSource;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import fr.guinez.suivi.clients.model.Action;
import fr.guinez.suivi.clients.model.Client;
import fr.guinez.suivi.clients.model.Historique;

@Repository
public class ApiDaoImpl implements IApiDao {

	private Logger logger = Logger.getLogger(ApiDaoImpl.class);

	@Autowired
	private DataSource ds;

	public void supprimerAction(Action action) {
		// TODO Auto-generated method stub

	}

	public void supprimerHistorique(Historique historique) {
		// TODO Auto-generated method stub

	}

	@Transactional
	@Override
	public void ajouterClient(Client nouveauClient) {

		/*
		 * PersonneDaoImpl personneDao = new PersonneDaoImpl(ds); int idPersonne
		 * = personneDao.creerPersonne(adherent.getPersonne());
		 * 
		 * StringBuilder rqt = new StringBuilder(); rqt.append(
		 * "INSERT INTO adherent (date_inscription, statut, compte, id_personne, id_param_categorie_adherent) "
		 * ); rqt.append("VALUES (?, ?, ?, ?, ?)"); PreparedStatement ps; int id
		 * = 0; try { ps =
		 * ds.getConnection().prepareStatement(rqt.toString(),Statement.
		 * RETURN_GENERATED_KEYS); ps.setDate(1,
		 * DateUtils.getSqlDate(DateUtils.today())); ps.setBoolean(2,
		 * false);//mettre à true quand on crée une operation d'abonnement
		 * ps.setFloat(3, 0); ps.setInt(4, idPersonne); ps.setInt(5,
		 * adherent.getCategorie().getId()); ps.execute(); ResultSet keyset =
		 * ps.getGeneratedKeys(); keyset.next(); id = keyset.getInt(1); } catch
		 * (SQLException e) { logger.debug(e.getMessage()); throw new
		 * ExceptionTechnique(e, e.getMessage()); } return id;
		 */
	}

	public void ajouterAction(Action nouvelleAction) {
		// TODO Auto-generated method stub

	}

	public void ajouterHistorique(Historique nouvelHistorique) {
		// TODO Auto-generated method stub

	}

	public List<Action> listerActions(Client client) {
		// TODO Auto-generated method stub
		return null;
	}

	public List<Client> listerClients() {
		// TODO Auto-generated method stub
		return null;
	}

}
