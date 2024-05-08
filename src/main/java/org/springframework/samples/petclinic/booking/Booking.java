package org.springframework.samples.petclinic.booking;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;
import lombok.Getter;
import lombok.Setter;
import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;
import org.springframework.samples.petclinic.model.BaseEntity;
import org.springframework.samples.petclinic.owner.Owner;
import org.springframework.samples.petclinic.pet.Pet;
import org.springframework.samples.petclinic.room.Room;

import java.time.LocalDateTime;

@Entity
@Getter
@Setter
@Table(name = "bookings")
public class Booking extends BaseEntity {

    @Column(name = "start_date")
    @NotNull
    private LocalDateTime startDate;

    @Column(name = "end_date")
    @NotNull
    private LocalDateTime endDate;

    @ManyToOne
    @JoinColumn(name = "owner_id")
    @OnDelete(action = OnDeleteAction.CASCADE)
    private Owner owner;

    @ManyToOne
    @JoinColumn(name = "pet_id")
    @OnDelete(action = OnDeleteAction.CASCADE)
    private Pet pet;

    @ManyToOne
    @JoinColumn(name = "room_id")
    @OnDelete(action = OnDeleteAction.CASCADE)
    private Room room;
}
