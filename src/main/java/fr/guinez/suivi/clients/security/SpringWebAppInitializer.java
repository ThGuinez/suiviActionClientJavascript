package fr.guinez.suivi.clients.security;

import javax.servlet.ServletContext;
import javax.servlet.ServletException;
import javax.servlet.ServletRegistration;

import org.springframework.web.WebApplicationInitializer;
import org.springframework.web.context.support.AnnotationConfigWebApplicationContext;
import org.springframework.web.servlet.DispatcherServlet;

public class SpringWebAppInitializer implements WebApplicationInitializer {

	@Override
	public void onStartup(ServletContext servletContext) throws ServletException {
		AnnotationConfigWebApplicationContext appContext = new AnnotationConfigWebApplicationContext();
        appContext.register(MvcConfig.class);
         
        ServletRegistration.Dynamic dispatcher = servletContext.addServlet(
                "SpringDispatcher", new DispatcherServlet(appContext));
        dispatcher.setLoadOnStartup(1);
        dispatcher.addMapping("/");
//        dispatcher.addMapping("*.css");
//        dispatcher.addMapping("*.js");
//        dispatcher.addMapping("*.jpg");
//        dispatcher.addMapping("*.png");
//        dispatcher.addMapping("*.gif");
//        dispatcher.addMapping("*.ico");
//        dispatcher.addMapping("*.ttf");
//        dispatcher.addMapping("*.woff");
//        dispatcher.addMapping("*.woff2");
//        dispatcher.addMapping("*.eot");
//        dispatcher.addMapping("*.svg");
//        dispatcher.addMapping("*.map");
//        dispatcher.addMapping("*.less");
	}

}
