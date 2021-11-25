import { Cart } from '../interface/TCart';
import { Order } from '../interface/TOrder';
import { User } from '../interface/TUser';
import { totalPrice } from './product';

export const createOrder = (user: User, cart: Cart): Order => {
  return {
    cart,
    user: user.id,
    created: new Date().toISOString(),
    status: 'new',
    total: totalPrice(cart.products)
  };
};
