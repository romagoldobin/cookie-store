import { UniqueId, ProductTitle, PriceCents, Ingredient } from '../sharedTypes';

export type Product = {
  id: UniqueId;
  title: ProductTitle;
  price: PriceCents;
  toppings: Ingredient[];
}
