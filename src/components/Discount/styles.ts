import styled from 'styled-components';

import Section from 'layout/Section';
import { deviceSizesQueries } from 'config/deviceSizes';

export const DiscountSection = styled(Section)`
  background-color: #ffffff;
`;

export const DiscountComponent = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 32px;
  justify-content: center;
  width: 100%;

  @media ${deviceSizesQueries.mobileL} {
    justify-content: space-between;
  }
`;

export const DiscountHeader = styled.div`
  align-items: baseline;
  display: flex;
  justify-content: space-between;
`;

export const DiscountTitle = styled.h2`
  font-weight: 600;
  font-size: 24px;
  margin-top: 0;
  margin-bottom: 24px;
  text-align: center;
`;
