import "../../static/css/auth/authButton.css";
import "../../static/css/auth/authPage.css";
import tokenService from "../../services/token.service";
import getIdFromUrl from "../../util/getIdFromUrl";
import getErrorModal from "../../util/getErrorModal";
import useFetchState from "../../util/useFetchState";
import { roomEditInputs } from "./form/roomEditInputs";
import FormGenerator from "../../components/formGenerator/formGenerator";
import { useState, useEffect, useRef } from "react";
import {useNavigate} from "react-router-dom";

const user = tokenService.getUser();
const jwt = tokenService.getLocalAccessToken();

export default function EditRoom() {
  const id = getIdFromUrl(2);
  const navigator = useNavigate();

  const emptyItem = {
    id: "",
    name: "",
    allowedPetType: "",
    clinicId: null,
    size: null,
  };
  const [message, setMessage] = useState(null);
  const [visible, setVisible] = useState(false);
  const [room, setRoom] = useFetchState(
    emptyItem,
    `/api/v1/rooms/${id}`,
    jwt,
    setMessage,
    setVisible,
    id
  );
  const [dataLoaded, setDataLoaded] = useState(false);


  useEffect(() => {
    fetch(`/api/v1/rooms/${id}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${jwt}`,
      },
    })
    .then((res) => {
      if (res.status === 200) {
        return res.json();
      }
    }
    )
    .then((data) => {
      if (data) {
        setRoom(data);
        setDataLoaded(true);
      }
    }
    )
    .catch((err) => {
      setMessage(err.message);
    }
    );
  }, [id, jwt]);


  useEffect(() => {
    roomEditInputs.forEach((input) => {
      input.defaultValue = room[input.name];
    });
  }
  , [room]);

  useEffect(() => {
    if (dataLoaded) {
      roomEditInputs[2].defaultValue = room.clinic.id;
    }
  }
  , [room, dataLoaded]);


  const editRoomFormRef = useRef(null);

  function handleSubmit({ values }) {
      fetch(`/api/v1/rooms/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${jwt}`,
        },
        body: JSON.stringify(values),
      })
      .then((res) => {
        if (res.status === 200) {
          console.log("Room edited successfully");
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
      {<h2>{"Edit room"}</h2>}
      {modal}
      <div className="auth-form-container">
          <FormGenerator
            ref={editRoomFormRef}
            inputs={roomEditInputs}
            onSubmit={handleSubmit}
            buttonText="Add"
            buttonClassName="auth-button"
          />
      </div>
    </div>
  );
}
