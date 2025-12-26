import React from "react";
import styled from "styled-components";

const Sugg = styled.section`
  min-height: 150px;
  width: 100%;
  background-color: ${(props) => props.theme.colors.lightGray};
  border-radius: 10px;
  padding: 1.5rem;

  @media (max-width: 768px) {
    min-height: auto;
    text-align: center;
    padding: 1.5rem 1rem;
  }

  @media (max-width: 576px) {
  padding: 20px;
  text-align: center;

  h3 {
    font-size: 1.4rem;
  }

  p {
    font-size: 0.9rem;
  }
}

`;

const ButtonWrapper = styled.div`
  text-align: center;

  .orangebtn {
    background-color: ${(props) => props.theme.colors.orange};
    border-radius: 50px;
    width: 150px;
    height: 50px;
  }

  @media (max-width: 768px) {
    .orangebtn {
      width: 100%;
      max-width: 260px;
      margin-top: 1rem;
    }
  }
`;


const SuggestionBanner = ({ title, subtitle, buttonText }) => {
  return (
    <Sugg className="mt-5 mx-auto align-content-center">
      <div className="d-flex flex-column flex-md-row justify-content-between align-items-center gap-3">

        <div className="suggestion-text">
          <h5 className="fw-bold">{title}</h5>
          <p className="mb-0">{subtitle}</p>
        </div>

        <ButtonWrapper>
          <button className="orangebtn btn text-light">
            {buttonText}
          </button>
        </ButtonWrapper>

      </div>
    </Sugg>
  );
};

export default SuggestionBanner;
