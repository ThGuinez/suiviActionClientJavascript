package fr.guinez.suivi.clients.exception;

@SuppressWarnings("serial")
public class ExceptionTechnique extends RuntimeException {
	
	private String message;
	
	public ExceptionTechnique(Exception e, String message) {
		this.message = message;	
	}
	
	@Override
	public String getMessage() {
		return message;
	}
}
