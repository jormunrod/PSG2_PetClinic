package org.springframework.samples.petclinic.adoption;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.samples.petclinic.adoption.exceptions.IsYourPetException;
import org.springframework.samples.petclinic.adoption.exceptions.NotInAdoptionException;
import org.springframework.samples.petclinic.adoption.exceptions.NotYourPetException;
import org.springframework.samples.petclinic.exceptions.AccessDeniedException;
import org.springframework.samples.petclinic.exceptions.ResourceNotFoundException;
import org.springframework.samples.petclinic.owner.Owner;
import org.springframework.samples.petclinic.owner.OwnerRepository;
import org.springframework.samples.petclinic.pet.Pet;
import org.springframework.samples.petclinic.pet.PetRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

/**
 * Service for Adoptions.
 * @author jormunrod
 */
@Service
public class AdoptionService {

    private AdoptionRepository adoptionRepository;
    private OwnerRepository ownerRepository;
    private PetRepository petRepository;

    @Autowired
    public AdoptionService(AdoptionRepository adoptionRepository, OwnerRepository ownerRepository, PetRepository petRepository) {
        this.adoptionRepository = adoptionRepository;
        this.ownerRepository = ownerRepository;
        this.petRepository = petRepository;
    }

    @Transactional
    public void saveAdoption(Adoption adoption) {
        adoptionRepository.save(adoption);
    }

    @Transactional
    public void deleteAdoption(Adoption adoption) {
        adoptionRepository.delete(adoption);
    }

    @Transactional(readOnly = true)
    public Adoption findAdoptionById(int id) {
        return adoptionRepository.findById(id)
        .orElseThrow(() -> new ResourceNotFoundException("Adoption", "ID", id));
    }

    @Transactional(readOnly = true)
    public Iterable<Adoption> findAllAdoptions() {
        return adoptionRepository.findAll();
    }

    @Transactional(readOnly = true)
    public Iterable<Adoption> findAllAdoptionsByPetId(int petId) {
        return adoptionRepository.findAllAdoptionsByPetId(petId);
    }

    @Transactional
    public Adoption createAdoption(NewAdoptionRequest newAdoptionRequest) {
        Integer petId = newAdoptionRequest.getPetId();
        Integer applicantId = newAdoptionRequest.getApplicantId();
        String description = newAdoptionRequest.getDescription();

        Owner applicant = ownerRepository.findByUser(applicantId).get();
        Pet pet = petRepository.findById(petId)
        .orElseThrow(() -> new ResourceNotFoundException("Pet", "ID", petId));

        if(pet.getIsAvailableForAdoption() == false){
            throw new NotInAdoptionException();
        }

        if(pet.getOwner().getId().equals(applicantId )){
            throw new IsYourPetException();
        }
        
        Adoption adoption = new Adoption();
        adoption.setDescription(description);
        adoption.setApplicant(applicant);
        adoption.setPet(pet);
        saveAdoption(adoption);
        return adoption;
    }

    @Transactional
    public void adoptPet(int adoptionId, int userId) {
        Adoption adoption = findAdoptionById(adoptionId);
        Pet pet = adoption.getPet();

        if(pet.getOwner().getUser().getId() != userId){
            throw new NotYourPetException();
        }

        pet.setOwner(adoption.getApplicant());
        pet.setIsAvailableForAdoption(false);
        petRepository.save(pet);
        deleteAllAdoptionsByPetId(pet.getId());
    }

    @Transactional
    public void deleteAllAdoptionsByPetId(int petId) {
        Iterable<Adoption> adoptions = findAllAdoptionsByPetId(petId);
        for(Adoption adoption : adoptions){
            deleteAdoption(adoption);
        }
    }

    @Transactional
    public void deleteAdoptionByPetIdAndUserId(int petId, int userId) {
        Iterable<Adoption> adoptions = findAllAdoptionsByPetId(petId);
        for(Adoption adoption : adoptions){
            if(adoption.getApplicant().getUser().getId() == userId){
                deleteAdoption(adoption);
            }
        }
    }

    @Transactional
    public Adoption updateAdoption(int id, EditAdoptionRequest editAdoptionRequest, int userId){
        Adoption adoption = findAdoptionById(id);
        if(adoption.getApplicant().getUser().getId() != userId){
            throw new AccessDeniedException("You are not the owner of this adoption");
        }
        adoption.setDescription(editAdoptionRequest.getDescription());
        saveAdoption(adoption);
        return adoption;
    }
    
}
