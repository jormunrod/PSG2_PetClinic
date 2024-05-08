package org.springframework.samples.petclinic.room;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.samples.petclinic.clinic.Clinic;
import org.springframework.samples.petclinic.clinic.ClinicRepository;
import org.springframework.samples.petclinic.clinic.ClinicService;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class RoomService {
    RoomRepository roomRepository;
    ClinicRepository clinicRepository;
    ClinicService clinicService;

    @Autowired
    public RoomService(RoomRepository roomRepository, ClinicRepository clinicRepository, ClinicService clinicService) {
        this.roomRepository = roomRepository;
        this.clinicRepository = clinicRepository;
        this.clinicService = clinicService;
    }

    @Transactional(readOnly = true)
    public List<Room> findAll() throws DataAccessException{
        return (List<Room>) roomRepository.findAll();
    }

    @Transactional
    public Room save(RoomDTO roomDTO) throws DataAccessException {
        Room room = new Room();
        Clinic clinic = clinicService.findClinicById(roomDTO.getClinicId());

        room.setName(roomDTO.getName());
        room.setAllowedPetType(roomDTO.getAllowedPetType());
        room.setSize(roomDTO.getSize());
        room.setClinic(clinic);

        roomRepository.save(room);

        return room;
    }

    @Transactional(readOnly = true)
    public Room findById(Integer roomId) throws DataAccessException {
        return roomRepository.findById(roomId).get();
    }

    @Transactional
    public void delete(Integer roomId) throws DataAccessException {
        roomRepository.deleteById(roomId);
    }

    @Transactional
    public Room update(Integer roomId, RoomDTO roomDTO) throws DataAccessException {
        Room roomToUpdate = roomRepository.findById(roomId).get();
        Clinic clinic = clinicService.findClinicById(roomDTO.getClinicId());

        roomToUpdate.setName(roomDTO.getName());
        roomToUpdate.setAllowedPetType(roomDTO.getAllowedPetType());
        roomToUpdate.setSize(roomDTO.getSize());
        roomToUpdate.setClinic(clinic);

        roomRepository.save(roomToUpdate);

        return roomToUpdate;
    }

    @Transactional(readOnly = true)
    public List<Room> findByUserId(Integer userId) {
        return roomRepository.findByUserId(userId);
    }

}
