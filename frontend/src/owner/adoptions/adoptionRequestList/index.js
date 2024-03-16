import {
  Button,
  ButtonGroup,
  Container,
  Table,
} from "reactstrap";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import tokenService from "../../../services/token.service";
import getIdFromUrl from "../../../util/getIdFromUrl";

export default function OwnerAdoptionRequestList() {
  let [adoptionRequests, setadoptionRequests] = useState([]);
  const jwt = JSON.parse(window.localStorage.getItem("jwt"));
  const userId = tokenService.getUser().id;
  const petId = getIdFromUrl(2);

  function getAdoptionRequestsList(adoptionRequests) {
    return adoptionRequests.map((a) => {
      return (
        <tr key={a.id}>
          <td>{a.applicant.firstName}</td>
          <td>{a.description}</td>
          <td>
            <ButtonGroup>
              <Button
                size="sm"
                color="info"
                onClick={() => acceptAdoptionRequest(a.id)}
              >
                Accept
              </Button>
              <Button
                size="sm"
                color="danger"
                onClick={() => deleteAdoptionRequest(a.id)}
              >
                Reject
              </Button>
            </ButtonGroup>
          </td>
        </tr>
      );
    });
  }

  async function setUp() {
    const adoptionRequests = await (
      await fetch(`/api/v1/adoptions/pet/${petId}`, {
        headers: {
          Authorization: `Bearer ${jwt}`,
          "Content-Type": "application/json",
        },
      })
    ).json();

    setadoptionRequests(adoptionRequests);
    console.log(adoptionRequests);
  }

  async function deleteAdoptionRequest(id) {
    await fetch(`/api/v1/adoptions/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${jwt}`,
        "Content-Type": "application/json",
      },
    });
    setUp();
  }

  async function acceptAdoptionRequest(id) {
    await fetch(`/api/v1/adoptions/${id}/accept`, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${jwt}`,
        "Content-Type": "application/json",
      },
    });
    window.location.href = "/myPets";
  }

  useEffect(() => {
    setUp();
  }, []);

  useEffect(() => {}, [adoptionRequests]);

  return (
    <div>
      <Container style={{ marginTop: "15px" }} fluid>
        <h1 className="text-center">Adoption Requests</h1>
        <Table className="mt-4">
          <thead>
            <tr>
              <th className= "tables whiteFont">Applicant name</th>
              <th className= "tables whiteFont">Description</th>
              <th className= "tables whiteFont">Actions</th>
            </tr>
          </thead>
          <tbody>
            {getAdoptionRequestsList(adoptionRequests)}
          </tbody>
        </Table>
      </Container>
    </div>
  );
}
