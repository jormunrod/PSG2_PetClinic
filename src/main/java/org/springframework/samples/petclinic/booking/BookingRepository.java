package org.springframework.samples.petclinic.booking;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

public interface BookingRepository extends CrudRepository<Booking, Integer> {
    @Query("select b from Booking b where b.id=:id")
    Booking findBookingById(int id);

    @Query("select b from Booking b where b.pet.id=:petId order by b.startDate DESC")
    Optional<Booking> findByPetId(Integer petId);

    @Query("select b from Booking b where b.room.id=:roomId order by b.startDate DESC")
    Optional<Booking> findByRoomId(Integer roomId);

    @Query("select b from Booking b where b.owner.id=:ownerId order by b.startDate DESC")
    List<Booking> findByOwnerId(Integer ownerId);

    @Query("SELECT b FROM Booking b WHERE b.startDate >= :startOfDay AND b.startDate < :endOfDay")
    List<Booking> findBookingByStartDate(LocalDateTime startOfDay,  LocalDateTime endOfDay);
    
}
