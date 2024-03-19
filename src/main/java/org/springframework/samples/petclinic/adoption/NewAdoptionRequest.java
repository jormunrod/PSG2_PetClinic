package org.springframework.samples.petclinic.adoption;

import org.hibernate.validator.constraints.Length;

import jakarta.validation.constraints.NotNull;
import lombok.Getter;
import lombok.Setter;

/**
 * Represents the data transfer object for a new adoption request.
 * @author jormunrod
 */
@Getter
@Setter
public class NewAdoptionRequest {

    @NotNull
    private Integer applicantId;

    @NotNull
    @Length(min = 1, max = 255)
    private String description;

    @NotNull
    private Integer petId;
    
}
