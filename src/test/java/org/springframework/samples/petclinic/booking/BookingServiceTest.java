package org.springframework.samples.petclinic.booking;

import static org.assertj.core.api.Assertions.assertThat;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertTrue;


import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.Optional;
import java.util.List;


import jakarta.transaction.Transactional;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.dao.DataAccessException;
import org.springframework.samples.petclinic.owner.OwnerService;
import org.springframework.samples.petclinic.pet.PetService;
import org.springframework.samples.petclinic.pet.exceptions.DuplicatedPetNameException;
import org.springframework.samples.petclinic.room.RoomService;
import org.springframework.security.test.context.support.WithMockUser;

@SpringBootTest
@AutoConfigureTestDatabase
public class BookingServiceTest {

	@Autowired
	protected BookingService bookingService;

    @Autowired
	protected OwnerService ownerService;

    @Autowired
	protected PetService petService;
    
    @Autowired
	protected RoomService roomService;

	@Test
	void shouldFindAllBookings() {
        List<Booking> bookings = (List<Booking>) this.bookingService.findAll();
        assertEquals(2, bookings.size());
	}

    @Test
	void shouldFindBookingById() {
        Booking v1 = (Booking) this.bookingService.findBookingById(1);
        assertEquals(LocalDateTime.of(2024, 5, 28, 15, 40), v1.getStartDate());
        assertEquals(LocalDateTime.of(2024, 5, 29, 16, 00), v1.getEndDate());
        assertEquals("George", v1.getOwner().getFirstName());
        assertEquals("Leo", v1.getPet().getName());
        assertEquals("Room 1", v1.getRoom().getName());
	}

    @Test
	void shouldNotFindBookingById() {
       Booking booking = this.bookingService.findBookingById(-1);
       assertTrue(booking==null);
	}

    @Test
	void shouldFindBookingByPetId() {
       Optional<Booking> booking = this.bookingService.findBookingsByPetId(1);
       assertTrue(booking.isPresent());
	}

    @Test
	void shouldNotFindBookingByPetId() {
       Optional<Booking> booking = this.bookingService.findBookingsByPetId(-1);
       assertTrue(!booking.isPresent());
	}

    @Test
	void shouldFindBookingByRoomId() {
       Optional<Booking> booking = this.bookingService.findBookingsByRoomId(1);
       assertTrue(booking.isPresent());
	}

    @Test
	void shouldNotFindBookingByRoomId() {
       Optional<Booking> booking = this.bookingService.findBookingsByRoomId(-1);
       assertTrue(!booking.isPresent());
	}

    @Test
	void shouldFindBookingByOwnerId() {
       List<Booking> bookings = this.bookingService.findBookingsByOwnerId(1);
       assertEquals(2,bookings.size());
	}

    @Test
	void shouldNotFindBookingByOwnerId() {
       List<Booking> bookings = this.bookingService.findBookingsByOwnerId(-1);
       assertTrue(bookings.isEmpty());
	}

    @Test
	void shouldFindBookingByStartDate() {
       List<Booking> bookings = this.bookingService.findByBookingsByStartDate(LocalDate.of(2024, 5, 28));
       assertEquals(2,bookings.size());
	}

    @Test
	void shouldNotFindBookingByStartDate() {
       List<Booking> bookings = this.bookingService.findByBookingsByStartDate(LocalDate.of(1900, 1, 1));
       assertTrue(bookings.isEmpty());
	}


    @Test
	@WithMockUser(value = "owner1", authorities = { "OWNER" })
	@Transactional
	void shouldSaveBooking() {
		int initialCount = ((List<Booking>) this.bookingService.findAll()).size();

		Booking booking = new Booking();
		booking.setStartDate(LocalDateTime.now());
		booking.setEndDate(LocalDateTime.of(2024,4, 19,17,3,30));
		booking.setOwner(ownerService.findOwnerById(1));
		booking.setPet(petService.findPetById(1));
        booking.setRoom(roomService.findById(1));

		this.bookingService.saveBooking(booking);
		assertThat(booking.getId().longValue()).isNotEqualTo(0);

		int finalCount = ((List<Booking>) this.bookingService.findAll()).size();
		assertEquals(initialCount + 1, finalCount);
	}

    @Test
	@WithMockUser(value = "owner1", authorities = { "OWNER" })
	@Transactional
	void shouldUpdateBooking() {
		Booking booking = this.bookingService.findBookingById(1);
		booking.setEndDate(LocalDateTime.of(2028,1,1,1,1,1));
		bookingService.updateBooking(booking, 1);
		booking = this.bookingService.findBookingById(1);
		assertEquals(LocalDateTime.of(2028,1,1,1,1,1), booking.getEndDate());
	}

    @Test
	@WithMockUser(value = "owner1", authorities = { "OWNER" })
	@Transactional
	void shouldDeleteBooking() throws DataAccessException, DuplicatedPetNameException {
		int initialCount = ((List<Booking>) this.bookingService.findAll()).size();

		Booking booking = new Booking();
		booking.setStartDate(LocalDateTime.now());
		booking.setEndDate(LocalDateTime.of(2024,4, 19,17,3,30));
		booking.setOwner(ownerService.findOwnerById(1));
		booking.setPet(petService.findPetById(1));
        booking.setRoom(roomService.findById(1));
		this.bookingService.saveBooking(booking);

		Integer secondCount = ((List<Booking>) this.bookingService.findAll()).size();
		assertEquals(initialCount + 1, secondCount);
		bookingService.deleteBooking(booking.getId());
		Integer lastCount = ((List<Booking>) this.bookingService.findAll()).size();
		assertEquals(initialCount, lastCount);
	}



	

}