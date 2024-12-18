import { useState } from "react";
import { Link } from "react-router-dom";
import { Form, Input, Label } from "reactstrap";
import tokenService from "../../../services/token.service";
import getErrorModal from "../../../util/getErrorModal";
import getIdFromUrl from "../../../util/getIdFromUrl";
import useFetchState from "../../../util/useFetchState";
import {
  Feature,
  On,
  Default,
  Loading,
  feature,
  fetchWithPricingInterceptor,
} from "pricing4react";

const jwt = tokenService.getLocalAccessToken();
const userId =
  tokenService.getUser() == null ? null : tokenService.getUser().id;
export default function BookingEditOwner() {
  const id = getIdFromUrl(2);
  const [message, setMessage] = useState(null);
  const [visible, setVisible] = useState(false);
  const [booking, setBooking] = useFetchState(
    [],
    `/api/v1/bookings/${id}`,
    jwt,
    setMessage,
    setVisible,
    id
  );

  const owners = useFetchState(
    [],
    `/api/v1/owners/user/${userId}`,
    jwt,
    setMessage,
    setVisible
  )[0];
  const pets = useFetchState(
    [],
    `/api/v1/pets?userId=${userId}`,
    jwt,
    setMessage,
    setVisible
  )[0];
  const [rooms, setRooms] = useFetchState(
    [],
    `/api/v1/rooms`,
    jwt,
    setMessage,
    setVisible
  );

  function handleChange(event) {
    const { name, value } = event.target;
    if (name === "room") {
      const selectedRoom = rooms.find(
        (room) => room.id === parseInt(value, 10)
      );
      setBooking({ ...booking, room: selectedRoom });
    } else {
      setBooking({ ...booking, [name]: value });
    }
  }

  function handleSubmit(event) {
    event.preventDefault();
    const updatedBooking = {
      ...booking,
      owner: owners,
      pet: pets.find((pet) => pet.id === parseInt(booking.pet)),
    };

    fetchWithPricingInterceptor(
      `/api/v1/bookings${updatedBooking.id ? "/" + updatedBooking.id : ""}`,
      {
        method: updatedBooking.id ? "PUT" : "POST",
        headers: {
          Authorization: `Bearer ${jwt}`,
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedBooking),
      }
    )
      .then((response) => response.json())
      .then((json) => {
        if (json.message) {
          setMessage(json.message);
          setVisible(true);
          window.location.href = "/bookings";
        } else {
          window.location.href = "/bookings";
        }
      })
      .catch((error) => {
        alert(`An error occurred: ${error}`);
      });
  }

  const modal = getErrorModal(setVisible, visible, message);

  return (
    <Feature>
      <On expression={feature("haveAdoption")}>
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
                      <option value={room.id}>
                        {room.name} {room.allowedPetType} {room.clinic.name}
                        {<room className="allowedPetType"></room>}
                      </option>
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
                  value={booking.owner ? booking.owner.id : owners.id}
                  onChange={handleChange}
                  className="custom-input"
                >
                  <option value={owners.id}> owner{owners.id}</option>
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
                  value={booking.pet || ""}
                  onChange={handleChange}
                  className="custom-input"
                >
                  <option value="">Select Pet</option>
                  {pets &&
                    booking.room &&
                    pets.map((pet) => {
                      if (
                        booking.room.allowedPetType ===
                        pet.type.name.toUpperCase()
                      ) {
                        return (
                          <option key={pet.id} value={pet.id}>
                            {pet.name} {pet.type.name}
                          </option>
                        );
                      }
                      return null;
                    })}
                </Input>
              </div>

              <div className="custom-button-row">
                <button className="auth-button">Save</button>
                <Link
                  to={`/bookings`}
                  className="auth-button"
                  style={{ textDecoration: "none" }}
                >
                  Cancel
                </Link>
              </div>
            </Form>
          </div>
        </div>
      </On>
      <Default>Your clinic plan does not support this feature.</Default>
      <Loading>
        <p>Loading...</p>
      </Loading>
    </Feature>
  );
}
