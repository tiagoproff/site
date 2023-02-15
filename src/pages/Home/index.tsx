import BestSellers from 'components/BestSellers';
import Categories from 'components/Categories';
import Discount from 'components/Discount';
import Popular from 'components/Popular';

import { Container } from './styles';

export default function Home() {
  return (
    <Container>
      <Categories />
      <BestSellers />
      <Popular />
      <Discount />
    </Container>
  );
}
