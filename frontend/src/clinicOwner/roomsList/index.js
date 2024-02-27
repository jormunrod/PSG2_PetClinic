import { useState } from "react";
import { Link } from "react-router-dom";
import { Button, ButtonGroup, Table } from "reactstrap";
import tokenService from "../../services/token.service";
import useFetchState from "../../util/useFetchState";
import getErrorModal from "../../util/getErrorModal";
import "../../static/css/admin/adminPage.css";
import { useNavigate } from "react-router-dom";

const user = tokenService.getUser();
const jwt = tokenService.getLocalAccessToken();

export default function RoomsList() {
  const [message, setMessage] = useState(null);
  const [visible, setVisible] = useState(false);
  const [rooms, setRooms] = useFetchState(
    [],
    `/api/v1/rooms/user/${user.id}`, // TODO: Hacer que el backend filtre por el id del usuario
    jwt,
    setMessage,
    setVisible
  );
  const [alerts, setAlerts] = useState([]);

  const navigator = useNavigate();

  const roomsList =
    rooms.map((room) => {
        return (
          <tr key={room.id}>
            <td className="text-center">{room.name}</td>
            <td className="text-center">{room.allowedPetType}</td>
            <td className="text-center">{room.clinic.name}</td>
            <td className="text-center">{room.size}</td>
            <td className="text-center">
              <ButtonGroup>
                <Button
                  size="sm"
                  color="primary"
                  aria-label={"edit-" + room.name}
                  tag={Link}
                  to={"/rooms/" + room.id}
                >
                  Edit
                </Button>
                <Button
                  size="sm"
                  color="danger"
                  aria-label={"delete-" + room.name}
                  onClick={() => {
                    let confirmMessage = window.confirm("Are you sure you want to delete it?");

                    if(!confirmMessage) return;

                    fetch(`/api/v1/rooms/${room.id}`, {
                      method: "DELETE",
                      headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${jwt}`,
                      },
                    })
                      .then((res) => {
                        if (res.status === 200) {
                          setMessage("Room deleted successfully");
                          setVisible(true);
                          setRooms(
                            rooms.filter((r) => {
                              return r.id !== room.id;
                            })
                          );
                          navigator(0);
                        }
                      })
                      .catch((err) => {
                        setMessage(err.message);
                        setVisible(true);
                      });
                  }}
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
        <h1 className="text-center">My Rooms</h1>
        {alerts.map((a) => a.alert)}
        {modal}
        <div className="float-right">
          <Button color="success" tag={Link} to="/rooms/new">
            Add room
          </Button>
        </div>
        <div>
          <Table aria-label="rooms" className="mt-4">
            <thead>
              <tr>
                <th width="15%" className="text-center">Name</th>
                <th width="15%" className="text-center">Allowed Pet Type</th>
                <th width="15%" className="text-center">Clinic</th>
                <th width="15%" className="text-center">Size</th>
              </tr>
            </thead>
            <tbody>{roomsList}</tbody>
          </Table>
        </div>
      </div>
    </div>
  );
}
