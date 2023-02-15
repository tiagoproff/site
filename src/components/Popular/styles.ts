import styled from 'styled-components';

import Button from 'lib/Button';
import Section from 'layout/Section';

import { deviceSizesQueries } from 'config/deviceSizes';

export const PopularSection = styled(Section)`
  background-color: #ffffff;
`;

export const PopularWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const PopularContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 32px;
  justify-content: center;
  width: 100%;

  @media ${deviceSizesQueries.mobileL} {
    justify-content: space-between;
  }
`;

export const PopularHeader = styled.div`
  align-items: baseline;
  display: flex;
  justify-content: space-between;
`;

export const PopularTitle = styled.h2`
  display: inline-block;
  font-weight: 600;
  font-size: 24px;
  text-align: center;
  width: 100%;

  @media ${deviceSizesQueries.mobileL} {
    justify-content: space-between;
  }
`;

export const MoreButton = styled(Button)`
  font-weight: 500;
  margin-top: 64px;
  margin-left: auto;
  margin-right: auto;
  order: 3;
  padding: 16px 32px;
  width: 80%;
`;
