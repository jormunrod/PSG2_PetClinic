import React from "react";
import { BsDot, BsFillRocketTakeoffFill } from "react-icons/bs";
import { FaCheck, FaPaperPlane, FaTimes, FaMoneyBill, FaMoneyBillAlt, FaMoneyBillWave } from "react-icons/fa";
import { ImAirplane } from "react-icons/im";
import "../../static/css/pricing/pricingPage.css";

export default function PlanList() {
  
    return (
      <div className="pricing-page-container">
        <div>
          <h1 className="pricing-title">Pricing Plans</h1>
        </div>
        <div className="section-pricing">
          <div className="pricing-container">
            <div className="pricing-card text-center">
              <div className="title">
                <div className="icon">
                  <FaMoneyBill color="white" />
                </div>
                <h2>BASIC</h2>
              </div>
              <div className="plan-price">
                <h4>FREE</h4>
              </div>
              <div className="option">
                <ul>
                  <li>
                    <BsDot color="white" /> Up to 2 pets
                  </li>
                  <li>
                    <BsDot color="white" /> Up to 2 visit per month
                  </li>
                  <li>
                    <BsDot color="white" /> Bussiness hours
                  </li>
                  <li>
                    <FaTimes color="red" /> Pet Hotel
                  </li>
                  <li>
                    <FaTimes color="red" /> Adoptions
                  </li>
                  <li>
                    <FaTimes color="red" /> Online consultations
                  </li>
                  <li>
                    <FaTimes color="red" /> Dashboard
                  </li>
                </ul>
              </div>
            </div>
            {/* END Col one */}
            <div className="pricing-card text-center">
              <div className="title">
                <div className="icon">
                  <FaMoneyBillWave color="white" />
                </div>
                <h2>GOLD</h2>
              </div>
              <div className="plan-price">
                <h4>5</h4>

                <h5>€</h5>
              </div>
              <div className="option">
                <ul>
                  <li>
                    <BsDot color="white" /> Up to 5 pets
                  </li>
                  <li>
                    <BsDot color="white" /> Up to 5 visit per month
                  </li>
                  <li>
                    <BsDot color="white" /> 24 hours 7 days
                  </li>
                  <li>
                    <FaCheck color="green" /> Pet Hotel
                  </li>
                  <li>
                    <FaCheck color="green" /> Adoptions
                  </li>
                  <li>
                    <FaTimes color="red" /> Online consultations
                  </li>
                  <li>
                    <FaTimes color="red" /> Dashboard
                  </li>
                </ul>
              </div>
            </div>
            {/* END Col two */}
            <div className="pricing-card text-center">
              <div className="title" style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
                <div className="icon">
                  <FaMoneyBillAlt color="white" />
                </div>
                <h2>PLATINUM</h2>
              </div>
              <div className="plan-price">
                <h4>12</h4>

                <h5>€</h5>
              </div>
              <div className="option">
                <ul>
                  <li>
                    <BsDot color="white" /> Up to 12 pets
                  </li>
                  <li>
                    <BsDot color="white" /> Up to 12 visit per month
                  </li>
                  <li>
                    <BsDot color="white" /> 24 hours 7 days
                  </li>
                  <li>
                    <FaCheck color="green" /> Pet Hotel
                  </li>
                  <li>
                    <FaCheck color="green" /> Adoptions
                  </li>
                  <li>
                    <FaCheck color="green" /> Online consultations
                  </li>
                  <li>
                    <FaCheck color="green" /> Dashboard
                  </li>
                </ul>
              </div>
            </div>
            {/* END Col three */}
          </div>
        </div>
      </div>
    );
  }
