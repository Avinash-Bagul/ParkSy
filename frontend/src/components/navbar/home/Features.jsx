import React from "react";
import styled from "styled-components";

const Featurestyle = styled.header`
    .fcard{
        height: 150px;
    }
    .visible{
        color: ${(props) => props.theme.colors.golden};
    }
`

const Feature = () => {
    return (
        <>
            <Featurestyle className="container my-5 py-3">
                <div className="row d-flex justify-content-evenly align-content-center  m-0">
                    <div className="col-3">
                        <div className="fcard d-flex flex-column justify-content-between align-items-center">
                            <ion-icon name="flash-sharp" className="fs-1 visible"></ion-icon>
                            <h4>Lightning Fast</h4>
                            <p>Book in under 30 seconds</p>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="fcard d-flex flex-column justify-content-between align-items-center">
                            <ion-icon name="lock-open" className="fs-1 visible"></ion-icon>
                            <h4>100% Secure</h4>
                            <p>Secure than you think</p>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="fcard d-flex flex-column justify-content-between align-items-center">
                            <ion-icon name="wallet" className="fs-1 visible"></ion-icon>
                            <h4>Guaranteed Payments</h4>
                            <p>Protected transactions</p>
                        </div>
                    </div>
                </div>
            </Featurestyle>
        </>
    )
}

export default Feature;