import styled from 'styled-components';

export const InformationTitle = styled.div`
  display: flex;
  height: 40px;
  line-height: 42px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.15);

  & div:nth-child(2) {
    margin-left:5px;
  }

  img {
    margin-left: 4px;
    margin-top: 8px;
    filter: invert(15%) sepia(21%) saturate(5737%) hue-rotate(177deg) brightness(93%) contrast(102%);
  }
`;
