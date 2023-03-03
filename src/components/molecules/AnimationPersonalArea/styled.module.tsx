import styled from 'styled-components';

export const AnimationArea = styled.div`
  display: flex;
  p {
    font-size: 16px;
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
    animation: text-animation 8s infinite;
  }

@keyframes text-animation {
  0% {margin-top: 0;}
  25% {margin-top: 0;}
  50% {margin-top: -5.62rem;}
  75% {margin-top: -5.62rem;}
}
`;