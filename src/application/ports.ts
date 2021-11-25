import { Order } from '../interface/TOrder';
import { PriceCents } from '../sharedTypes';


export interface PaymentService {
  tryPay(amout: PriceCents): Promise<boolean>;
}

export interface NotificationService {
  notify(message: string): void;
}

export interface OrdersStorageService {
  orders: Order[];
  updateOrders(orders: Order[]): void;
}
