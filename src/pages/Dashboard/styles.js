import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const CatFactsList = styled.ul`
  list-style: none;

  padding-top: 12px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  max-width: 730px;

  li {
    color: #fbdcc4;

    padding-bottom: 12px;
    padding-top: 12px;

    margin-top: 18px;

    background: linear-gradient(90deg, #7d0633, #31112c);

    border-radius: 4px;

    min-width: 450px;
    max-width: 450px;
    text-align: center;
  }
`;

