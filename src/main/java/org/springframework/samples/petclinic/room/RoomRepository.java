package org.springframework.samples.petclinic.room;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RoomRepository extends CrudRepository<Room, Integer>{

    @Query("SELECT r FROM Room r WHERE r.clinic.clinicOwner.user.id = :userId")
    public List<Room> findByUserId(Integer userId);
     
}
