package org.springframework.samples.petclinic.room;

import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class RoomDTO {

    private Integer roomId;

    @NotNull
    private String name;

    @NotNull
    @Enumerated(EnumType.STRING)
    private AllowedPetType allowedPetType;

    @NotNull
    private Integer clinicId;

    @NotNull
    @Min(1)
    private Integer size;
    
}
