import "../../static/css/auth/authButton.css";
import "../../static/css/auth/authPage.css";
import tokenService from "../../services/token.service";
import getIdFromUrl from "../../util/getIdFromUrl";
import getErrorModal from "../../util/getErrorModal";
import useFetchState from "../../util/useFetchState";
import { roomNewInputs } from "./form/roomNewInputs";
import FormGenerator from "../../components/formGenerator/formGenerator";
import { useState, useEffect, useRef } from "react";
import {useNavigate} from "react-router-dom";

const user = tokenService.getUser();
const jwt = tokenService.getLocalAccessToken();

export default function NewRoom() {
  const id = getIdFromUrl(2);
  const navigator = useNavigate();

  const emptyItem = {
    id: "",
    name: "",
    allowedPetType: "",
    clinicId: "",
    size: 1,
  };
  const [message, setMessage] = useState(null);
  const [visible, setVisible] = useState(false);


  const newRoomFormRef = useRef(null);

  function handleSubmit({ values }) {
      fetch(`/api/v1/rooms`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${jwt}`,
        },
        body: JSON.stringify(values),
      })
      .then((res) => {
        if (res.status === 201) {
          navigator("/rooms");
        }
      })
      .catch((err) => {
        setMessage(err.message);
      });
  }


  const modal = getErrorModal(setVisible, visible, message);

  return (
    <div className="auth-page-container">
      {<h2>{"Add room"}</h2>}
      {modal}
      <div className="auth-form-container">
          <FormGenerator
            ref={newRoomFormRef}
            inputs={roomNewInputs}
            onSubmit={handleSubmit}
            buttonText="Add"
            buttonClassName="auth-button"
          />
      </div>
    </div>
  );
}
