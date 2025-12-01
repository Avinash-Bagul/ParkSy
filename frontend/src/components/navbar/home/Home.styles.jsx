import styled from "styled-components";

export const Button = styled.header`
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