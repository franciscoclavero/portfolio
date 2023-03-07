import styled from 'styled-components';

export const AnimationArea = styled.div`
  display: flex;
  p {
    font-size: 16px;
  }
  animation:tilt-in-fwd-tl .6s cubic-bezier(.25,.46,.45,.94) 0.2s both;

  @keyframes tilt-in-fwd-tl{
    0%{
      transform:rotateY(-20deg) rotateX(35deg) translate(-300px,-300px) skew(35deg,-10deg);opacity:0
    }
    100%{
      transform:rotateY(0) rotateX(0deg) translate(0,0) skew(0deg,0deg);opacity:1
    }
  }
`;

export const Animation = styled.div`
  height:50px;
  overflow:hidden;
  margin-left: 1rem;
  display:inline-block;
  
  div {
    padding: 0.25rem 0.75rem 0.25rem 0;
    height:2.81rem;
    margin-bottom: 2.81rem;
    line-height: 40px;
    font-size: 24px;
  }
  div:first-child {
    animation: text-animation 8s infinite 1s;
  }

@keyframes text-animation {
  0% {margin-top: 0;}
  25% {margin-top: 0;}
  50% {margin-top: -5.62rem;}
  75% {margin-top: -5.62rem;}
}
`;