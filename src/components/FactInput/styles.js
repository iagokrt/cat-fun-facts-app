import styled from 'styled-components';

export const Container = styled.div`

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;


  input {
    background-color: transparent;
    border: none;
    padding: 4px;
    color: #fbdcc4;
    font-size: 18px;

    width: 450px;
  }

  span.buttons {
    button {
      margin-right: 4px;
      border: none;

    }
  }
`;
