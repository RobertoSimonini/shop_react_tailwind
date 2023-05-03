import { CartState } from "./useCart";
// Selector CartList
export const cartList = (state: CartState) => state.list;

// Selector Total
export const totalCost = (state: CartState) =>
  state.list.reduce((acc, item) => acc + item.qty * item.product.cost, 0);

// Selector Total items
export const totalItems = (state: CartState) =>
  state.list.reduce((acc, item) => acc + item.qty, 0);

export const increase = (state: CartState) => state.increaseQty;

export const decrease = (state: CartState) => state.decreaseQty;

export const empty = (state: CartState) => !state.list.length;
