import { Link } from 'react-router-dom';

import styled from 'styled-components';

export const ChipComponent = styled.div`
  align-items: center;
  background-color: #ffffff;
  border-radius: 16px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.06);
  box-sizing: border-box;
  color: #fff;
  cursor: default;
  display: inline-flex;
  font-size: 0.8125rem;
  justify-content: center;
  outline: 0;
  white-space: nowrap;
  vertical-align: middle;
`;

export const ChipLabel = styled(Link)`
  color: black;
  line-height: 1;
  padding: 12px 16px;
  text-decoration: none;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
