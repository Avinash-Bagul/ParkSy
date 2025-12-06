import styled from "styled-components";

export const StepsCards = styled.header`
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
`

export const Sugg = styled.header`
    height: 150px;
    width: 100%;
    background-color: ${(props) => props.theme.colors.lightGray};
    border-radius: 10px;
`

