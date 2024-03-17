import React, { useState, useEffect } from "react";
import { Button, ButtonGroup, Container, Table } from "reactstrap";
import { Link } from "react-router-dom";
import tokenService from "../../../services/token.service";

export default function OwnerAdoptionList() {
  const [petsInAdoption, setPetInAdoption] = useState([]);
  const [adoptionRequests, setAdoptionRequests] = useState([]);
  const jwt = JSON.parse(window.localStorage.getItem("jwt"));
  const userId = tokenService.getUser().id;

  async function fetchData() {
    const petsInAdoptionResponse = await fetch("/api/v1/pets/adoptions/available", {
      headers: {
        Authorization: `Bearer ${jwt}`,
        "Content-Type": "application/json",
      },
    });
    const petsInAdoptionData = await petsInAdoptionResponse.json();
    setPetInAdoption(petsInAdoptionData);

    const adoptionRequestsPromises = petsInAdoptionData.map(pet => fetchAdoptionRequestsByPetId(pet.id));
    const adoptionRequestsData = await Promise.all(adoptionRequestsPromises);
    setAdoptionRequests(adoptionRequestsData);
  }

  async function deleteAdoptionRequest(petId) {
    if (!window.confirm("Are you sure you want to delete this adoption request?")) {
      return;
    }
    await fetch(`/api/v1/adoptions/pet/${petId}/user/${userId}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${jwt}`,
        "Content-Type": "application/json",
      },
    });
    fetchData();
  }

  async function fetchAdoptionRequestsByPetId(petId) {
    const response = await fetch(`/api/v1/adoptions/pet/${petId}`, {
      headers: {
        Authorization: `Bearer ${jwt}`,
        "Content-Type": "application/json",
      },
    });
    return await response.json();
  }

  useEffect(() => {
    fetchData();
  }, [jwt]);

  function triedToAdoptEarlier(petId) {
    const adoptionRequestsForPet = adoptionRequests.find(requests => requests.some(request => request.pet.id === petId));
    return !!adoptionRequestsForPet && adoptionRequestsForPet.some(request => request.applicant.user.id === userId);
  }

  function getPetsInAdoptionList() {
    return petsInAdoption.map((p) => (
      <tr key={p.id}>
        <td>{p.name}</td>
        <td>{p.type.name}</td>
        <td>{p.birthDate}</td>
        <td>
          {triedToAdoptEarlier(p.id) ? (
            <ButtonGroup>
              <Button
                size="sm"
                color="info"
                tag={Link}
                to={`/adoptions/${p.id}`}
              >
                Edit
              </Button>
              <Button
                size="sm"
                color="danger"
                onClick={() => deleteAdoptionRequest(p.id)}
              >
                Delete
              </Button>
            </ButtonGroup>
          ) : 
          <ButtonGroup>
            <Button
              size="sm"
              color="info"
              tag={Link}
              to={`/adoptions/${p.id}/new`}
            >
              Adopt!
            </Button>
          </ButtonGroup>
          }
        </td>
      </tr>
    ));
  }

  return (
    <div>
      <Container style={{ marginTop: "15px" }} fluid>
        <h1 className="text-center">Adoptions</h1>
        <Table className="mt-4">
          <thead>
            <tr>
              <th className= "tables whiteFont">Name</th>
              <th className= "tables whiteFont">Type</th>
              <th className= "tables whiteFont">Date of birth</th>
              <th className= "tables whiteFont">Actions</th>
            </tr>
          </thead>
          <tbody>
            {getPetsInAdoptionList()}
          </tbody>
        </Table>
      </Container>
    </div>
  );
}
