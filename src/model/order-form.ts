import { CartItem } from "./cart-item";

export interface User {
  name: string;
  email: string;
}

export type OrderStatus = "pending" | "done";

export interface OrderForm {
  user: User;
  order: CartItem[];
  status: OrderStatus;
  total: number;
}
