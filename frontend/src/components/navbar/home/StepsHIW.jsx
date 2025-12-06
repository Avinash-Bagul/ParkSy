import React from "react";
import { StepsCards, Sugg } from "./StepsHIW.styles";
import { Button } from "./Home.styles";
const StepsHIW = () => {
    return (
        <>
            <StepsCards className="row steps d-flex justify-content-center align-items-center w-100 my-5">
                <div className="col-3 bg-card d-flex justify-content-center align-content-center" style={{ height: "300px" }}>
                    <div className="content d-flex flex-column justify-content-evenly align-items-center my-3 px-4">
                        <div className="icon bg-light d-flex justify-content-center align-items-center">
                            <ion-icon name="search-outline" className="fs-2"></ion-icon>
                        </div>
                        <div className="head-HIW">
                            <h5>Search For Parking</h5>
                        </div>
                        <div className="discription-HIW">
                            <p className="card-text">Enter your destination and find available parking spots nearby in real-time</p>
                        </div>
                    </div>
                </div>
                <div className="col-3" style={{ height: "300px" }}>

                </div>
                <div className="col-3 bg-card d-flex justify-content-center align-content-center" style={{ height: "300px" }}>
                    <div className="content d-flex flex-column justify-content-evenly align-items-center my-3 px-4">
                        <div className="icon bg-light d-flex justify-content-center align-items-center">
                            <ion-icon name="card-outline" className="fs-2"></ion-icon>
                        </div>
                        <div className="head-HIW">
                            <h5>Park & Pay</h5>
                        </div>
                        <div className="discription-HIW">
                            <p className="card-text">Navigate to your spot and pay securely through the app.</p>
                        </div>
                    </div>
                </div>
                <div className="col-3 " style={{ height: "300px" }}></div>
                <div className="col-3 " style={{ height: "300px" }}></div>
                <div className="col-3 bg-card d-flex justify-content-center align-content-center" style={{ height: "300px" }}>
                    <div className="content d-flex flex-column justify-content-evenly align-items-center my-3 px-4">
                        <div className="icon bg-light d-flex justify-content-center align-items-center">
                            <ion-icon name="location-outline" className="fs-2"></ion-icon>
                        </div>
                        <div className="head-HIW">
                            <h5>Choose and Reserve</h5>
                        </div>
                        <div className="discription-HIW">
                            <p className="card-text">View spot details, ratings, and directions. Reserve instantly with one tap.</p>
                        </div>
                    </div>
                </div>
                <div className="col-3 " style={{ height: "300px" }}></div>
                <div className="col-3 bg-card d-flex justify-content-center align-content-center" style={{ height: "300px" }}>
                    <div className="content d-flex flex-column justify-content-evenly align-items-center my-3 px-4">
                        <div className="icon bg-light d-flex justify-content-center align-items-center">
                            <ion-icon name="checkmark-done-outline" className="fs-2"></ion-icon>
                        </div>
                        <div className="head-HIW">
                            <h5>Done</h5>
                        </div>
                        <div className="discription-HIW">
                            <p className="card-text">Your parking is confirmed. Extend time if needed or check out early.</p>
                        </div>
                    </div>
                </div>


            </StepsCards>

            <Sugg className="sugg mt-5 px-5 mx-auto d-flex justify-content-between align-items-center">
                <div className="suggestion-text d-flex flex-column justify-content-center align-content-center">
                    <h5>Ready to find Parking</h5>
                    <p>Join 50,000+ drivers who park smarter with ParkSy</p>
                </div>

                <Button>

                    <button className="orangebtn herobtn btn text-light">Find Parking</button>
                </Button>

            </Sugg>


        </>
    )
}

export default StepsHIW;

