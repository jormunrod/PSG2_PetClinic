package org.springframework.samples.petclinic.adoption;

import org.hibernate.validator.constraints.Length;
import org.springframework.samples.petclinic.model.BaseEntity;
import org.springframework.samples.petclinic.model.NamedEntity;
import org.springframework.samples.petclinic.owner.Owner;
import org.springframework.samples.petclinic.pet.Pet;

import jakarta.persistence.Entity;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.Getter;
import lombok.Setter;

/**
 * Simple business object representing an adoption.
 * 
 * 
 * @Author: jormunrod
 */
@Entity
@Table(name = "adoptions")
@Getter
@Setter
public class Adoption extends BaseEntity {
    
    @NotBlank
    @Length(max = 255)
    private String description;

    @NotNull
    @ManyToOne(optional = false)
    private Owner applicant;

    @NotNull
    @ManyToOne(optional = false)
    private Pet pet;
    
}
