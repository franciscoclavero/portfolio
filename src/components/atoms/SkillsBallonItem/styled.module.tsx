import styled from "styled-components";

export const BallonItem = styled.div`
  height: 20px;
  width: 180px;
  font-size: 12px;
  margin: 8px 16px;
  position: relative;
  
  &::before {
    content: '';
    height: 4px;
    width: 4px;
    position: absolute;
    left: -12px;
    border: 1px solid black;
    transform: rotate(45deg);
    top: 25%;
  }
`;