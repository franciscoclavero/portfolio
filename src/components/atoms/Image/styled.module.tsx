import styled from "styled-components";

type TProps = {
  height: string;
  width: string;
}

export const ImageStyled = styled.img<TProps>`
  height: ${(props) => props.height };
  width: ${(props) => props.width };

`;