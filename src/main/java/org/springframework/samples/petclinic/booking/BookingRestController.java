package org.springframework.samples.petclinic.booking;

import io.swagger.v3.oas.annotations.security.SecurityRequirement;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.Valid;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.samples.petclinic.auth.payload.response.MessageResponse;
import org.springframework.samples.petclinic.owner.Owner;
import org.springframework.samples.petclinic.owner.OwnerService;
import org.springframework.samples.petclinic.user.UserService;
import org.springframework.samples.petclinic.util.RestPreconditions;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/v1/bookings")
@Tag(name = "Bookings", description = "API for the management of Bookings")
@SecurityRequirement(name = "bearerAuth")
public class BookingRestController {

    private final OwnerService ownerService;
    private final BookingService bookingService;
    private final UserService userService;

    @Autowired
    BookingRestController(BookingService bookingService, OwnerService ownerService,UserService userService) {
        this.bookingService = bookingService;
        this.ownerService = ownerService;
        this.userService=userService;
    }

    @GetMapping
    public ResponseEntity<List<Booking>> findAllBookings() {
        return new ResponseEntity<>(bookingService.findAll(), HttpStatus.OK);
    }

    @GetMapping(value = "{bookingId}")
    public ResponseEntity<Booking> findBookingById(@PathVariable("bookingId") int bookingId) {
        return new ResponseEntity<>(bookingService.findBookingById(bookingId), HttpStatus.OK);
    }

    @GetMapping(value = "owners")
    public ResponseEntity<List<Booking>> findBookingsOfOwner(@RequestParam int ownerId) {
        return new ResponseEntity<>(bookingService.findBookingsByOwnerId(ownerId), HttpStatus.OK);
    }

    @GetMapping(value = "rooms")
    public ResponseEntity<Booking> findBookingsOfRoom(@RequestParam int roomId) {
        return new ResponseEntity<>(bookingService.findBookingsByRoomId(roomId).orElse(null), HttpStatus.OK);
    }

    @GetMapping(value = "petId")
    public ResponseEntity<Booking> findBookingsOfPet(@RequestParam int petId) {
        return new ResponseEntity<>(bookingService.findBookingsByPetId(petId).orElse(null), HttpStatus.OK);
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public ResponseEntity<MessageResponse> createRoom(@RequestBody @Valid Booking booking) {
        int petBookingId= booking.getPet().getId();
        int roomBookingId= booking.getRoom().getId();
        if((bookingService.findBookingsByPetId(petBookingId).isEmpty() || bookingService.findBookingsByRoomId(roomBookingId).isEmpty())){

            Booking newBooking = new Booking();
            BeanUtils.copyProperties(booking, newBooking, "id");
            if (booking.getOwner() == null) {
                ownerService.optFindOwnerByUser(userService.findCurrentUser().getId()).ifPresent(booking::setOwner);
            }
            bookingService.saveBooking(newBooking);

            return new ResponseEntity<>(new MessageResponse("Booking saved"),HttpStatus.CREATED);
        }
        return new ResponseEntity<>(new MessageResponse("Booking for pet or room is already in database"),HttpStatus.UNPROCESSABLE_ENTITY);
    }

    @PutMapping(value = "{bookingId}")
    public ResponseEntity<MessageResponse> updateBooking(@PathVariable("bookingId") int bookingId, @RequestBody @Valid Booking booking){
        int petBookingId= booking.getPet().getId();
        int roomBookingId= booking.getRoom().getId();
        if((bookingService.findBookingsByPetId(petBookingId).isEmpty() || bookingService.findBookingsByRoomId(roomBookingId).isEmpty())){
            RestPreconditions.checkNotNull(bookingService.findBookingById(bookingId),"Booking","ID",bookingId);
            bookingService.updateBooking(booking,bookingId);
            return new ResponseEntity<>(new MessageResponse("Booking updated"),HttpStatus.OK);
        }
        return new ResponseEntity<>(new MessageResponse("Booking for pet or room is already in database"),HttpStatus.UNPROCESSABLE_ENTITY);
    }

    @DeleteMapping(value = "{bookingId}")
    public ResponseEntity<MessageResponse> deleteBooking(@PathVariable("bookingId") int bookingId){
        RestPreconditions.checkNotNull(bookingService.findBookingById(bookingId),"Booking","ID",bookingId);

        bookingService.deleteBooking(bookingId);
        return new ResponseEntity<>(new MessageResponse("Booking deleted!"),HttpStatus.OK);
    }
}
