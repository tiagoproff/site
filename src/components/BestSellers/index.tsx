import { useEffect, useState } from 'react';

import Card from 'components/Card';

import productService from 'services/productService';

import Product from 'interfaces/Product';

import {
  BestSellersContent,
  BestSellersSection,
  BestSellersTitle,
  BestSellersWrapper,
  MoreButton,
} from './styles';
import { getWindowDimensions } from 'utils';
import { deviceSizes } from 'config/deviceSizes';

export default function BestSellers() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const { width } = getWindowDimensions();
    const elementsByDeviceSize = width > deviceSizes.laptop ? 4 : 3;

    productService
      .GetBestSellers(elementsByDeviceSize)
      .then(({ data }) => console.log(setProducts(data.products)));
  }, []);

  return (
    <BestSellersSection>
      <BestSellersWrapper>
        <BestSellersTitle>Os mais vendidos</BestSellersTitle>
        <MoreButton>Veja mais</MoreButton>
        <BestSellersContent>
          {products.map((product) => (
            <Card {...product} />
          ))}
        </BestSellersContent>
      </BestSellersWrapper>
    </BestSellersSection>
  );
}
