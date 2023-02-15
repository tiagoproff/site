import { useEffect, useState } from 'react';

import Card from 'components/Card';
import Section from 'layout/Section';

import productService from 'services/productService';

import { DiscountComponent, DiscountTitle } from './styles';
import Product from 'interfaces/Product';

export default function Discount() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    productService
      .GetDiscounts()
      .then(({ data }) => setProducts(data.products));
  }, []);

  return (
    <Section style={{ margin: '40px 0' }}>
      <DiscountTitle>Com mais de 70% de desconto</DiscountTitle>
      <DiscountComponent>
        {products.map((product) => (
          <Card {...product} />
        ))}
      </DiscountComponent>
    </Section>
  );
}
