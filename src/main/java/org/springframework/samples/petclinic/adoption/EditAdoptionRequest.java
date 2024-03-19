package org.springframework.samples.petclinic.adoption;

import org.hibernate.validator.constraints.Length;

import jakarta.validation.constraints.NotNull;
import lombok.Getter;
import lombok.Setter;

/**
 * Represents the data transfer object for edit an adoption request.
 * @author jormunrod
 */
@Getter
@Setter
public class EditAdoptionRequest {

    @NotNull
    @Length(min = 1, max = 255)
    private String description;
    
}
