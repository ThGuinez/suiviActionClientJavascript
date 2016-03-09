package fr.guinez.suivi.clients.security;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.builders.WebSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.web.csrf.CsrfFilter;
import org.springframework.web.filter.CharacterEncodingFilter;

@Configuration
@EnableWebSecurity
@ComponentScan(basePackages = "fr.guinez.suivi.clients")
public class SecurityConfig extends WebSecurityConfigurerAdapter {	
	
	@Autowired
    public void configureGlobal(AuthenticationManagerBuilder auth) throws Exception {
        auth
            .inMemoryAuthentication()
                .withUser("admin@gmail.com").password("admin").roles("ADMIN");
        auth
    	.inMemoryAuthentication()
    		.withUser("antoine").password("").roles("USER");
        
        auth
    	.inMemoryAuthentication()
    		.withUser("thomas").password("").roles("USER");
    }	
     
    @Override
    protected void configure(HttpSecurity http) throws Exception {
    	//Permet de forcer l'encodage UTF8 des données provenant de formulaire JSP
    	CharacterEncodingFilter filter = new CharacterEncodingFilter();
	    filter.setEncoding("UTF-8");
	    filter.setForceEncoding(true);
    	http.addFilterBefore(filter, CsrfFilter.class);
    	
    	http.formLogin().loginPage("/login")
    	.and()
    	.authorizeRequests()
    	.antMatchers("/login").permitAll()
    	.antMatchers("/suivi").access("hasRole('USER')")
    	.anyRequest().authenticated();
    	
    }   
    
    @Override
    public void configure(WebSecurity web) throws Exception {
        web
            .ignoring()
                // Spring Security should completely ignore URLs starting with /resources/
                .antMatchers("/css/**")
                .antMatchers("/img/**")
                .antMatchers("/js/**")
                .antMatchers("/outils/**")
                ;
    }
}
