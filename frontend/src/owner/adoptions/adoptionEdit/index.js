import { useState, useEffect } from "react";
import "../../../static/css/auth/authButton.css";
import "../../../static/css/auth/authPage.css";
import "../../../static/css/owner/consultations.css";
import getIdFromUrl from "../../../util/getIdFromUrl";

/**
 * Component for editing an adoption request
 * 
 * @author jormunrod
*/
export default function OwnerAdoptionEdit() {
  const jwt = JSON.parse(window.localStorage.getItem("jwt"));
  const [description, setDescription] = useState("");
  const adoptionRequestId = getIdFromUrl(2);

  useEffect(() => {
    const fetchAdoptionRequest = async () => {
      const response = await fetch(
        `/api/v1/adoptions/${adoptionRequestId}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${jwt}`,
          },
        }
      );
      const data = await response.json();
      setDescription(data.description);
    }
    fetchAdoptionRequest();
  }
  , [adoptionRequestId, jwt]);

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleSubmit = async () => {
    const response = await fetch(
      `/api/v1/adoptions/${adoptionRequestId}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${jwt}`,
        },
        body: JSON.stringify({
          description,
        }),
      }
    );
    if (response.status === 200) {
      window.location.href = `/adoptions`;
    }
  }

  return (
    <div className="auth-page-container">
      <h2 className="text-center">
        Edit your adoption request
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
