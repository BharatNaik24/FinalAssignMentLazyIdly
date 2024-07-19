import styled from "styled-components";

export const ListItem = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-radius: 4px;
  background-color: ${(props) =>
    props.bgColor && `${props.bgColor}`}; //80 value is transparency
  margin-top: 10px;
  padding: 10px;
  width: 85%;
  font-family: "Roboto", sans-serif;
  border-bottom-right-radius: 40px;
  height: 15px;
  font-family: "Roboto";
  margin-bottom: -20px;
  border: 1px solid #ffffff;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
  transition: padding 0.3s ease-in-out, margin-left 0.3s ease-in-out;
  &:hover {
    padding: 1.3%;
    margin-left: 100px;
    cursor: pointer;
  }
`;

export const HeadingElement = styled.h1`
  color: ${(props) => props.textColor};
  background-color: #000000;
  text-align: center;
  padding-left: 10px;
  padding-right: 10px;
  border-bottom-right-radius: 15px;
  margin-right: 15px;
  font-size: 28px;
  margin-left: -7px;
`;
export const TimeContainer = styled.div`
  display: flex;
  width: 33%;
  justify-content: space-around;
  align-items: center;
`;

export const SerialNameContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  width: auto;
  align-items: center;
`;
export const HeadingName = styled.h1`
  font-size: 20px;
  font-family: "Roboto";
`;
