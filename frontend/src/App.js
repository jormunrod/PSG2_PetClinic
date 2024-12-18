import React from "react";
import { Route, Routes } from "react-router-dom";
import jwt_decode from "jwt-decode";
import { ErrorBoundary } from "react-error-boundary";
import AppNavbar from "./AppNavbar";
import Home from "./home";
import PrivateRoute from "./privateRoute";
import PricingPlan from "./owner/plan";
import Register from "./auth/register";
import Login from "./auth/login";
import Logout from "./auth/logout";
import OwnerPetList from "./owner/pets/petList";
import OwnerPetEdit from "./owner/pets/petEdit";
import OwnerVisitEdit from "./owner/visits/visitEdit";
import PlanList from "./public/plan";
import tokenService from "./services/token.service";
import OwnerDashboard from "./owner/dashboard";
import OwnerConsultationList from "./owner/consultations/consultationList";
import OwnerConsultationEdit from "./owner/consultations/consultationEdit";
import OwnerConsultationTickets from "./owner/consultations/tickets/ticketList";
import VetConsultationList from "./vet/consultations/consultationList";
import VetConsultationTickets from "./vet/consultations/tickets/ticketList";
import PetEditAdmin from "./admin/pets/PetEditAdmin";
import PetListAdmin from "./admin/pets/PetListAdmin";
import UserListAdmin from "./admin/users/UserListAdmin";
import UserEditAdmin from "./admin/users/UserEditAdmin";
import OwnerListAdmin from "./admin/owners/OwnerListAdmin";
import OwnerEditAdmin from "./admin/owners/OwnerEditAdmin";
import SpecialtyListAdmin from "./admin/vets/SpecialtyListAdmin";
import SpecialtyEditAdmin from "./admin/vets/SpecialtyEditAdmin";
import VetListAdmin from "./admin/vets/VetListAdmin";
import VetEditAdmin from "./admin/vets/VetEditAdmin";
import VisitListAdmin from "./admin/visits/VisitListAdmin";
import VisitEditAdmin from "./admin/visits/VisitEditAdmin";
import ConsultationListAdmin from "./admin/consultations/ConsultationListAdmin";
import TicketListAdmin from "./admin/consultations/TicketListAdmin";
import ConsultationEditAdmin from "./admin/consultations/ConsultationEditAdmin";
import SwaggerDocs from "./public/swagger";
import ClinicsList from "./clinicOwner/clinicsList"
import EditClinic from "./clinicOwner/clinicEdit"
import OwnerListClinicOwner from "./clinicOwner/ownersList"
import ClinicOwnerListAdmin from "./admin/clinicOwners/ClinicOwnerListAdmin";
import ClinicOwnerEditAdmin from "./admin/clinicOwners/ClinicOwnerEditAdmin";
import ClinicListAdmin from "./admin/clinics/ClinicListAdmin";
import ClinicEditAdmin from "./admin/clinics/ClinicEditAdmin";
import ConsultationListClinicOwner from "./clinicOwner/consultations/ConsultationListClinicOwner";
import ConsultationEditClinicOwner from "./clinicOwner/consultations/ConsultationEditClinicOwner";
import VetListClinicOwner from "./clinicOwner/vets/VetListClinicOwner";
import VetEditClinicOwner from "./clinicOwner/vets/VetEditClinicOwner";
import RoomList from "./clinicOwner/roomsList";
import NewRoom from "./clinicOwner/roomNew";
import EditRoom from "./clinicOwner/roomEdit";
import OwnerAdoptionList from "./owner/adoptions/adoptionList";
import OwnerAdoptionEdit from "./owner/adoptions/adoptionEdit";
import OwnerAdoptionNew from "./owner/adoptions/adoptionNew";
import OwnerAdoptionRequestList from "./owner/adoptions/adoptionRequestList";
import BookingListAdmin from "./admin/booking/BookingListAdmin";
import BookingEditAdmin from "./admin/booking/BookingEditAdmin";
import OwnerBookingList from "./owner/bookings/bookingList";
import OwnerBookingEdit from "./owner/bookings/bookingEdit";
import BookingEditOwner from "./owner/bookings/bookingEdit";
import CustomerAgreement from "./clinicOwner/customerAgreement";
import MeteoApi from "./meteoAPI/meteoApi";
import MeteoTest from "./meteoAPI/TestData";
import CovidApi from "./animalAPI/animalApi";
import AnimalApi from "./animalAPI/animalApi";

function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre>{error.message}</pre>
      <button onClick={resetErrorBoundary}>Try again</button>
    </div>
  )
}

function App() {
  const jwt = tokenService.getLocalAccessToken();
  let roles = []
  if (jwt) {
    roles = getRolesFromJWT(jwt);
  }

  function getRolesFromJWT(jwt) {
    return jwt_decode(jwt).authorities;
  }

  let adminRoutes = <></>;
  let ownerRoutes = <></>;
  let userRoutes = <></>;
  let vetRoutes = <></>;
  let publicRoutes = <></>;

    roles.forEach((role) => {
        if (role === "ADMIN") {
            adminRoutes = (
                <>
                    <Route path="/users" exact={true} element={<PrivateRoute><UserListAdmin/></PrivateRoute>}/>
                    <Route path="/users/:username" exact={true}
                           element={<PrivateRoute><UserEditAdmin/></PrivateRoute>}/>
                    <Route path="/owners" exact={true} element={<PrivateRoute><OwnerListAdmin/></PrivateRoute>}/>
                    <Route path="/owners/:id" exact={true} element={<PrivateRoute><OwnerEditAdmin/></PrivateRoute>}/>
                    <Route path="/clinics" exact={true} element={<PrivateRoute><ClinicListAdmin/></PrivateRoute>}/>
                    <Route path="/clinics/:id" exact={true} element={<PrivateRoute><ClinicEditAdmin/></PrivateRoute>}/>
                    <Route path="/clinicOwners" exact={true}
                           element={<PrivateRoute><ClinicOwnerListAdmin/></PrivateRoute>}/>
                    <Route path="/clinicOwners/:id" exact={true}
                           element={<PrivateRoute><ClinicOwnerEditAdmin/></PrivateRoute>}/>
                    <Route path="/pets" exact={true} element={<PrivateRoute><PetListAdmin/></PrivateRoute>}/>
                    <Route path="/pets/:id" exact={true} element={<PrivateRoute><PetEditAdmin/></PrivateRoute>}/>
                    <Route path="/pets/:petId/visits" exact={true}
                           element={<PrivateRoute><VisitListAdmin/></PrivateRoute>}/>
                    <Route path="/pets/:petId/visits/:visitId" exact={true}
                           element={<PrivateRoute><VisitEditAdmin/></PrivateRoute>}/>
                    <Route path="/vets" exact={true} element={<PrivateRoute><VetListAdmin/></PrivateRoute>}/>
                    <Route path="/vets/:id" exact={true} element={<PrivateRoute><VetEditAdmin/></PrivateRoute>}/>
                    <Route path="/vets/specialties" exact={true}
                           element={<PrivateRoute><SpecialtyListAdmin/></PrivateRoute>}/>
                    <Route path="/vets/specialties/:specialtyId" exact={true}
                           element={<PrivateRoute><SpecialtyEditAdmin/></PrivateRoute>}/>
                    <Route path="/consultations" exact={true}
                           element={<PrivateRoute><ConsultationListAdmin/></PrivateRoute>}/>
                    <Route path="/consultations/:consultationId" exact={true}
                           element={<PrivateRoute><ConsultationEditAdmin/></PrivateRoute>}/>
                    <Route path="/consultations/:consultationId/tickets" exact={true}
                           element={<PrivateRoute><TicketListAdmin/></PrivateRoute>}/>
                    <Route path="/bookings" exact={true} element={<PrivateRoute><BookingListAdmin/></PrivateRoute>}/>
                    <Route path="/bookings/:bookingId" exact={true}
                           element={<PrivateRoute><BookingEditAdmin/></PrivateRoute>}/>
                </>)
        }
        if (role === "OWNER") {
            ownerRoutes = (
                <>
                    <Route path="/dashboard" element={<PrivateRoute><OwnerDashboard/></PrivateRoute>}/>
                    <Route path="/plan" exact={true} element={<PrivateRoute><PricingPlan/></PrivateRoute>}/>
                    <Route path="/myPets" exact={true} element={<PrivateRoute><OwnerPetList/></PrivateRoute>}/>
                    <Route path="/myPets/:id" exact={true} element={<PrivateRoute><OwnerPetEdit/></PrivateRoute>}/>
                    <Route path="/myPets/:id/visits/:id" exact={true}
                           element={<PrivateRoute><OwnerVisitEdit/></PrivateRoute>}/>
                    <Route path="/consultations" exact={true}
                           element={<PrivateRoute><OwnerConsultationList/></PrivateRoute>}/>
                    <Route path="/consultations/:consultationId" exact={true}
                           element={<PrivateRoute><OwnerConsultationEdit/></PrivateRoute>}/>
                    <Route path="/consultations/:consultationId/tickets" exact={true}
                           element={<PrivateRoute><OwnerConsultationTickets/></PrivateRoute>}/>
                    <Route path="/adoptions" exact={true} element={<PrivateRoute><OwnerAdoptionList/></PrivateRoute>}/>
                    <Route path="/adoptions/:id/new" exact={true}
                           element={<PrivateRoute><OwnerAdoptionNew/></PrivateRoute>}/>
                    <Route path="/adoptions/:id/edit" exact={true}
                           element={<PrivateRoute><OwnerAdoptionEdit/></PrivateRoute>}/>
                    <Route path="/adoptions/:id/requests" exact={true}
                           element={<PrivateRoute><OwnerAdoptionRequestList/></PrivateRoute>}/>
                    <Route path="/bookings" exact={true} element={<PrivateRoute><OwnerBookingList/></PrivateRoute>}/>
                    <Route path="/bookings/:bookingId" exact={true}
                           element={<PrivateRoute><BookingEditOwner/></PrivateRoute>}/>
                </>)
        }
        if (role === "VET") {
            vetRoutes = (
                <>
                    {/* <Route path="/dashboard" element={<PrivateRoute><OwnerDashboard /></PrivateRoute>} /> */}
                    <Route path="/myPets" exact={true} element={<PrivateRoute><OwnerPetList/></PrivateRoute>}/>
                    <Route path="/consultations" exact={true}
                           element={<PrivateRoute><VetConsultationList/></PrivateRoute>}/>
                    <Route path="/consultations/:consultationId/tickets" exact={true}
                           element={<PrivateRoute><VetConsultationTickets/></PrivateRoute>}/>
                </>)
        }
        if (role === "CLINIC_OWNER") {
            vetRoutes = (
                <>
                    <Route path="/owners" exact={true} element={<PrivateRoute><OwnerListClinicOwner/></PrivateRoute>}/>
                    <Route path="/clinics" exact={true} element={<PrivateRoute><ClinicsList/></PrivateRoute>}/>
                    <Route path="/clinics/:id" exact={true} element={<PrivateRoute><EditClinic/></PrivateRoute>}/>
                    <Route path="/consultations" exact={true}
                           element={<PrivateRoute><ConsultationListClinicOwner/></PrivateRoute>}/>
                    <Route path="/consultations/:id" exact={true}
                           element={<PrivateRoute><ConsultationEditClinicOwner/></PrivateRoute>}/>
                    <Route path="/consultations/:id/tickets" exact={true}
                           element={<PrivateRoute><VetConsultationTickets/></PrivateRoute>}/>
                    <Route path="/vets" exact={true} element={<PrivateRoute><VetListClinicOwner/></PrivateRoute>}/>
                    <Route path="/vets/:id" exact={true} element={<PrivateRoute><VetEditClinicOwner/></PrivateRoute>}/>
                    <Route path="/rooms" exact={true} element={<PrivateRoute><RoomList/></PrivateRoute>}/>
                    <Route path="/rooms/new" exact={true} element={<PrivateRoute><NewRoom/></PrivateRoute>}/>
                    <Route path="/rooms/:id" exact={true} element={<PrivateRoute><EditRoom/></PrivateRoute>}/>
                    <Route path="/bookings" exact={true} element={<PrivateRoute><OwnerBookingList/></PrivateRoute>}/>
                    <Route path="/bookings/:bookingId" exact={true}
                           element={<PrivateRoute><BookingEditOwner/></PrivateRoute>}/>
                    <Route path="/customerAgreement" exact={true} element={<PrivateRoute><CustomerAgreement /></PrivateRoute>} />
                </>)
        }
    })
    if (!jwt) {
        publicRoutes = (
            <>
                <Route path="/register" element={<Register/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/meteo" element={<MeteoApi/>}/>
                <Route path="/meteoTest" element={<MeteoTest/>}/>
                <Route path="/animalApi" element={<AnimalApi/>}/>
            </>
        )
    } else {
        userRoutes = (
            <>
                {/* <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} /> */}
                <Route path="/logout" element={<Logout/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/meteoTest" element={<MeteoTest/>}/>
                <Route path="/animalApi" element={<AnimalApi/>}/>
            </>
        )
    }

  return (
    <div>
      <ErrorBoundary FallbackComponent={ErrorFallback} >
        <AppNavbar />
        <Routes>
          <Route path="/" exact={true} element={<Home />} />
          <Route path="/plans" element={<PlanList />} />
          <Route path="/docs" element={<SwaggerDocs />} />
          {publicRoutes}
          {userRoutes}
          {adminRoutes}
          {ownerRoutes}
          {vetRoutes}
        </Routes>
      </ErrorBoundary>
    </div>
  );
}

export default App;
