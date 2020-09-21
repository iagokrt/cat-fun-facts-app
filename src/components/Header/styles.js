import styled from 'styled-components';

export const Wrapper = styled.div`
  max-width: 100%;
  background-color: #FFFFFF;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  padding: 8px;

  aside {
    input {
      background: linear-gradient(90deg, #7d0633, #31112c);
      color: #FFFFFF;

      border: 0;
      border-radius: 4px;
      padding: 4px;
      margin-right: 4px;
    }

    button {
      border: 1px solid #7d0633;
      background-color: white;
      padding: 4px;
      color: black;
    }
  }
`;
