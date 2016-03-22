package fr.guinez.suivi.clients.dao;

import java.util.List;

import fr.guinez.suivi.clients.model.Action;
import fr.guinez.suivi.clients.model.Client;
import fr.guinez.suivi.clients.model.Historique;

public interface IApiDao {

	List<Action> supprimerAction(Action action);

	void supprimerHistorique(Historique historique);

	List<Client> ajouterClient(Client nouveauClient);

	void ajouterHistorique(Historique nouvelHistorique);

	List<Action> ajouterAction(Action nouvelleAction);

	List<Client> listerClients();

	List<Action> listerActions(Client client);

}
