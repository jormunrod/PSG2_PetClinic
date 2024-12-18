package org.springframework.samples.petclinic.adoption;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.samples.petclinic.exceptions.AccessDeniedException;
import org.springframework.samples.petclinic.user.UserService;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import io.swagger.v3.oas.annotations.security.SecurityRequirement;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.Valid;

/**
 * Controller for Adoptions.
 * @author jormunrod
 */
@RestController
@RequestMapping("/api/v1/adoptions")
@Tag(name = "Adoptions", description = "The Adoptions management API")
@SecurityRequirement(name = "bearerAuth")
public class AdoptionRestController {

    private final AdoptionService adoptionService;
    private final UserService userService;

    @Autowired
    public AdoptionRestController(AdoptionService adoptionService, UserService userService) {
        this.adoptionService = adoptionService;
        this.userService = userService;
    }

    @GetMapping()
    @ResponseStatus(HttpStatus.OK)
    public Iterable<Adoption> getAllAdoptions() {
        return adoptionService.findAllAdoptions();
    }

    @GetMapping("/{id}")
    @ResponseStatus(HttpStatus.OK)
    public Adoption getAdoptionById(@PathVariable int id) {
        return adoptionService.findAdoptionById(id);
    }

    @GetMapping("/pet/{petId}")
    @ResponseStatus(HttpStatus.OK)
    public Iterable<Adoption> getAdoptionsByPetId(@PathVariable int petId) {
        return adoptionService.findAllAdoptionsByPetId(petId);
    }

    @PostMapping()
    @ResponseStatus(HttpStatus.CREATED)
    public Adoption createAdoption(@RequestBody @Valid NewAdoptionRequest newAdoptionRequest) {
        return adoptionService.createAdoption(newAdoptionRequest);
    }

    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deleteAdoption(@PathVariable int id) {
        Adoption adoption = adoptionService.findAdoptionById(id);
        adoptionService.deleteAdoption(adoption);
    }

    @PutMapping("/{id}/accept")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void adoptPet(@PathVariable int id) {
        Integer userId = userService.findCurrentUser().getId();
        adoptionService.adoptPet(id, userId);
    }

    @PutMapping("/{id}")
    @ResponseStatus(HttpStatus.OK)
    public Adoption updateAdoption(@PathVariable int id, @RequestBody @Valid EditAdoptionRequest editAdoptionRequest) {
        Integer userId = userService.findCurrentUser().getId();
        return adoptionService.updateAdoption(id, editAdoptionRequest, userId);
    }


    @DeleteMapping("/pet/{petId}/user/{userId}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deleteAdoptionByPetId(@PathVariable int petId, @PathVariable int userId) {
        Integer tokenUserId = userService.findCurrentUser().getId();
        if (tokenUserId != userId) {
            throw new AccessDeniedException();
        }
        adoptionService.deleteAdoptionByPetIdAndUserId(petId, userId);
    }

    
    
}
