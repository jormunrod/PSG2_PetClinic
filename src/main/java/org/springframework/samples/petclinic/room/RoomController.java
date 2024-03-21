package org.springframework.samples.petclinic.room;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
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

@RestController
@RequestMapping("/api/v1/rooms")
@Tag(name = "Room", description = "API for management of rooms")
@SecurityRequirement(name = "bearerAuth")
public class RoomController {

    private RoomService roomService;

    @Autowired
    public RoomController(RoomService roomService) {
        this.roomService = roomService;
    }

    @GetMapping
    @ResponseStatus(HttpStatus.OK)
    public List<Room> findAll(){
        return roomService.findAll();
    }

    @GetMapping("/{roomId}")
    @ResponseStatus(HttpStatus.OK)
    public Room findById(@PathVariable Integer roomId) {
        return roomService.findById(roomId);
    }

    @GetMapping("/user/{userId}")
    @ResponseStatus(HttpStatus.OK)
    public List<Room> findByUserId(@PathVariable Integer userId) {
        return roomService.findByUserId(userId);
    }

    @PostMapping()
    @ResponseStatus(HttpStatus.CREATED)
    public Room save(@Valid @RequestBody RoomDTO roomDTO) {
        return roomService.save(roomDTO);
    }

    @PutMapping("/{roomId}")
    @ResponseStatus(HttpStatus.OK)
    public Room update(@PathVariable Integer roomId, @Valid @RequestBody RoomDTO roomDTO) {
        return roomService.update(roomId, roomDTO);
    }

    @DeleteMapping("/{roomId}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void delete(@PathVariable Integer roomId) {
        roomService.delete(roomId);
    }

}
