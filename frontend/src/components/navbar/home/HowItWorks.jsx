import React from "react";
import { useState } from "react";
import StepsHIW from "./StepsHIW";
import StepsGrid from "./StepGrid";
import styled from "styled-components";
import SuggestionBanner from "./SuggestionBanner";

// const Hiw = styled.header`
//   background-color: ${(props) => props.theme.colors.lightGra};
// `

const Hiw = styled.header`
  background-color: ${(props) => props.theme.colors.lightGra};
  padding: 70px 0;

  h1 {
    font-size: 2.6rem;
    text-align: center;
  }

  p {
    text-align: center;
    max-width: 720px;
    margin: 10px auto 0;
    font-size: 1rem;
  }

  /* Tablets */
  @media (max-width: 768px) {
    padding: 50px 0;

    h1 {
      font-size: 2rem;
    }

    p {
      font-size: 0.95rem;
    }
  }

  /* Mobile */
  @media (max-width: 480px) {
    padding: 35px 0;

    h1 {
      font-size: 1.7rem;
    }

    p {
      font-size: 0.9rem;
      padding: 0 12px;
    }
  }
`;


// const UserBasedButton = styled.header`
//   text-align: center;
//   width: 100%;
//   max-width: 400px;
//   height: 50px;
//   border-radius: 50px;
//   display: flex;
//   overflow: hidden;

//   .driverbtn,
//   .ownerbtn {
//     flex: 1;
//     border-radius: 50px;
//     height: 90%;
//     cursor: pointer;
//     transition: 0.3s;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     margin: 5px;
//     font-size: 14px;
//   }

//   @media (max-width: 576px) {
//     height: 45px;

//     .driverbtn,
//     .ownerbtn {
//       font-size: 13px;
//       margin: 4px;
//     }
//   }
// `;

const UserBasedButton = styled.header`
  width: 100%;
  max-width: 400px;
  height: 50px;
  border-radius: 50px;
  display: flex;
  overflow: hidden;

  .driverbtn,
  .ownerbtn {
    flex: 1;
    border-radius: 50px;
    height: 90%;
    cursor: pointer;
    transition: 0.3s;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 5px;
    font-size: 14px;
    white-space: nowrap;
  }

  /* Small phones */
  @media (max-width: 480px) {
    height: 44px;

    .driverbtn,
    .ownerbtn {
      font-size: 13px;
      margin: 4px;
      padding: 0 8px;
    }
  }
`;

const HowItWorks = () => {
    const [mode, setMode] = useState("driver");

    const driverSteps = [
        {
            icon: "search-outline",
            title: "Search For Parking",
            description: "Enter your destination and find available parking spots nearby in real-time",
            emptyAfter: true
        },
        {
            icon: "card-outline",
            title: "Park & Pay",
            description: "Navigate to your spot and pay securely through the app.",
            emptyAfter: true
        },
        {
            icon: "location-outline",
            title: "Choose and Reserve",
            description: "View spot details, ratings, and directions. Reserve instantly with one tap.",
            emptyAfter: true
        },
        {
            icon: "checkmark-done-outline",
            title: "Done",
            description: "Your parking is confirmed. Extend time if needed or check out early.",
            emptyAfter: false
        },
    ];

    const driverSugg = [
        {
            title: "Ready to find Parking?",
            subtitle: "Join 50,000+ drivers who park smarter with ParkSy",
            buttonText: "Find Parking"
        }
    ];

    const ownerSugg = [
        {
            title: "Ready to Start Earning?",
            subtitle: "List your space and earn up to $2,000/month",
            buttonText: "List Your Space"
        }
    ];

    const ownerSteps = [
        {
            icon: "reader-outline",
            title: "List Your Space",
            description: "Add your parking spot with photos, availability, and pricing.",
            emptyAfter: true
        },
        {
            icon: "notifications-outline",
            title: "Accept Bookings",
            description: "Approve or auto-accept booking requests from verified drivers.",
            emptyAfter: true
        },
        {
            icon: "shield-checkmark-outline",
            title: "Get Verified",
            description: "Quick verification process to ensure safety and quality.",
            emptyAfter: true
        },
        {
            icon: "trending-up-outline",
            title: "Earn Money",
            description: "Get paid automatically after each booking. Track earnings in real-time.",
            emptyAfter: false
        }
    ];


    const layoutPattern = [
        "card",
        "empty",
        "card",
        "empty",
        "empty",
        "card",
        "empty",
        "card"
    ];

    const stepsToShow = mode === "driver" ? driverSteps : ownerSteps;
    const suggToShow = mode === "driver" ? driverSugg : ownerSugg;

    // console.log(activeBtn);
    return (
        <>
            <Hiw className="d-flex flex-column justify-content-around align-items-center my-3 py-4" id="Hiw">

                <div className="container d-flex flex-column justify-content-center align-items-center">
                    <div className="Herohead container">
                        <div className="head d-flex flex-column justify-content-center align-items-center fw-bold">
                            <h1>How ParkSy Works?</h1>
                            <p>Simple, fast, and secure for both drivers and space owners</p>
                        </div>
                    </div>
                    <UserBasedButton className="d-flex bg-black justify-content-evenly align-items-center mt-5 mb-3" >
                        <button className={`btn ${mode === "driver" ? "bg-light " : "bg-black text-white"} driverbtn herobtn btn w-50`} onClick={() => setMode("driver")}>For Driver</button>
                        <button className={`btn ${mode === "owner" ? "bg-light " : "bg-black text-white"} ownerbtn tealbtn btn text-black w-50`} onClick={() => setMode("owner")}>For Space Owner</button>
                    </UserBasedButton>

                    <StepsGrid steps={stepsToShow} layout={layoutPattern} />

                    {(mode === "driver") ?
                        (
                            <SuggestionBanner
                                title="Ready to find Parking?"
                                subtitle="Join 50,000+ drivers who park smarter with ParkSy"
                                buttonText="Find Parking"
                            />

                        ) :
                        <SuggestionBanner
                            title="Ready to Start Earning?"
                            subtitle="List your space and earn up to $2,000/month"
                            buttonText="List Your Space"
                        />
                    }

                </div>
            </Hiw>
        </>
    )
}

export default HowItWorks;