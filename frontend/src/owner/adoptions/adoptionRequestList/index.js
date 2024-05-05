import {
  Button,
  ButtonGroup,
  Container,
  Table,
} from "reactstrap";
import { useEffect, useState } from "react";
import getIdFromUrl from "../../../util/getIdFromUrl";
import { fetchWithPricingInterceptor } from "pricing4react";

/**
 * Component for listing the adoption requests
 * 
 * @author jormunrod
*/
export default function OwnerAdoptionRequestList() {
  let [adoptionRequests, setadoptionRequests] = useState([]);
  const jwt = JSON.parse(window.localStorage.getItem("jwt"));
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
      await fetchWithPricingInterceptor(`/api/v1/adoptions/pet/${petId}`, {
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
    if (!window.confirm("Are you sure you want to reject this request?")) {
      return;
    }
    await fetchWithPricingInterceptor(`/api/v1/adoptions/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${jwt}`,
        "Content-Type": "application/json",
      },
    });
    setUp();
  }

  async function acceptAdoptionRequest(id) {
    if (!window.confirm("Are you sure you want to accept this request?")) {
      return;
    }
    await fetchWithPricingInterceptor(`/api/v1/adoptions/${id}/accept`, {
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
    <div style={{marginLeft: "20%", marginRight: "20%", marginTop: "5%"}}>
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
