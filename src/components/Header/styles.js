import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  background-color: #FFFFFF;

  padding: 8px;
`;

export const AddNew = styled.aside`
  input {
    background: linear-gradient(90deg, #7d0633, #31112c);
    color: #FFFFFF;
    border: 0;
    border-radius: 4px;

    padding: 4px;
    margin-right: 4px;
  }

  button {
    background-color: white;
    color: black;
    border: 1px solid #7d0633;

    padding: 4px;

    transition: 0.2s linear all;
    &:hover {
      background: linear-gradient(90deg, #7d0633, #31112c);
      color: #FFF;
    }
  }
`;
