import styled from "styled-components";

export const ImageAreaStyled = styled.div`
  width: 425px;
  position: relative;
  margin: 12px;
  cursor: pointer;

  &:hover a div {
    opacity: 1;
  }
`;

export const ImageStyled = styled.img`
  width: 100%;
`;

export const Hyperlink = styled.a`
  color: #fff;
  text-decoration: none;

`;

export const TextStyled = styled.div`
  opacity: 0;
  position: absolute;
  background: linear-gradient(0deg, rgba(2,0,36, 1) 0%, rgba(0,0,0,0.95) 35%, rgba(249,249,249,0.1) 100%);
  height: 100%;
  width: 100%;
  top: 0;
  font-size: 18px;
  font-weight: bold;
  color: white;
  line-height: 300px;
  padding-left: 12px;
`;