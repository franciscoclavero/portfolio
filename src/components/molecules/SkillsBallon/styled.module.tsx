import styled from 'styled-components';

export const SkillsBallonStyled = styled.div`
position: absolute;
border: 1px solid rgba(255,255,255,.75);
border-radius: 5px;
margin: 20.5px;
width: 430px;
background-color: white;
display: flex;
flex-wrap: wrap;
display: none;

  &::before {
    position: absolute;
    content: ' ';
    height: 10px;
    width: 10px;
    background-color: white;
    top: -7px;
    left: 38px;
    transform: rotate(45deg);
    border-top: 1px solid white;
    border-left: 1pX solid white;
  }
`;