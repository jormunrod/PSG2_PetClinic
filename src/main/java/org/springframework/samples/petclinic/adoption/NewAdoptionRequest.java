package org.springframework.samples.petclinic.adoption;

import jakarta.validation.constraints.NotNull;
import lombok.Getter;
import lombok.Setter;

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
