package fr.guinez.suivi.clients.dao;

import java.util.List;

import fr.guinez.suivi.clients.model.Action;
import fr.guinez.suivi.clients.model.Client;
import fr.guinez.suivi.clients.model.Historique;

public interface IApiDao {

	void supprimerAction(Action action);

	void supprimerHistorique(Historique historique);

	void ajouterClient(Client nouveauClient);

	void ajouterHistorique(Historique nouvelHistorique);

	void ajouterAction(Action nouvelleAction);

	List<Client> listerClients();

	List<Action> listerActions(Client client);

}
