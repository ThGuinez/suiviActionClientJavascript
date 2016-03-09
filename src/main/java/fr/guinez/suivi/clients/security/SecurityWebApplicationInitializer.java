package fr.guinez.suivi.clients.security;

import org.springframework.security.web.context.AbstractSecurityWebApplicationInitializer;

public class SecurityWebApplicationInitializer extends AbstractSecurityWebApplicationInitializer {
	public SecurityWebApplicationInitializer() {
        super(SecurityConfig.class);
    }
}
