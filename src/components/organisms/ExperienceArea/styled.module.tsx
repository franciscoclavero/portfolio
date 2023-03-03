import styled from 'styled-components';

type TExperienceArea = {
  border?: boolean
}

export const ExperienceAreaStyled = styled.div<TExperienceArea>`
  width: 50%;
  ${(props) => props.border ? 'border-right: 1px solid rgba(255, 255, 255, 0.25);' : ''} 
`; 