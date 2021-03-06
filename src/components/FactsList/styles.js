import styled from 'styled-components';

import PerfectScrollbar from 'react-perfect-scrollbar';
export const Scroll = styled(PerfectScrollbar)`
  max-height: 260px;
  padding: 5px 15px;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const List = styled.ul`
  list-style: none;
  padding-top: 12px;

  li {
    height: 102px;

    margin-top: 8px;
    padding-bottom: 24px;
    padding-top: 24px;

    background: linear-gradient(90deg, #7d0633, #31112c);
    border-radius: 4px;
  }
`;
