import { Cart } from './cart';
import { PriceCents } from './product';
import { UniqueId } from './user';

export type OrderStatus = 'new' | 'delivery' | 'complete';
export type DateTimeString = string;

export type Order = {
  user: UniqueId;
  cart: Cart;
  created: DateTimeString;
  status: OrderStatus;
  total: PriceCents;
}