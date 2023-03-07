import styled from 'styled-components';

export const GroupAreaStyled = styled.div`
  margin-top: 16px;
  font-style: normal;
  font-weight: 500;
  font-size: 12px;

  & > div:nth-of-type(1) {
    animation: tilt-in-fwd-tr .9s cubic-bezier(.25,.46,.45,.94) 0.1s both;
  }
  & > div:nth-of-type(2) {
    animation: tilt-in-fwd-tr .9s cubic-bezier(.25,.46,.45,.94) 0.2s both;
  }
  & > div:nth-of-type(3) {
    animation: tilt-in-fwd-tr .9s cubic-bezier(.25,.46,.45,.94) 0.3s both;
  }
  & > div:nth-of-type(4) {
    animation: tilt-in-fwd-tr .9s cubic-bezier(.25,.46,.45,.94) 0.4s both;
  }
  & > div:nth-of-type(5) {
    animation: tilt-in-fwd-tr .9s cubic-bezier(.25,.46,.45,.94) 0.5s both;
  }


  @keyframes tilt-in-fwd-tr{
    0%{
      transform:rotateY(20deg) rotateX(35deg) translate(300px,-300px) skew(-35deg,10deg);
      opacity:0;
    }
    100%{
      transform:rotateY(0) rotateX(0deg) translate(0,0) skew(0deg,0deg);
      opacity:1;
    }
  }
`;