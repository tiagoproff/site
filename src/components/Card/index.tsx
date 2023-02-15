import { Link } from 'react-router-dom';

import Button from 'lib/Button';

import {
  Buttons,
  Container,
  Content,
  Description,
  Image,
  Price,
  PriceLagged,
  Prices,
  Title
} from './styles';
import Product from 'interfaces/Product';

import { formatCurrence, priceDiscounted } from 'utils';

interface CardProps
  extends Omit<React.BaseHTMLAttributes<any>, 'id' | 'title'>,
    Product {}

export default function Card({
  discountPercentage,
  description,
  id,
  price,
  thumbnail,
  title,
  ...props
}: CardProps) {
  return (
    <Container {...props}>
      <Image src={thumbnail} alt="" srcSet={thumbnail} />
      <Content>
        <Title>{title}</Title>
        <Description>{description}</Description>
        <Prices>
          <PriceLagged>{formatCurrence(price)}</PriceLagged>
          <Price>{priceDiscounted(price, discountPercentage)}</Price>
        </Prices>
        <Buttons>
          <Link to={`/product/${id}`}>
            <Button>Comprar</Button>
          </Link>
        </Buttons>
      </Content>
    </Container>
  );
}
