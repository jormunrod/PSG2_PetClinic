package org.springframework.samples.petclinic.adoption;

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
    private String description;

    @NotNull
    private Integer petId;
    
}
