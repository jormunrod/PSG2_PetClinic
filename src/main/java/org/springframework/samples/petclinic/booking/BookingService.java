package org.springframework.samples.petclinic.booking;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.xml.crypto.Data;
import java.awt.print.Book;
import java.time.LocalDate;
import java.util.Collection;
import java.util.List;
import java.util.Optional;

@Service
public class BookingService {

    private final BookingRepository bookingRepository;

    @Autowired
    public BookingService(BookingRepository bookingRepository) {
        this.bookingRepository = bookingRepository;
    }

    @Transactional(readOnly = true)
    public List<Booking> findAll() throws DataAccessException {
        return (List<Booking>) bookingRepository.findAll();
    }

    @Transactional(readOnly = true)
    public Booking findBookingById(int bookingId) throws DataAccessException {
        Optional<Booking> booking = bookingRepository.findById(bookingId);

        if (booking.isPresent()) {
            return booking.get();
        } else {
            return null;
        }
    }

    @Transactional(readOnly = true)
    public Optional<Booking> findBookingsByPetId(int petId) {
        return bookingRepository.findByPetId(petId);
    }

    @Transactional(readOnly = true)
    public Optional<Booking> findBookingsByRoomId(int roomId) {
        return bookingRepository.findByRoomId(roomId);
    }

    @Transactional(readOnly = true)
    public List<Booking> findBookingsByOwnerId(int ownerId) {
        return bookingRepository.findByOwnerId(ownerId);
    }

    @Transactional(readOnly = true)
    public List<Booking> findByBookingsByStartDate(LocalDate startDate) {
        return bookingRepository.findBookingByStartDate(startDate);
    }

    @Transactional
    public Booking saveBooking(Booking booking) throws DataAccessException {
        bookingRepository.save(booking);
        return booking;
    }

    @Transactional
    public Booking updateBooking(Booking booking, int id) throws DataAccessException {
        Booking toUpdate = bookingRepository.findBookingById(id);
        BeanUtils.copyProperties(booking, toUpdate, "id");
        bookingRepository.save(toUpdate);

        return toUpdate;
    }

    @Transactional
    public void deleteBooking(int id) throws DataAccessException {
        Booking toDelete = bookingRepository.findBookingById(id);
        bookingRepository.delete(toDelete);
    }
}
