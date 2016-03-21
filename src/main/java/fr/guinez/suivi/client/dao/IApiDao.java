package fr.guinez.suivi.client.dao;

import java.util.List;

import model.Action;
import model.Client;
import model.Historique;

public interface IApiDao {

	void supprimerAction(Action action);

	void supprimerHistorique(Historique historique);

	void ajouterClient(Client nouveauClient);

	void ajouterHistorique(Historique nouvelHistorique);

	void ajouterAction(Action nouvelleAction);

	List<Client> listerClients();

	List<Action> listerActions(Client client);

}
