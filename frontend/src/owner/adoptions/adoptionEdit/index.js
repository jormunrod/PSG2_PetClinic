import { useState, useEffect } from "react";
import "../../../static/css/auth/authButton.css";
import "../../../static/css/auth/authPage.css";
import "../../../static/css/owner/consultations.css";
import tokenService from "../../../services/token.service";
import getIdFromUrl from "../../../util/getIdFromUrl";

export default function OwnerAdoptionEdit() {
  const [applicantId, setApplicantId] = useState(null);
  const [description, setDescription] = useState("");
  const petId = getIdFromUrl(2);

  useEffect(() => {
    const fetchData = async () => {
      const jwt = JSON.parse(window.localStorage.getItem("jwt"));
      const userId = tokenService.getUser().id;

      try {
        const responseOwner = await fetch("/api/v1/owners/user/" + userId, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + jwt,
          },
        });
        const owner = await responseOwner.json();
        if (owner) {
          setApplicantId(owner.id);
        }
      } catch (error) {
        console.error("Error fetching owner data:", error);
      }
    };

    fetchData();
  }, []);

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleSubmit = async () => {

  }

  return (
    <div className="auth-page-container">
      <h2 className="text-center">
        Adopt this pet!
      </h2>
      <textarea
        value={description}
        onChange={handleDescriptionChange}
        placeholder="Adoption description"
        style={{ width: '30%', height: '150px', padding: '10px', margin: '20px' }}
      />
      <button
        className="auth-button"
        onClick={handleSubmit}
      >
        Submit
      </button>
    </div>
  );
}
