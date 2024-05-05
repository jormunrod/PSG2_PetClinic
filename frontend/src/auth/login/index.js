import React, { useState } from "react";
import { Alert } from "reactstrap";
import FormGenerator from "../../components/formGenerator/formGenerator";
import tokenService from "../../services/token.service";
import "../../static/css/auth/authButton.css";
import { loginFormInputs } from "./form/loginFormInputs";
import {
  fetchWithPricingInterceptor,
  Feature,
  feature,
  On,
  Default,
} from "pricing4react";

export default function Login() {
  const [message, setMessage] = useState(null);
  const loginFormRef = React.createRef();

  async function handleSubmit({ values }) {
    const reqBody = values;
    console.log(values);
    setMessage(null);
    await fetchWithPricingInterceptor("/api/v1/auth/signin", {
      headers: { "Content-Type": "application/json" },
      method: "POST",
      body: JSON.stringify(reqBody),
    })
      .then(function (response) {
        if (response.status === 200) return response.json();
        else return Promise.reject("Invalid login attempt");
      })
      .then(function (data) {
        console.log(data);
        tokenService.setUser(data);
        tokenService.updateLocalAccessToken(data.token);
        window.location.href = "/myPets";
      })
      .catch((error) => {
        setMessage(error);
      });
  }

  return (
    <div className="auth-page-container">
      {message ? <Alert color="primary">{message}</Alert> : <></>}

      <h1>Login</h1>

      <div className="auth-form-container">
        <FormGenerator
          ref={loginFormRef}
          inputs={loginFormInputs}
          onSubmit={handleSubmit}
          numberOfColumns={1}
          listenEnterKey
          buttonText="Login"
          buttonClassName="auth-button"
        />
      </div>
    </div>
  );
}