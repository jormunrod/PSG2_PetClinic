import {useState} from "react";
import tokenService from "../../services/token.service";
import useFetchState from "../../util/useFetchState";
import {set} from "msw";
import {Button, ButtonGroup, Table} from "reactstrap";
import {Link} from "react-router-dom";
import deleteFromList from "../../util/deleteFromList";
import getErrorModal from "../../util/getErrorModal";


const jwt = tokenService.getLocalAccessToken();

export default function BookingListAdmin() {
    const [message, setMessage] = useState(null);
    const [visible, setVisible] = useState(false);
    const [bookings,setBookings] = useFetchState(
        [],
        'api/v1/bookings',
        jwt,
        setMessage,
        setVisible
    );
    const [alerts, setAlerts] = useState([]);

    const bookingList = bookings.map((booking) => {
        return (
            <tr key={booking.id}>
                <td>{booking.startDate}</td>
                <td>{booking.endDate}</td>
                <td>{booking.owner.user.username}</td>
                <td>{booking.pet.type.name}</td>
                <td>{booking.room.name} {booking.room.clinic.name}</td>
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
                            onClick={() =>
                                deleteFromList(
                                    `/api/v1/bookings/${booking.id}`,
                                    booking.id,
                                    [bookings, setBookings],
                                    [alerts, setAlerts],
                                    setMessage,
                                    setVisible
                                )
                            }
                        >
                            Delete
                        </Button>
                    </ButtonGroup>
                </td>
            </tr>
        );
    });

    const modal = getErrorModal(setVisible, visible, message);

    return (
        <div>
            <div className="admin-page-container">
                <h1 className="text-center">Bookings</h1>
                {alerts.map((a) => a.alert)}
                {modal}
                <div className="float-right">
                    <Button color="success" tag={Link} to="/bookings/new">
                        Add Booking
                    </Button>
                </div>
                <div>
                    <Table aria-label="owners" className="mt-4">
                        <thead>
                        <tr>
                            <th className= "tables" width="15%">Start Date</th>
                            <th className= "tables" width="20%">End Date</th>
                            <th className= "tables" width="15%">Owner</th>
                            <th className= "tables" width="15%">Pet</th>
                            <th className= "tables" width="20%">Room Name</th>
                            <th className= "tables" width="20%">Actions</th>
                        </tr>
                        </thead>
                        <tbody>{bookingList}</tbody>
                    </Table>
                </div>
            </div>
        </div>
    );
}
