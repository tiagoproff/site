export function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height
  };
}

export function formatCurrence(value: number): string {
  return value.toFixed(2).replace('.', ',');
}

export function priceDiscount(price: number, discount: number) {
  return (price * discount) / 100;
}

export function priceDiscountFormatted(
  price: number,
  discountPercentage: number
) {
  const discountValue = priceDiscount(price, discountPercentage);

  return formatCurrence(discountValue);
}

export function priceDiscounted(
  price: number,
  discount: number,
  formatted = true
) {
  const priceWithDiscount = price - priceDiscount(price, discount);

  return formatted ? formatCurrence(priceWithDiscount) : priceWithDiscount;
}
