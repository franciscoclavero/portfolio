import styled from 'styled-components';

export const MenuStyled = styled.nav`
  position: absolute;
  top: 0;
  height: 70px;
  width: 950px;
  translate: 25%;
  z-index: 5;
  animation: scale-in-ver-top .5s cubic-bezier(.25,.46,.45,.94) both;

  @keyframes scale-in-ver-top{
    0%{
      transform:scaleY(0);
      transform-origin:100% 0;
      opacity:1
    }
    100%{
      transform: scaleY(1);
      transform-origin: 100% 0;
      opacity: 1
    }
  }
`;