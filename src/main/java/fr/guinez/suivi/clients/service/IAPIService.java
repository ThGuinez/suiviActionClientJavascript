package fr.guinez.suivi.clients.service;

import java.util.List;

import fr.guinez.suivi.clients.model.Action;
import fr.guinez.suivi.clients.model.Client;
import fr.guinez.suivi.clients.model.Historique;

public interface IAPIService {

	List<Action> supprimerAction(Action action);

	void supprimerHistorique(Historique historique);

	List<Client> ajouterClient(Client nouveauClient);

	List<Action> ajouterAction(Action nouvelleAction);

	void ajouterHistorique(Historique nouvelHistorique);

	List<Client> listerClients();

	List<Action> listerActions(Client client);

}
