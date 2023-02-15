import styled from 'styled-components';

import Menu from '../../lib/Menu';
import Section from '../Section';
import { deviceSizesQueries } from '../../config/deviceSizes';

export const FooterSection = styled(Section)`
  background: #004587;

  a {
    color: #ffffff;
  }
`;

export const FooterComponent = styled.footer`
  background: #004587;
`;

export const FooterWrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column-reverse;
  padding: 16px;
  gap: 16px;
  width: 100%;

  @media ${deviceSizesQueries.tablet} {
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const FooterSiteDescription = styled(Menu)`
  align-items: center;
  display: flex;
  flex-direction: column-reverse;

  @media ${deviceSizesQueries.mobileL} {
    flex-direction: row-reverse;
  }

  @media ${deviceSizesQueries.tablet} {
    align-items: flex-start;
    flex-direction: column;
    justify-content: space-between;
  }
`;

export const FooterLogo = styled.img`
  width: 40px;
`;

export const SiteDescription = styled.p`
  color: #ffffff;
  font-size: 12px;

  @media ${deviceSizesQueries.tablet} {
    max-width: 240px;
  }
`;

export const FooterSocial = styled(Menu)``;
