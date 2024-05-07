import { useEffect, useState } from "react";
import tokenService from "../../../services/token.service";
import { Button, ButtonGroup, Container, Table } from "reactstrap";
import { Link } from "react-router-dom";
import {
  Feature,
  On,
  Default,
  Loading,
  feature,
  fetchWithPricingInterceptor,
} from "pricing4react";

const jwt = tokenService.getLocalAccessToken();
export default function OwnerBookingList() {
  const [message, setMessage] = useState(null);
  const [visible, setVisible] = useState(false);
  const [modalShow, setModalShow] = useState(false);

  const [bookings, setBookings] = useState([]);
  async function fetchData() {
    const userId =
      tokenService.getUser() == null ? null : tokenService.getUser().id;
    const ownerResponse = await fetchWithPricingInterceptor(`/api/v1/owners/user/${userId}`, {
      headers: {
        Authorization: `Bearer ${jwt}`,
        "Content-Type": "application/json",
      },
    });
    const ownerData = await ownerResponse.json();
    const bookingResponse = await fetch(
      `/api/v1/bookings/owners?ownerId=${ownerData.id}`,
      {
        headers: {
          Authorization: `Bearer ${jwt}`,
          "Content-Type": "application/json",
        },
      }
    );

    const bookingData = await bookingResponse.json();
    setBookings(bookingData);
  }

  function removeBooking(id) {
    fetchWithPricingInterceptor(`/api/v1/bookings/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${jwt}`,
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (response.status === 200) {
          let updatedPets = [...bookings].filter((i) => i.id !== id);
          setBookings(updatedPets);
        }
        return response.json();
      })
      .then((data) => {
        setMessage(data.message);
        setModalShow(true);
      });
    fetchData();
  }

  function handleShow() {
    setModalShow(!modalShow);
  }

  useEffect(() => {
    fetchData();
  }, [jwt]);

  function getBookingList() {
    return bookings.map((booking) => (
      <tr key={booking.id}>
        <td>{booking.startDate}</td>
        <td>{booking.endDate}</td>
        <td>{booking.owner.user.username}</td>
        <td>
          {booking.pet.name} {booking.pet.type.name}
        </td>
        <td>
          {booking.room.name} {booking.room.clinic.name}
        </td>
        <td>
          <ButtonGroup>
            <Button
              size="sm"
              color="primary"
              aria-label={"edit-" + booking.id}
              tag={Link}
              to={"/bookings/" + booking.id}
            >
              Edit
            </Button>
            <Button
              size="sm"
              color="danger"
              aria-label={"delete-" + booking.id}
              onClick={() => removeBooking(booking.id)}
            >
              Delete
            </Button>
          </ButtonGroup>
        </td>
      </tr>
    ));
  }

  return (
    <Feature>
      <On expression={feature("haveAdoption")}>
        <div style={{ marginLeft: "20%", marginRight: "20%", marginTop: "5%" }}>
          <Container style={{ marginTop: "15px" }} fluid>
            <h1 className="text-center">Bookings</h1>
            <div className="float-right">
              <Button color="success" tag={Link} to="/bookings/new">
                Add Booking
              </Button>
            </div>
            <div>
              <Table aria-label="owners" className="mt-4">
                <thead>
                  <tr>
                    <th className="tables" width="15%">
                      Start Date
                    </th>
                    <th className="tables" width="20%">
                      End Date
                    </th>
                    <th className="tables" width="15%">
                      Owner
                    </th>
                    <th className="tables" width="15%">
                      Pet
                    </th>
                    <th className="tables" width="20%">
                      Room Name
                    </th>
                    <th className="tables" width="20%">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody>{getBookingList()}</tbody>
              </Table>
            </div>
          </Container>
        </div>
      </On>
      <Default>Your clinic plan does not support this feature.</Default>
    </Feature>
  );
}
