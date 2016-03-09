package fr.guinez.suivi.clients.security;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.view.InternalResourceViewResolver;

@Configuration
@ComponentScan("fr.guinez.suivi.clients")
public class MvcConfig {
     
    @Bean(name = "viewResolver")
    public InternalResourceViewResolver getViewResolver() {
        InternalResourceViewResolver viewResolver = new InternalResourceViewResolver();
        viewResolver.setPrefix("/WEB-INF/jsp/");
        viewResolver.setSuffix(".jsp");
        return viewResolver;
    }
    
    /*
    @Bean(name = "dataSource")
    public DriverManagerDataSource getDataSource() {
    	ResourceBundle dbBundle = ResourceBundle.getBundle("database");
    	dbBundle.getString("db.ip");
        DriverManagerDataSource driverManagerDataSource = new DriverManagerDataSource();
        driverManagerDataSource.setDriverClassName("org.postgresql.Driver");
        driverManagerDataSource.setUrl("jdbc:postgresql://"+dbBundle.getString("db.ip")+":5432/"+dbBundle.getString("db.dbname"));
        driverManagerDataSource.setUsername(dbBundle.getString("db.user"));
        driverManagerDataSource.setPassword(dbBundle.getString("db.password"));
        return driverManagerDataSource;
    }
    */
    
    /*
    @Bean(name = "resourceBundleViewResolver")
	public ResourceBundleViewResolver getResourceBundleViewResolver(){
    	ResourceBundleViewResolver rbvr = new ResourceBundleViewResolver();
    	rbvr.setOrder(0);
    	rbvr.setBasename("views");
    	return rbvr;
    }
    */
    
    
}
