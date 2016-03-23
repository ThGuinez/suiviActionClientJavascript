package fr.guinez.suivi.clients.service;

import java.util.List;

import fr.guinez.suivi.clients.model.Action;
import fr.guinez.suivi.clients.model.Client;
import fr.guinez.suivi.clients.model.Etat;
import fr.guinez.suivi.clients.model.Historique;

public interface IAPIService {

	void supprimerAction(int id);

	void supprimerHistorique(int id);

	List<Client> ajouterClient(Client nouveauClient);

	Action ajouterAction(Action nouvelleAction);

	void ajouterHistorique(Historique nouvelHistorique);

	List<Client> listerClients();

	List<Action> listerActions();

	List<Etat> listerEtats();
	
	Client getClientById(int id);

	Etat getEtatById(int id);

	List<Historique> listerHistoriques();


}
