import styled from 'styled-components';

export const TextStyled = styled.p`
  font-size: 16px;
  width: 500px;
  text-align: justify;
  text-indent: 32px;

  animation:tracking-in-expand-fwd-top .8s cubic-bezier(.215,.61,.355,1.000) both;

  @keyframes tracking-in-expand-fwd-top{
    0%{
      transform: translateZ(-700px) translateY(-500px);opacity:0
    }
    40%{
      opacity:.6
    }
    100%{
      transform:translateZ(0) translateY(0);opacity:1
    }
  }
`