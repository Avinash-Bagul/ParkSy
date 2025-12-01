import styled from "styled-components";

export const UserBasedButton = styled.header`
  text-align: center;
  width: 400px;
  height: 50px;
  border-radius: 50px;
  display: flex;
  overflow: hidden;
  /* background-color: ${(props) => props.theme.colors.lightGray}; */

  .driverbtn,
  .ownerbtn {
    flex: 1;
    border-radius: 50px;
    height: 90%;
    cursor: pointer;
    transition: 0.3s;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 5px;
  }

  /* Driver active */
  .driverbtn {
    background-color: ${(props) =>
      props.$active === "driver"
        ? props.theme.colors.white
        : props.theme.colors.lightGray};
        
  }

  /* Owner active */
  .ownerbtn {
    background-color: ${(props) =>
      props.$active === "owner"
        ? props.theme.colors.lightGray
        : props.theme.colors.white};
  }
`;
