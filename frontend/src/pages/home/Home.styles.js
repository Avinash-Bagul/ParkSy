import styled from "styled-components";

export const Button = styled.header`
    text-align: center;

    .orangebtn{
    background-color: ${(props) => props.theme.colors.orange};
    border-radius: 20px;
    }

    .tealbtn{
        background-color: ${(props) => props.theme.colors.teal};
    }
`;