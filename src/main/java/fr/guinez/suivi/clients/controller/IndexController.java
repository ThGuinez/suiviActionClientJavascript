package fr.guinez.suivi.clients.controller;

import org.apache.log4j.Logger;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

@Controller
public class IndexController {
	
	@SuppressWarnings("unused")
	private Logger logger = Logger.getLogger(IndexController.class);
	
	@RequestMapping("*")
	public ModelAndView index() {
		ModelAndView mav = new ModelAndView("index");
		return mav;
	}
	
	
	
	
	
	
	

}
