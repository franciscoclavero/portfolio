import styled from 'styled-components'

export const MenuItemStyled = styled.li`
  height: 70px;
  text-align: center;
  line-height: 70px;
  width: 190px;
  cursor: pointer;
  overflow: hidden;
  margin-left: 1000px;

  animation-name: surge;
  animation-duration: 1s;
  animation-delay: 1s;
  animation-fill-mode: forwards;    


  &:hover {
    font-size: 16px;
    border-bottom: 3px solid #fff;
  }

  @keyframes surge {
    0%   { margin-left: 1000px; }
    100% { margin-left: 0; }
  }
`;