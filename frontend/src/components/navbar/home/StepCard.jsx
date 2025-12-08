import React from "react";
import styled from "styled-components";

const StepsCards = styled.header`
    .bg-card{
        background-color: ${(props) => props.theme.colors.tealCardColor};
        color: ${(props) => props.theme.colors.white};
        border-radius: 10px;
    }
    .icon{
        width: 60px;
        height: 60px;
        border-radius: 50%;
        color: black;
    }

    .col-3 p{
        text-align: center;
    }
    .card-text{
        text-align: center;
    }
`

const StepCard = ({ icon, title, description }) => {
    return (
        <StepsCards className="col-3">
            <div className="bg-card d-flex justify-content-center align-content-center" style={{ height: "300px" }}>
                <div className="content d-flex flex-column justify-content-evenly align-items-center my-3 px-4">
                    <div className="icon bg-light d-flex justify-content-center align-items-center">
                        <ion-icon name={icon} class="fs-2"></ion-icon>
                    </div>
                    <div className="head-HIW">
                        <h5>{title}</h5>
                    </div>
                    <div className="discription-HIW">
                        <p className="card-text ">{description}</p>
                    </div>
                </div>
            </div>
        </StepsCards>
    );
};

export default StepCard;
