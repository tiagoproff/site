import styled from 'styled-components';

import { deviceSizes, deviceSizesQueries } from '../../config/deviceSizes';

export const SectionComponent = styled.section`
  width: 100%;
`;

export const SectionWrapper = styled.div`
  margin: 0 auto;
  max-width: ${deviceSizes.laptop}px;
  padding: 40px 24px;

  @media ${deviceSizesQueries.laptop} {
    padding: 40px 0px;
  }
`;
