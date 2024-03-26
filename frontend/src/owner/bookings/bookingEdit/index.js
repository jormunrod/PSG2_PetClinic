import {useState} from "react";
import {Link} from "react-router-dom";
import {Button, Form, Input, Label} from "reactstrap";
import tokenService from "../../../services/token.service";
import getErrorModal from "../../../util/getErrorModal";
import getIdFromUrl from "../../../util/getIdFromUrl";
import useFetchState from "../../../util/useFetchState";

const jwt = tokenService.getLocalAccessToken();
const userId = tokenService.getUser().id;
export default function BookingEditOwner() {
    const emptyItem = {
        id: "",
        name: "",
        address: "",
        telephone: "",
    };
    const id = getIdFromUrl(2);
    const [message, setMessage] = useState(null);
    const [visible, setVisible] = useState(false);
    const [booking, setBooking] = useFetchState(
        emptyItem,
        `/api/v1/bookings/${id}`,
        jwt,
        setMessage,
        setVisible,
        id
    );

    const owner = useFetchState(
        [],
        `api/v1/owners/user/${userId}`,
        jwt,
        setMessage,
        setVisible
    )[0]

    const [pets, setPets] = useFetchState(
        [],
        `/api/v1/pets`,
        jwt,
        setMessage,
        setVisible
    );
    const [rooms, setRooms] = useFetchState(
        [],
        `/api/v1/rooms`,
        jwt,
        setMessage,
        setVisible
    );


    function handleChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        setBooking({...booking, [name]: value});

    }

    function handleSubmit(event) {
        event.preventDefault();
        booking.pet = pets.filter((pet) => pet.id === parseInt(booking.pet))[0];
        booking.room = rooms.filter((room) => room.id === parseInt(booking.room))[0];
        console.log(booking);

        fetch("/api/v1/bookings" + (booking.id ? "/" + booking.id : ""), {
            method: booking.id ? "PUT" : "POST",
            headers: {
                Authorization: `Bearer ${jwt}`,
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify(booking),
        })
            .then((response) => response.json())
            .then((json) => {
                if (json.message) {
                    setMessage(json.message);
                    setVisible(true);
                } else window.location.href = "/bookings";
            })
            .catch((message) => alert(message));
    }

    const modal = getErrorModal(setVisible, visible, message);

    return (
        <div className="auth-page-container">
            {<h2>{id !== "new" ? "Edit Booking" : "Add Booking"}</h2>}
            {modal}
            <div className="auth-form-container">
                <Form onSubmit={handleSubmit}>
                    <div className="custom-form-input">
                        <Label for="startDate" className="custom-form-input-label">
                            Start Date
                        </Label>
                        <Input
                            type="datetime-local"
                            required
                            name="startDate"
                            id="startDate"
                            value={booking.startDate || ""}
                            onChange={handleChange}
                            className="custom-input"
                        />
                    </div>
                    <div className="custom-form-input">
                        <Label for="endDate" className="custom-form-input-label">
                            End Date
                        </Label>
                        <Input
                            type="datetime-local"
                            required
                            name="endDate"
                            id="endDate"
                            value={booking.endDate || ""}
                            onInput={handleChange}
                            className="custom-input"
                        />
                    </div>
                    <div className="custom-form-input">
                        <Label for="room" className="custom-form-input-label">
                            Room
                        </Label>
                        <Input
                            type="select"
                            required
                            name="room"
                            id="room"
                            value={booking.room ? booking.room.id : ""}
                            onChange={handleChange}
                            className="custom-input"
                        >
                            <option value="">None</option>
                            {rooms.map((room) => {
                                return (
                                    <option value={room.id}>{room.name} {room.allowedPetType}{<room
                                        className="allowedPetType"></room>}</option>
                                );
                            })}
                        </Input>
                    </div>
                    <div className="custom-form-input">
                        <Label for="owner" className="custom-form-input-label">
                            Owner
                        </Label>
                        <Input
                            id="owner"
                            name="owner"
                            required
                            type="select"
                            value={booking.owner ? booking.owner.id : ""}
                            onChange={handleChange}
                            className="custom-input"
                        >
                            <option value={owner.id}>{owner}</option>
                        </Input>
                    </div>
                    <div className="custom-form-input">
                        <Label for="pet" className="custom-form-input-label">
                            Pet
                        </Label>
                        <Input
                            id="pet"
                            name="pet"
                            required
                            type="select"
                            value={booking.pet ? booking.pet : ""}
                            onChange={handleChange}
                            className="custom-input"
                        >
                            <option value="">None</option>
                            {pets.map((pet) => {
                                if (booking.owner && (pet.owner.id === booking.owner.id)) {
                                    return (
                                        <option value={pet.id}>{pet.name} {pet.type.name}</option>
                                    );
                                }
                            })}

                        </Input>
                    </div>
                    <div className="custom-button-row">
                        <button className="auth-button">Save</button>
                        <Link
                            to={`/bookings`}
                            className="auth-button"
                            style={{textDecoration: "none"}}
                        >
                            Cancel
                        </Link>
                    </div>

                </Form>
            </div>
        </div>
    );
}
