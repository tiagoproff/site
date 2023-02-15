import { useEffect, useState } from 'react';

import Card from 'components/Card';

import productService from 'services/productService';

import Product from 'interfaces/Product';

import { deviceSizes } from 'config/deviceSizes';
import { getWindowDimensions } from 'utils';

import {
  PopularContent,
  PopularWrapper,
  PopularSection,
  PopularTitle,
  MoreButton
} from './styles';

export default function Popular() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const { width } = getWindowDimensions();
    const elementsByDeviceSize = width > deviceSizes.laptop ? 8 : 6;

    productService
      .GetPopular(elementsByDeviceSize)
      .then(({ data }) => setProducts(data.products));
  }, []);

  return (
    <PopularSection>
      <PopularWrapper>
        <PopularTitle>Populares</PopularTitle>
        <MoreButton>Veja mais</MoreButton>
        <PopularContent>
          {products.map((product) => (
            <Card {...product} />
          ))}
        </PopularContent>
      </PopularWrapper>
    </PopularSection>
  );
}
