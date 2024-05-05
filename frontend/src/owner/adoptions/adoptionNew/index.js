import { useState, useEffect } from "react";
import "../../../static/css/auth/authButton.css";
import "../../../static/css/auth/authPage.css";
import "../../../static/css/owner/consultations.css";
import tokenService from "../../../services/token.service";
import getIdFromUrl from "../../../util/getIdFromUrl";
import { fetchWithPricingInterceptor } from "pricing4react";

/**
 * Component for creating a new adoption
 * 
 * @author jormunrod
*/
export default function OwnerAdoptionNew() {
  const jwt = JSON.parse(window.localStorage.getItem("jwt"));
  const applicantId = tokenService.getUser().id;
  const [description, setDescription] = useState("");
  const petId = getIdFromUrl(2);

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleSubmit = async () => {
    if (!description.trim()) {
      alert("Description is required");
      return;
    }
    if(description.length > 255) {
      alert("Description must be less than 255 characters");
      return;
    }
    const response = await fetchWithPricingInterceptor(
      `/api/v1/adoptions`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${jwt}`,
        },
        body: JSON.stringify({
          description,
          applicantId,
          petId
        }),
      }
    );
    if (response.status === 201) {
      window.location.href = `/adoptions`;
    }
  }

  return (
    <div className="auth-page-container">
      <h2 className="text-center">
        Choose to adopt the pet
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
