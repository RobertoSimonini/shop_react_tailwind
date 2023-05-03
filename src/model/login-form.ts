import { OrderStatus } from "./order-form";

export interface FormDataLogin {
  name: String;
  password: String;
}
export interface LoginForm {
  formData: FormDataLogin;
  status: OrderStatus;
}
