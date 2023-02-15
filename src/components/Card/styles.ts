import { deviceSizesQueries } from 'config/deviceSizes';
import styled from 'styled-components';

export const Container = styled.div`
  background: #ffffff;
  border-radius: 8px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.06);
  display: flex;
  flex-direction: row-reverse;
  max-width: 344px;
  overflow: hidden;

  @media ${deviceSizesQueries.mobileL} {
    flex-direction: column;
    width: 220px;
  }
`;

export const Image = styled.img`
  background-color: #f3f3f3;
  border-left: 1px solid #f3f3f3;
  object-fit: cover;
  height: 200px;
  width: 50%;

  @media ${deviceSizesQueries.mobileL} {
    border-bottom: 1px solid #f3f3f3;
    border-left: none;
    width: 100%;
  }
`;

export const Content = styled.div`
  display: flex;
  flex: 1;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 16px;
`;

export const Title = styled.p`
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  margin-bottom: 8px;
  margin-top: 0;
  min-width: 100%;
  line-height: 100%;
  text-transform: capitalize;
`;

export const Description = styled.p`
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  height: 3em;
  margin-bottom: 8px;
  margin-top: 0;
  min-width: 100%;
  line-height: 100%;
  text-transform: capitalize;
  text-overflow: ellipsis;
  overflow: hidden;
  position: relative;
`;

export const Prices = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row-reverse;
  gap: 8px;
  justify-content: flex-end;

  @media ${deviceSizesQueries.mobileL} {
    flex-direction: column;
  }
`;

export const Price = styled.span`
  font-weight: 600;

  &::before {
    content: 'R$ ';
  }
`;

export const PriceLagged = styled(Price)`
  color: red;
  font-size: 14px;
  font-weight: 400;
  text-decoration-line: line-through;
`;

export const Buttons = styled.div`
  display: flex;
  gap: 8px;
  margin-top: auto;
`;
