package fr.guinez.suivi.client.service;

import java.util.List;

import model.Action;
import model.Client;
import model.Historique;

public interface IAPIService {

	void supprimerAction(Action action);

	void supprimerHistorique(Historique historique);

	void ajouterClient(Client nouveauClient);

	void ajouterAction(Action nouvelleAction);

	void ajouterHistorique(Historique nouvelHistorique);

	List<Client> listerClients();

	List<Action> listerActions(Client client);

}
