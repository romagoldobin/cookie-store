import { Order } from '../domain/order';
import { PriceCents } from '../domain/product';

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
