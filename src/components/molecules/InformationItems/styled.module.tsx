import styled from 'styled-components';

export const InformationItemStyled = styled.div`
  display: flex;
  height: 40px;
  line-height: 42px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.15);

  & :nth-child(2) {
    margin-left:5px;
  }
`;