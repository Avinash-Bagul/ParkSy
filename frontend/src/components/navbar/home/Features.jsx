import React from "react";
import styled from "styled-components";

const Featurestyle = styled.header`
  .fcard {
    min-height: 150px;
    text-align: center;
    padding: 1rem;
    transition: transform 0.3s ease;
  }

  .fcard:hover {
    transform: translateY(-5px);
  }

  .visible {
    color: ${(props) => props.theme.colors.golden};
  }
`;

const Feature = () => {
    return (
        <Featurestyle className="container my-5 py-3">
            <div className="row justify-content-center g-4 m-0">

                <div className="col-12 col-md-4 col-lg-3">
                    <div className="fcard d-flex flex-column justify-content-center align-items-center">
                        <ion-icon name="flash-sharp" className="fs-1 visible"></ion-icon>
                        <h4 className="mt-3">Lightning Fast</h4>
                        <p>Book in under 30 seconds</p>
                    </div>
                </div>

                <div className="col-12 col-md-4 col-lg-3">
                    <div className="fcard d-flex flex-column justify-content-center align-items-center">
                        <ion-icon name="lock-open" className="fs-1 visible"></ion-icon>
                        <h4 className="mt-3">100% Secure</h4>
                        <p>More secure than you think</p>
                    </div>
                </div>

                <div className="col-12 col-md-4 col-lg-3">
                    <div className="fcard d-flex flex-column justify-content-center align-items-center">
                        <ion-icon name="wallet" className="fs-1 visible"></ion-icon>
                        <h4 className="mt-3">Guaranteed Payments</h4>
                        <p>Protected transactions</p>
                    </div>
                </div>

            </div>
        </Featurestyle>
    );
};

export default Feature;
