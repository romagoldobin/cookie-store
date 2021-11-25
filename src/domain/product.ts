import { Product } from '../interface/TProduct';
import { PriceCents } from '../sharedTypes';

export const totalPrice = (products: Product[]): PriceCents => {
  return products.reduce(( total, { price } ) => total + price, 0);
};
