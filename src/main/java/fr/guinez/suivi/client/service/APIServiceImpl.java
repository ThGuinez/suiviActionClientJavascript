package fr.guinez.suivi.client.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import fr.guinez.suivi.client.dao.IApiDao;
import model.Action;
import model.Client;
import model.Historique;

@Service
public class APIServiceImpl implements IAPIService{

	@Autowired
	IApiDao APiDAO;

	@Override
	public void supprimerAction(Action action) {
		APiDAO.supprimerAction(action);
		
	}

	@Override
	public void supprimerHistorique(Historique historique) {
		APiDAO.supprimerHistorique(historique);
		
	}

	@Override
	public void ajouterClient(Client nouveauClient) {
		APiDAO.ajouterClient(nouveauClient);
		
	}

	@Override
	public void ajouterAction(Action nouvelleAction) {
		APiDAO.ajouterAction(nouvelleAction);
		
	}

	@Override
	public void ajouterHistorique(Historique nouvelHistorique) {
		APiDAO.ajouterHistorique(nouvelHistorique);
		
	}

	@Override
	public List<Client> listerClients() {
		List<Client> listeClients = APiDAO.listerClients();
		return listeClients;
	}

	@Override
	public List<Action> listerActions(Client client) {
		List<Action> listeActions = APiDAO.listerActions(client);
		return listeActions;
	}
	
}
