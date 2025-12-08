import React from "react";
import styled from "styled-components";

const Sugg = styled.header`
    height: 150px;
    width: 100%;
    background-color: ${(props) => props.theme.colors.lightGray};
    border-radius: 10px;
`

const Button = styled.header`
    text-align: center;
    color: ${(props) => props.theme.colors.buttonTextColor};

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

const SuggestionBanner = ({ title, subtitle, buttonText }) => {
    return (
        <Sugg className="sugg mt-5 px-5 mx-auto d-flex justify-content-between align-items-center">
            <div className="suggestion-text d-flex flex-column justify-content-center">
                <h5>{title}</h5>
                <p>{subtitle}</p>
            </div>

            <Button>
                <button className="orangebtn herobtn btn text-light">

                    {buttonText}
                </button>
            </Button>
        </Sugg>
    );
};

export default SuggestionBanner;
