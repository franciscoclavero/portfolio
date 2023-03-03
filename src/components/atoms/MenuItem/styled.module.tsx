import styled from 'styled-components'

export const MenuItemStyled = styled.li`
  height: 70px;
  text-align: center;
  line-height: 70px;
  width: 130px;
  cursor: pointer;
  overflow: hidden;
  margin-left: 200px;

  animation-name: surge;
  animation-duration: 1s;
  animation-delay: 1s;
  animation-fill-mode: forwards;    


  &:hover {
    border-bottom: 3px solid #004281;
  }

  @keyframes surge {
    0%   { margin-left: 200px; }
    100% { margin-left: 0; }
  }
`;