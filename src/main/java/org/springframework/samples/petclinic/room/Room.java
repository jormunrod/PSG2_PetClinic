package org.springframework.samples.petclinic.room;
import org.springframework.samples.petclinic.clinic.Clinic;
import org.springframework.samples.petclinic.model.BaseEntity;

import jakarta.persistence.Column;
import jakarta.persistence.ConstraintMode;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.ForeignKey;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotNull;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
@Table(name = "rooms")
public class Room extends BaseEntity {

    @Column(name = "name")
    @NotNull
    private String name;

    @Column(name = "allowed_pet_type")
    @Enumerated(EnumType.STRING)
    @NotNull
    private AllowedPetType allowedPetType;

    @ManyToOne
    @JoinColumn(name = "clinic", nullable = false,
                foreignKey = @ForeignKey(name = "FK_clinic", value = ConstraintMode.CONSTRAINT))
    private Clinic clinic;

    @Column(name = "size")
    @Min(1)
    @NotNull
    private Integer size;
}
