import React from "react";
import styled from "styled-components";

const Whystyle = styled.header`
        background-color: ${(props) => props.theme.colors.lightGray};
        /* height: 130vh; */

        .wcard{
            position: relative;
            height: 300px;
            background-color: ${(props) => props.theme.colors.white};
            border-radius: 10px;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
            overflow: hidden;
        }
        /* .detailsCard{
            position: absolute;
        } */
            
        .circle{
            position: absolute;
            top: -100%;
            left: -100%;
            background-color: ${(props) => props.theme.colors.orange};
            height: 400px;
            width: 400px;
            border-radius: 50%;
            /* z-index: -1; */
        }
        .wcard:hover .circle{
            top: -80%;
            left: -80%;
            transition: all ease-in-out 0.3s;
            border-radius: 50%;

        }
        /* .wcard:hover .Wdesc{
            color: white;
        } */
        .whead{
            position: relative; 
            top: 0px;
            left: 0px;  
            color: black;
            z-index: 1;
            width: 100%;
            height: 100%;
            
        }
        .col-3 p{
            text-align: center;
        }
        .Wdesc{
            color: black;
            
        }
        .tranYDown{
            transform: translateY(50px);
            
        }

        .tranYUp {
            transform: translateY(-50px);
        }

        .history{
            height: 150px;
            background: ${(props) => props.theme.colors.gradiant};
            color: ${(props) => props.theme.colors.white};
            border-radius: 10px;
        }
        .history p{
            margin: 0;
        }

    `


const Why = () => {
    return (
        <>
            <Whystyle className=" d-flex flex-column justify-content-around align-items-center my-5 py-5" >
                <div className="container d-flex flex-column justify-content-center align-items-center">
                    <div className="Herohead container">
                        <div className="head d-flex flex-column justify-content-center align-items-center fw-bold">
                            <h1>Why Choose ParkSy?</h1>
                            <p>More than just a parking app it's a smarter way to move through your city</p>
                        </div>
                    </div>
                    <div className="row my-5 py-5 g-3 px-0">
                        <div className="col-3 tranYDown">
                            <div className="wcard d-flex justify-content-evenly align-items-center">

                                <div className="circle">
                                </div>
                                <div className="whead d-lfex justify-content-betweem align-content-center">

                                    <div className="details h-100 d-flex flex-column justify-content-center ">
                                        <h4 className="mb-5 text-center">Save money</h4>
                                        <div className=" Wdec px-3">
                                            <ul>
                                                <li>Up to 60% cheaper than street meters
                                                </li>
                                                <li>No hidden fees or surprise charges</li>
                                                <li>Dynamic pricing for best deals</li>
                                                <li>Compare prices instantly</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="col-3 tranYUp">
                            <div className="wcard d-flex justify-content-evenly align-items-center">

                                <div className="circle">
                                </div>
                                <div className="whead d-lfex justify-content-betweem align-content-center">

                                    <div className="details h-100 d-flex flex-column justify-content-center ">
                                        <h4 className="mb-5 text-center">Save Time</h4>
                                        <div className=" Wdec px-3">
                                            <ul>
                                                <li>Book in under 30 seconds
                                                </li>
                                                <li>Pre-book before you leave</li>
                                                <li>GPS navigation to your spot</li>
                                                <li>No more circling blocks</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="col-3 tranYDown">
                            <div className="wcard d-flex justify-content-evenly align-items-center">

                                <div className="circle">
                                </div>
                                <div className="whead d-lfex justify-content-betweem align-content-center">

                                    <div className="details h-100 d-flex flex-column justify-content-center ">
                                        <h4 className="mb-5 text-center">Eco- friendly</h4>
                                        <div className=" Wdec px-3">
                                            <ul>
                                                <li>Reduce idle driving emissions
                                                </li>
                                                <li>Optimize unused urban spaces</li>
                                                <li>Community impact metrics</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="col-3 tranYUp">
                            <div className="wcard d-flex justify-content-evenly align-items-center">

                                <div className="circle">
                                </div>
                                <div className="whead d-lfex justify-content-betweem align-content-center">

                                    <div className="details h-100 d-flex flex-column justify-content-center ">
                                        <h4 className="mb-5 text-center">Community-Driven</h4>
                                        <div className=" Wdec px-3 ">
                                            <ul>
                                                <li>Connect with local residents
                                                </li>
                                                <li>Verified trusted members</li>
                                                <li>Transparent rating system</li>
                                                <li>Support local economies</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>

                    <div className="history w-100 d-flex justify-content-between align-items-center my-5">
                        <div className="H-box text-center px-5 d-flex flex-column justify-content-evenly align-items-center">
                            <h3>$800</h3>
                            <p>Avg. saved per Year</p>
                        </div>
                        <div className="H-box text-center px-5 d-flex flex-column justify-content-evenly align-items-center">
                            <h3>25Hr</h3>
                            <p>Time Saved Annualy</p>
                        </div>
                        <div className="H-box text-center px-5 d-flex flex-column justify-content-evenly align-items-center">
                            <h3>50K+</h3>
                            <p>Happy Users</p>
                        </div>
                        <div className="H-box text-center px-5 d-flex flex-column justify-content-evenly align-items-center">
                            <h3>4.9⭐</h3>
                            <p>Rating on Webapp</p>
                        </div>
                    </div>
                </div>
            </Whystyle>
        </>
    )
}

export default Why;




{/* <div className="bg-card d-flex justify-content-center align-content-center h-100 px-4" style={{ height: "400px" }}>
                                    <div className="icon">

                                    </div>
                                    <div className="WhyCard d-flex flex-column justify-content-evenly h-100 align-items-center">

                                        <div className="Title-icon d-flex justify-content-evenly w-100 align-items-center">
                                            <h5>Save money</h5>
                                        </div>
                                        <div className="desc text-black">
                                            <ul>
                                                <li>Up to 60% cheaper than street meters</li>
                                                <li>No hidden fees or surprise charges</li>
                                                <li>Dynamic pricing for best deals</li>
                                                <li>Compare prices instantly</li>
                                            </ul>
                                        </div>
                                    </div>

                                </div> */}