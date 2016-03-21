package fr.guinez.suivi.clients.controller;

import java.util.List;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import fr.guinez.suivi.clients.model.Action;
import fr.guinez.suivi.clients.model.Client;
import fr.guinez.suivi.clients.model.Hello;
import fr.guinez.suivi.clients.model.Historique;
import fr.guinez.suivi.clients.service.IAPIService;

@SuppressWarnings("unused")
@Controller
@ResponseBody

public class RestController {

	private Logger logger = Logger.getLogger(IndexController.class);
		
//	@RequestMapping(value="/api/v1/imie", method=RequestMethod.GET)
//	//public Hello index(ModelMap model, Principal principal) {
//	public Hello hello() {
//		Hello obj = new Hello();
//		return obj;
//	}

	@Autowired
	private IAPIService APIService;
	
	@RequestMapping(value="/api/v1/ajoutClient", method=RequestMethod.POST)
	public Client ajouterClient(Client client) {
		Client nouveauClient = new Client(client.getNom(),client.getMel());
		APIService.ajouterClient(nouveauClient);
		return nouveauClient;
	}

	@RequestMapping(value="/api/v1/ajoutAction", method=RequestMethod.POST)
	public Action ajouterAction(Action action) {
		Action nouvelleAction = new Action(action.getTitre(),action.getEtat(),action.getClient());
		APIService.ajouterAction(nouvelleAction);
		return nouvelleAction;
	}
	
	@RequestMapping(value="/api/v1/ajoutHistorique", method=RequestMethod.POST)
	public Historique ajouterHistorique(Historique historique) {
		Historique nouvelHistorique = new Historique(historique.getAction(),historique.getDate(),historique.getEtat());
		APIService.ajouterHistorique(nouvelHistorique);
		return nouvelHistorique;
	}
	
	@RequestMapping(value="/api/v1/supprimerAction", method=RequestMethod.DELETE)
	public void supprimerAction(Action action) {
		APIService.supprimerAction(action);
	}

	@RequestMapping(value="/api/v1/supprimerHistorique", method=RequestMethod.DELETE)
	public void supprimerHistorique(Historique historique) {
		APIService.supprimerHistorique(historique);
	}

	@RequestMapping(value="/api/v1/listerClients", method=RequestMethod.GET)
	public List<Client> listerClients() {
		List<Client> listeClients = APIService.listerClients();
		return listeClients;
	}
	
	@RequestMapping(value="/api/v1/listerActions", method=RequestMethod.GET)
	public List<Action> listerActions(Client client) {
		List<Action> listeActions = APIService.listerActions(client);
		return listeActions;
	}	
	
}
