import styled from "styled-components";

export const StepsCards =  styled.header`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-column-gap: 0px;
    grid-row-gap: 0px;
   
   .box{
    background-color: red;
   }
`