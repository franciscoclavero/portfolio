import styled from "styled-components";

type TTextContact = {
  align: string;
}

export const ContactAreaTextStyled = styled.div<TTextContact>`
  width: 387px;
  height: 52px;
  color: #fff;
  line-height: 44px;
  margin-top: 12px;
  padding: 4px;
  font-size: 16px;
  text-align: ${(props) => props.align};
`;