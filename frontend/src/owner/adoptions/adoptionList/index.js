import {
  Button,
  ButtonGroup,
  Container,
  Table,
} from "reactstrap";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export default function OwnerAdoptionList() {
  let [adoptions, setAdoptions] = useState([]);
  const jwt = JSON.parse(window.localStorage.getItem("jwt"));

  function getAdoptionsList(adoptions) {
    return adoptions.map((p) => {
      return (
        <tr key={p.id}>
          <td>{p.name}</td>
          <td>{p.type.name}</td>
          <td>{p.birthDate}</td>
          <td>
            <ButtonGroup>
              <Button
                size="sm"
                color="info"
                tag={Link}
                to={`/adoptions/${p.id}`}
              >
                Adopt!
              </Button>
            </ButtonGroup>
          </td>
        </tr>
      );
    });
  }

  async function setUp() {
    const adoptions = await (
      await fetch("/api/v1/pets/adoptions/available", {
        headers: {
          Authorization: `Bearer ${jwt}`,
          "Content-Type": "application/json",
        },
      })
    ).json();

    setAdoptions(adoptions);
    console.log(adoptions);
  }

  useEffect(() => {
    setUp();
  }, []);

  useEffect(() => {}, [adoptions]);

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
            {getAdoptionsList(adoptions)}
          </tbody>
        </Table>
      </Container>
    </div>
  );
}
