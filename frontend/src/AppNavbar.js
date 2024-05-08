import React, { useState, useEffect } from "react";
import {
  Navbar,
  NavbarBrand,
  NavLink,
  NavItem,
  Nav,
  NavbarText,
  NavbarToggler,
  Collapse,
} from "reactstrap";
import { Link } from "react-router-dom";
import tokenService from "./services/token.service";
import jwt_decode from "jwt-decode";
import { Feature, On, feature } from "pricing4react";

function AppNavbar() {
  const [roles, setRoles] = useState([]);
  const [username, setUsername] = useState("");
  const jwt = tokenService.getLocalAccessToken();
  const [collapsed, setCollapsed] = useState(true);
  const [plan, setPlan] = useState(null);
  const [owner, setOwner] = useState({});
  const [vet, setVet] = useState({});
  const [message, setMessage] = useState(null);

  async function getPlan() {
    if (jwt_decode(jwt).authorities[0] === "OWNER") {
      const myowner = await (
        await fetch(`/api/v1/planOwner`, {
          headers: {
            Authorization: `Bearer ${jwt}`,
          },
        })
      ).json();
      if (myowner.message) setMessage(myowner.message);
      else {
        setPlan(myowner.clinic.plan);
        setOwner(myowner);
      }
    } else if (jwt_decode(jwt).authorities[0] === "VET") {
      const myVet = await (
        await fetch(`/api/v1/planVet`, {
          headers: {
            Authorization: `Bearer ${jwt}`,
          },
        })
      ).json();
      if (myVet.message) setMessage(myVet.message);
      else {
        setPlan(myVet.clinic.plan);
        setVet(myVet);
      }
    }
  }

  function formatPlan(plan) {
    return plan !== null
      ? plan.charAt(0).toUpperCase() + plan.slice(1).toLowerCase()
      : null;
  }

  const toggleNavbar = () => setCollapsed(!collapsed);

  useEffect(() => {
    if (jwt) {
      setRoles(jwt_decode(jwt).authorities);
      setUsername(jwt_decode(jwt).sub);
      getPlan();
    }
  }, [jwt]);

  let adminLinks = <></>;
  let ownerLinks = <></>;
  let userLinks = <></>;
  let userLogout = <></>;
  let publicLinks = <></>;

  roles.forEach((role) => {
    if (role === "ADMIN") {
      adminLinks = (
        <>
          <NavItem>
            <NavLink style={{ color: "white" }} tag={Link} to="/owners">
              Owners
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink style={{ color: "white" }} tag={Link} to="/pets">
              Pets
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink style={{ color: "white" }} tag={Link} to="/vets">
              Vets
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink style={{ color: "white" }} tag={Link} to="/consultations">
              Consultations
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink style={{ color: "white" }} tag={Link} to="/clinicOwners">
              Clinic Owners
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink style={{ color: "white" }} tag={Link} to="/clinics">
              Clinics
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink style={{ color: "white" }} tag={Link} to="/users">
              Users
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink style={{ color: "white" }} tag={Link} to="/bookings">
              Bookings
            </NavLink>
          </NavItem>
        </>
      );
    }
    if (role === "OWNER") {
      ownerLinks = (
        <>
          <NavItem>
            <NavLink style={{ color: "white" }} tag={Link} to="/myPets">
              My Pets
            </NavLink>
          </NavItem>
          <Feature>
            <On expression={feature("haveOnlineConsultation")}>
              <NavItem>
                <NavLink
                  style={{ color: "white" }}
                  tag={Link}
                  to="/consultations"
                >
                  Consultations
                </NavLink>
              </NavItem>
            </On>
          </Feature>
          <Feature>
            <On expression={feature("haveAdoption")}>
              <NavItem>
                <NavLink style={{ color: "white" }} tag={Link} to="/adoptions">
                  Adoptions
                </NavLink>
              </NavItem>
            </On>
          </Feature>
          <Feature>
            <On expression={feature("haveBooking")}>
              <NavItem>
                <NavLink style={{ color: "white" }} tag={Link} to="/bookings">
                  Bookings
                </NavLink>
              </NavItem>
            </On>
          </Feature>
        </>
      );
    }
    if (role === "VET") {
      ownerLinks = (
        <>
          <NavItem>
            <NavLink style={{ color: "white" }} tag={Link} to="/consultations">
              Consultations
            </NavLink>
          </NavItem>
        </>
      );
    }

    if (role === "CLINIC_OWNER") {
      ownerLinks = (
        <>
          <NavItem>
            <NavLink style={{ color: "white" }} tag={Link} to="/clinics">
              Clinics
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink style={{ color: "white" }} tag={Link} to="/rooms">
              Rooms
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink style={{ color: "white" }} tag={Link} to="/owners">
              Owners
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink style={{ color: "white" }} tag={Link} to="/consultations">
              Consultations
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink style={{ color: "white" }} tag={Link} to="/vets">
              Vets
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              style={{ color: "white" }}
              tag={Link}
              to="/customerAgreement"
            >
              Customer Agreement
            </NavLink>
          </NavItem>
        </>
      );
    }
  });

  if (!jwt) {
    publicLinks = (
      <>
        <NavItem>
          <NavLink style={{ color: "white" }} id="covid" tag={Link} to="/animalApi">AnimalInfo</NavLink>
        </NavItem>
        <NavItem>
          <NavLink style={{ color: "white" }} id="meteo" tag={Link} to="/meteo">Weather</NavLink>
        </NavItem>
        <NavItem>
          <NavLink style={{ color: "white" }} id="docs" tag={Link} to="/docs">
            Docs
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink style={{ color: "white" }} id="plans" tag={Link} to="/plans">
            Pricing Plans
          </NavLink>
        </NavItem>

        <NavItem>
          <NavLink
            style={{ color: "white" }}
            id="register"
            tag={Link}
            to="/register"
          >
            Register
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink style={{ color: "white" }} id="login" tag={Link} to="/login">
            Login
          </NavLink>
        </NavItem>
      </>
    );
  } else {
    userLinks = (
      <>
          <NavItem>
              <NavLink style={{ color: "white" }} id="covid" tag={Link} to="/animalApi">AnimalInfo</NavLink>
          </NavItem>
          <NavItem>
              <NavLink style={{ color: "white" }} id="meteo" tag={Link} to="/meteo">Weather</NavLink>
          </NavItem>
        <NavItem>
          <NavLink style={{ color: "white" }} tag={Link} to="/dashboard">
            Dashboard
          </NavLink>
        </NavItem>
      </>
    );
    userLogout = (
      <>
        <NavItem>
          <NavLink style={{ color: "white" }} id="docs" tag={Link} to="/docs">
            Docs
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink style={{ color: "white" }} id="plans" tag={Link} to="/plans">
            Pricing Plans
          </NavLink>
        </NavItem>
        <NavItem className="d-flex">
          <NavbarText
            style={{ color: "white" }}
            className="justify-content-end"
          >
            {username}
          </NavbarText>
        </NavItem>
        <NavItem className="d-flex">
          <NavbarText
            style={{
              color:
                formatPlan(plan) === "Platinum"
                  ? "blue"
                  : formatPlan(plan) === "Gold"
                  ? "yellow"
                  : "grey",
            }}
            className="justify-content-end"
          >
            {formatPlan(plan)}
          </NavbarText>
        </NavItem>
        <NavItem className="d-flex">
          <NavLink
            style={{ color: "white" }}
            id="logout"
            tag={Link}
            to="/logout"
          >
            Logout
          </NavLink>
        </NavItem>
      </>
    );
  }

  return (
    <div>
      <Navbar expand="md" dark color="dark">
        <NavbarBrand href="/">
          <img
            alt="logo"
            src="/logo1-recortado.png"
            style={{ height: 40, width: 40 }}
          />
          PetClinic
        </NavbarBrand>
        <NavbarToggler onClick={toggleNavbar} className="ms-2" />
        <Collapse isOpen={!collapsed} navbar>
          <Nav className="me-auto mb-2 mb-lg-0" navbar>
            {userLinks}
            {adminLinks}
            {ownerLinks}
          </Nav>
          <Nav className="ms-auto mb-2 mb-lg-0" navbar>
            {publicLinks}
            {userLogout}
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default AppNavbar;
