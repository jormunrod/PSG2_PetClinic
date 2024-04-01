import {useEffect, useState} from "react";
import tokenService from "../../../services/token.service";
import {Button, ButtonGroup, Container, Table} from "reactstrap";
import {Link} from "react-router-dom";
import deleteFromList from "../../../util/deleteFromList";
import useFetchState from "../../../util/useFetchState";

const jwt = tokenService.getLocalAccessToken();
const userId = tokenService.getUser() !== null? tokenService.getUser().id : null;
export default function OwnerBookingList() {

    const [message, setMessage] = useState(null);
    const [visible, setVisible] = useState(false);
    const [modalShow, setModalShow] = useState(false);

    const owner = useFetchState(
        [],
        `api/v1/owners/user/${userId}`,
        jwt,
        setMessage,
        setVisible
    )[0]

    const [bookings, setBookings] = useState([]);

    async function fetchData() {
        const userId = tokenService.getUser() !== null? tokenService.getUser().id : null;
        const owner = await  fetch(
            `/api/v1/owners/user/userId`, {
                headers: {
                    Authorization: `Bearer ${jwt}`,
                    "Content-Type": "application/json",
                },
            });
        const bookingResponse = await fetch(
            `/api/v1/bookings/owners?ownerId=1`, {
                headers: {
                    Authorization: `Bearer ${jwt}`,
                    "Content-Type": "application/json",
                },
            });

        const bookingData = await bookingResponse.json();
        setBookings(bookingData);
    }

    function removeBooking(id) {
        fetch(`/api/v1/bookings/${id}`, {
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

    console.log(userId)

    function getBookingList() {
        return bookings.map((booking) => (
            <tr key={booking.id}>
                <td>{booking.startDate}</td>
                <td>{booking.endDate}</td>
                <td>{booking.owner.user.username}</td>
                <td>{booking.pet.type.name}</td>
                <td>{booking.room.name}</td>
                <td>
                    <ButtonGroup>
                        <Button
                            size="sm"
                            color="danger"
                            aria-label={"delete-" + booking.id}
                            onClick={() =>
                                removeBooking(booking.id)
                            }
                        >
                            Delete
                        </Button>
                    </ButtonGroup>
                </td>
            </tr>
        ))
    }

    return (
        <div style={{marginLeft: "20%", marginRight: "20%", marginTop: "5%"}}>
            <Container style={{marginTop: "15px"}} fluid>
                <h1 className="text-center">Bookings</h1>
                <div className="float-right">
                </div>
                <div>
                    <Table aria-label="owners" className="mt-4">
                        <thead>
                        <tr>
                            <th className="tables" width="15%">Start Date</th>
                            <th className="tables" width="20%">End Date</th>
                            <th className="tables" width="15%">Owner</th>
                            <th className="tables" width="15%">Pet</th>
                            <th className="tables" width="20%">Room Name</th>
                            <th className="tables" width="20%">Actions</th>
                        </tr>
                        </thead>
                        <tbody>{getBookingList()}</tbody>
                    </Table>
                </div>
            </Container>
        </div>
    )
}
