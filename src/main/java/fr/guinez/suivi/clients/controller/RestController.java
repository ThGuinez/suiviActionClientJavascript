package fr.guinez.suivi.clients.controller;

import java.util.List;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import fr.guinez.suivi.clients.model.Action;
import fr.guinez.suivi.clients.model.Client;
import fr.guinez.suivi.clients.model.Etat;
import fr.guinez.suivi.clients.model.Hello;
import fr.guinez.suivi.clients.model.Historique;
import fr.guinez.suivi.clients.service.IAPIService;

@SuppressWarnings("unused")
@Controller
@ResponseBody
public class RestController {

	private Logger logger = Logger.getLogger(IndexController.class);
		
	@Autowired
	private IAPIService APIService;
	
	// clients

	@RequestMapping(value="/api/v1/clients", method=RequestMethod.GET)
	public List<Client> listerClients() {
		List<Client> listeClients = APIService.listerClients();
		return listeClients;
	}

	@RequestMapping(value="/api/v1/clients", method=RequestMethod.POST)
	public List<Client> ajouterClient(@RequestBody Client client) {
		Client nouveauClient = new Client(client.getNom(),client.getMel());
		List<Client> listeClients = APIService.ajouterClient(nouveauClient);
		return listeClients;
	}
	
	// actions
	
	@RequestMapping(value="/api/v1/actions", method=RequestMethod.POST)
	public List<Action> ajouterAction(@RequestBody Action action) {
		Action nouvelleAction = new Action(action.getTitre(),action.getEtat(),action.getClient());
		List<Action> listeActions = APIService.ajouterAction(nouvelleAction);
		return listeActions;
	}	
	
	@RequestMapping(value="/api/v1/actions", method=RequestMethod.GET)
	public List<Action> listerActions() {
		List<Action> listeActions = APIService.listerActions();
		return listeActions;
	}	

	@RequestMapping(value="/api/v1/actions/{id}", method=RequestMethod.DELETE)
	public List<Action> supprimerAction(@PathVariable("id") String id) {
		List<Action> listeActions = APIService.supprimerAction(Integer.parseInt(id));
		return listeActions;
	}	
	
	// historiques

	@RequestMapping(value="/api/v1/historiques", method=RequestMethod.POST)
	public void ajouterHistorique(@RequestBody Historique historique) {
		Historique nouvelHistorique = new Historique(historique.getAction(),historique.getDate(),historique.getEtat());
		APIService.ajouterHistorique(nouvelHistorique);
	}
	
	@RequestMapping(value="/api/v1/historiques/{id}", method=RequestMethod.DELETE)
	public void supprimerHistorique(@PathVariable("id") String id) {
		APIService.supprimerHistorique(Integer.parseInt(id));
	}
	
	// etats
	
	@RequestMapping(value="/api/v1/etats", method=RequestMethod.GET)
	public List<Etat> listerEtats() {
		List<Etat> listeEtats = APIService.listerEtats();
		return listeEtats;
	}
}
