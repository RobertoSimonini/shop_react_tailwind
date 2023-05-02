import { CartItem } from "../../model/cart-item";
import { create } from "zustand";
import { Product } from "../../model/product";

export interface CartState {
  list: CartItem[];
  addToCart: (product: Product) => void;
  removeFromCart: (productId: string) => void;
  increaseQty: (proructId: string) => void;
  decreaseQty: (productId: string) => void;
  clearCart: () => void;
}

export const useCart = create<CartState>((set, get) => ({
  list: [],

  addToCart: (product: Product) => {
    // verifico se l'item è già presente nel carrello
    const found = get().list.find((item) => item.product.id === product.id);

    if (found) {
      found.qty++;
      set((state) => ({
        list: state.list.map((item) => {
          return item.product.id === found.product.id ? found : item;
        }),
      }));
    } else {
      const item: CartItem = { product, qty: 1 };
      // Recupero la lista ogni volta e aggiungo il nuovo item
      set((state) => ({ list: [...state.list, item] }));
    }
  },

  removeFromCart: (productId: string) => {},

  increaseQty: (productId: string) => {
    const found = get().list.find((item) => item.product.id === productId);

    if (found) {
      found.qty++;
      set((state) => ({
        list: state.list.map((item) => {
          return item.product.id === found.product.id ? found : item;
        }),
      }));
    }
  },

  decreaseQty: (productId: string) => {
    const found = get().list.find((item) => item.product.id === productId);

    if (found && found.qty > 0) {
      found.qty--;
      set((state) => ({
        list: state.list.map((item) => {
          return item.product.id === found.product.id ? found : item;
        }),
      }));
    }
  },

  clearCart: () => {},
}));
