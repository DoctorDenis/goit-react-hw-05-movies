import styled from 'styled-components';

export const Card = styled.div`
  margin: 1rem;
  text-decoration: none;
  word-wrap: break-word;
  width: fit-content;

  display: flex;
  align-items: center;

  & img {
    display: inline;
    width: 100px;
    height: auto;
    margin-right: 2rem;
  }
`;
