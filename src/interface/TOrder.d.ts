import { UniqueId, DateTimeString, OrderStatus, PriceCents } from '../sharedTypes';
import { Cart } from './TCart';

export type Order = {
  user: UniqueId;
  cart: Cart;
  created: DateTimeString;
  status: OrderStatus;
  total: PriceCents;
}
