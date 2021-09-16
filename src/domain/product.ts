import { Ingredient, UniqueId } from './user';

export type ProductTitle = string;
export type PriceCents = number;

export type Product = {
  id: UniqueId;
  title: ProductTitle;
  price: PriceCents;
  toppings: Ingredient[];
}

export const totalPrice = (products: Product[]): PriceCents => {
  return products.reduce(( total, { price } ) => total + price, 0);
};
