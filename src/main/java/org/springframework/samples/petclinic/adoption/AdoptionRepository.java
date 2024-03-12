package org.springframework.samples.petclinic.adoption;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

/**
 * Repository for Adoptions.
 * @author jormunrod
 */
public interface AdoptionRepository extends CrudRepository<Adoption, Integer> {

    @Query("SELECT a FROM Adoption a WHERE a.pet.id = :petId")
    List<Adoption> findAllAdoptionsByPetId(int petId);
    
}
