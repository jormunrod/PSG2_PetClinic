package org.springframework.samples.petclinic.adoption.exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

/**
 * Exception for when the user tries to accept an adoption for a pet that is not his.
 * @author jormunrod
 */
@ResponseStatus(value = HttpStatus.BAD_REQUEST)
public class NotYourPetException extends RuntimeException{

	private static final long serialVersionUID = -3330551940727004798L;
	
	public NotYourPetException() {
		super("You can't accept an adoption for a pet that is not yours.");
	}
    
}
