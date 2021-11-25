import { Cart } from '../interface/TCart';
import { Product } from '../interface/TProduct';

export const addProduct = (cart: Cart, product: Product): Cart => {
  return { ...cart, products: [...cart.products, product] };
};

export const contains = (cart: Cart, product: Product): boolean => {
  return cart.products.some(({ id }) => id === product.id);
};
