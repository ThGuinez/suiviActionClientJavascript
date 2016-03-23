package fr.guinez.suivi.clients.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import fr.guinez.suivi.clients.dao.IApiDao;
import fr.guinez.suivi.clients.model.Action;
import fr.guinez.suivi.clients.model.Client;
import fr.guinez.suivi.clients.model.Etat;
import fr.guinez.suivi.clients.model.Historique;

@Service
public class APIServiceImpl implements IAPIService{

	@Autowired
	IApiDao APiDAO;

	@Override
	public List<Action> supprimerAction(int id) {
		return APiDAO.supprimerAction(id);
		
	}

	@Override
	public void supprimerHistorique(int id) {
		APiDAO.supprimerHistorique(id);
		
	}

	@Override
	public List<Client> ajouterClient(Client nouveauClient) {
		return APiDAO.ajouterClient(nouveauClient);
	}

	@Override
	public Action ajouterAction(Action nouvelleAction) {
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
	public List<Action> listerActions() {
		List<Action> listeActions = APiDAO.listerActions();
		return listeActions;
	}

	@Override
	public List<Etat> listerEtats() {
		List<Etat> listeEtats = APiDAO.listerEtats();
		return listeEtats;
	}

	@Override
	public Client getClientById(int id) {
		return APiDAO.getClientById(id);
	}

	@Override
	public Etat getEtatById(int id) {
		return APiDAO.getEtatById(id);
	}
	
}
