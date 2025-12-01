import React from "react";
import { useState } from "react";
import { UserBasedButton } from "./HowItWorks.styles";
import StepsHIW from "./StepsHIW";

const HowItWorks = () => {
    const [activeBtn, setActiveBtn] = useState("driver");
    console.log(activeBtn);
    return (
        <>
            <div className="h-100vh d-flex flex-column justify-content-around align-items-center my-5" >
                <div className="container d-flex flex-column justify-content-center align-items-center">
                    <div className="Herohead container">
                        <div className="head d-flex flex-column justify-content-center align-items-center fw-bold">
                            <h1>How ParkSy Works?</h1>
                            <p>Simple, fast, and secure for both drivers and space owners</p>
                        </div>
                    </div>
                    <UserBasedButton className="d-flex justify-content-evenly align-items-center mt-3" $active={activeBtn}>
                        <button className="driverbtn herobtn btn text-black bg-light w-50" onClick={() => setActiveBtn("driver")}>For Driver</button>
                        <button className="ownerbtn tealbtn btn text-black bg-light w-50" onClick={() => setActiveBtn("owner")}>For Space Owner</button>
                    </UserBasedButton>

                    <StepsHIW/>
                </div>
            </div>
        </>
    )
}

export default HowItWorks;