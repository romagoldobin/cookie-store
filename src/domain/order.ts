import { Cart } from './cart';
import { PriceCents, totalPrice } from './product';
import { UniqueId, User } from './user';

export type OrderStatus = 'new' | 'delivery' | 'complete';
export type DateTimeString = string;

export type Order = {
  user: UniqueId;
  cart: Cart;
  created: DateTimeString;
  status: OrderStatus;
  total: PriceCents;
}

export const createOrder = (user: User, cart: Cart): Order => {
  return {
    cart,
    user: user.id,
    created: new Date().toISOString(),
    status: 'new',
    total: totalPrice(cart.products)
  };
};
