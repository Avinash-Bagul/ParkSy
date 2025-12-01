import React from "react";
import { Link } from "react-router-dom";
import { Button } from "./Home.styles.jsx";
const Hero = () => {
    return (
        <>
            <div className="h-100vh d-flex flex-column justify-content-around align-items-center" style={{ height: "90vh" }}>

                <div className="container-fluid ">
                    <div className="heroImg" style={{ height: "300px" }}>
                        <img src="" alt="Image" className="heroimg" />
                    </div>
                </div>
                <div className="container">
                    <div className="Herohead container">
                        <div className="head d-flex flex-column justify-content-center align-items-center fw-bold">
                            <h1>Find , Book & Earn With Parking Spaces Near You</h1>
                            <p>ParkSy connects parking space owners with drivers who needs parking</p>
                            <div className="herobtns d-flex justify-content-around align-items-center">
                                <Button>
                                    <button className="orangebtn herobtn btn text-light">Find Parking</button>
                                    <button className="herobtn tealbtn btn text-light">List Your Space</button>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero;