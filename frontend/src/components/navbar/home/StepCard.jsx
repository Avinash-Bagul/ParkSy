import React from "react";
import styled from "styled-components";

const StepsCards = styled.div`
  width: 100%;

  .bg-card {
    background-color: ${(props) => props.theme.colors.tealCardColor};
    color: ${(props) => props.theme.colors.white};
    border-radius: 14px;
    height: 300px;
    padding: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }

  .bg-card:hover {
    transform: translateY(-8px);
    box-shadow: 0 18px 40px rgba(0, 0, 0, 0.18);
  }

  .content {
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 16px;
  }

  .icon {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background: white;
    color: black;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  h5 {
    font-weight: 600;
    margin: 0;
  }

  .card-text {
    font-size: 15px;
    line-height: 1.5;
  }

  /* Tablet */
  @media (max-width: 992px) {
    .bg-card {
      height: 280px;
    }

    .card-text {
      font-size: 14px;
    }
  }

  /* Mobile */
  @media (max-width: 576px) {
    .bg-card {
      height: 300px;
      padding: 16px 8px;
    }
    /* .content{
      display: flex;
      justify-content: center;
      align-items: center;
    } */

    .icon {
      width: 50px;
      height: 50px;
    }

    h5 {
      font-size: 16px;
    }

    .card-text {
      font-size: 14px;
    }
  }
`;

const StepCard = ({ icon, title, description }) => {
    return (
        <StepsCards>
            <div className="bg-card">
                <div className="content">
                    <div className="icon">
                        <ion-icon name={icon} className="fs-4"></ion-icon>
                    </div>
                    <h5>{title}</h5>
                    <p className="card-text p-0">{description}</p>
                </div>
            </div>
        </StepsCards>
    );
};

export default StepCard;
