import styled from "styled-components";

export const TextAreaStyled = styled.textarea`
  background-color: transparent;
  border: 1px solid rgba(255, 255, 255, 0.25);
  border-radius: 5px;
  color: #fff;
  height: 111px;
  margin-top: 8px; 
  max-width: 774px;
  min-width: 774px;
  padding: 8px;
  font-size: 16px;
  
  &:focus {
    outline: none;
    border: 1px solid #fff;
  }
`;