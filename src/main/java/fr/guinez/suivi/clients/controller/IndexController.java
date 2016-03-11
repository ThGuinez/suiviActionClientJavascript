package fr.guinez.suivi.clients.controller;

import java.security.Principal;

import org.apache.log4j.Logger;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

@Controller
public class IndexController {
	
	private Logger logger = Logger.getLogger(IndexController.class);
	
	@RequestMapping({"/", "/index"})
	public ModelAndView index(ModelMap model, Principal principal) {
		ModelAndView mav = new ModelAndView("index");
		mav.getModelMap().addAttribute("user", principal.getName());
		return mav;
	}
	
	
	
	
	
	
	

}
