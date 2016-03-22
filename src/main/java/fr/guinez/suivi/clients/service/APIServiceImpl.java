package fr.guinez.suivi.clients.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import fr.guinez.suivi.clients.dao.IApiDao;
import fr.guinez.suivi.clients.model.Action;
import fr.guinez.suivi.clients.model.Client;
import fr.guinez.suivi.clients.model.Historique;

@Service
public class APIServiceImpl implements IAPIService{

	@Autowired
	IApiDao APiDAO;

	@Override
	public List<Action> supprimerAction(Action action) {
		return APiDAO.supprimerAction(action);
		
	}

	@Override
	public void supprimerHistorique(Historique historique) {
		APiDAO.supprimerHistorique(historique);
		
	}

	@Override
	public List<Client> ajouterClient(Client nouveauClient) {
		return APiDAO.ajouterClient(nouveauClient);
	}

	@Override
	public List<Action> ajouterAction(Action nouvelleAction) {
		return APiDAO.ajouterAction(nouvelleAction);	
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
