import styled from 'styled-components';

export const StyledForm = styled.form`
  background-color: white;
  margin: 1rem auto;
  display: flex;

  border: 1px solid black;
  width: fit-content;
  font-size: 1rem;
`;

export const StyledInput = styled.input`
  padding: 10px 20px;
  font-size: 1rem;
  outline: none;
  border: none;
`;

export const StyledButton = styled.button`
  border-radius: 50%;
  border: none;
  background-color: inherit;
`;

export const IconStyles = {
  width: 25,
  height: 25,
  fill: 'grey',
  cursor: 'pointer',
};

export const StyledUl = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  margin: 0 auto;
  padding: 0;
  & li:nth-child(2n) {
    background-color: #b7b4b4;
  }
`;
