import styled from "styled-components";

export const InputStyled = styled.input`
  background-color: transparent;
  border: none;
  border-bottom: 1px solid rgba(255, 255, 255, 0.25);
  color: #fff;
  font-size: 16px;
  height: 37px;
  margin: 4px;
  padding-left: 8px;
  width: 365px;

  &:focus {
    outline: none;
    border-bottom: 1px solid #fff;
  }
`;