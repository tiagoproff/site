import styled from 'styled-components';

import Section from 'layout/Section';

export const HeaderComponent = styled.header`
  background: #ffffff;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.06);
`;

export const HeaderWrapper = styled(Section)`
  display: flex;
  align-items: center;
  padding: 16px;
  gap: 16px;

  & > div {
    align-items: center;
    display: flex;
    padding: 0;
    width: 100%;
  }
`;

export const HeaderLogo = styled.img`
  margin-right: 48px;
  width: 30px;
`;
