import React from "react";
import { Link } from "react-router-dom";
import heroimg from '../../../assets/heroimg.png'
import styled from "styled-components";

const Button = styled.header`
    text-align: center;
    color: ${(props) => props.theme.colors.buttonTextColor};

    .heroimg{
        width: 100%;
        height: 100%;
       background-image: url(${heroimg});
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
    }
    .orangebtn{
    background-color: ${(props) => props.theme.colors.orange};
    border-radius: 50px;
     width: 150px;
    height: 50px;
    margin: 0 1rem;
    }

    .tealbtn{
        background-color: ${(props) => props.theme.colors.teal};
         border-radius: 50px;
         width: 150px;
         height: 50px;
    }

    .orangebtn:hover, .tealbtn:active{
        color: ${(props) => props.theme.colors.white};
    }
`;
const Hero = () => {
    return (
        <>
            <div className="h-100vh d-flex flex-column justify-content-between align-items-center" style={{ height: "90vh" }}>
                <div className="container-fluid p-0">
                    <div
                        className="heroImg"
                        style={{
                            height: "450px",
                            backgroundImage: `url(${heroimg})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            backgroundRepeat: "no-repeat",
                        }}
                    >
                        {/* content here */}
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