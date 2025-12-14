import React from "react";
import styled from "styled-components";

const Whystyle =  styled.header`
    
`


const Why = () => {
    return (
        <>
            <Whystyle className="h-100vh d-flex flex-column justify-content-around align-items-center my-5 py-5" >
                <div className="container d-flex flex-column justify-content-center align-items-center">
                    <div className="Herohead container">
                        <div className="head d-flex flex-column justify-content-center align-items-center fw-bold">
                            <h1>Why Choose ParkSy?</h1>
                            <p>More than just a parking app – it's a smarter way to move through your city</p>
                        </div>
                    </div>
                </div>

            </Whystyle>
        </>
    )
}

export default Why;