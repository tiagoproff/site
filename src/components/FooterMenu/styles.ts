import { deviceSizesQueries } from 'config/deviceSizes';
import Menu from 'lib/Menu';
import MenuItem from 'lib/Menu/MenuItem';
import styled from 'styled-components';

export const Menus = styled.div`
  padding: 16px;
  width: 100%;

  display: grid;
  gap: 16px;
  grid-template-columns: 1fr 1fr;

  @media ${deviceSizesQueries.mobileL} {
    display: flex;
    justify-content: space-between;
  }

  @media ${deviceSizesQueries.tablet} {
    flex: 1;
  }
`;

export const FooterMenu = styled(Menu)`
  display: flex;
  flex-direction: column;
`;

export const FooterMenuItem = styled(MenuItem)``;

export const FooterHighLightedMenuItem = styled(MenuItem)`
  font-weight: 600;
`;
