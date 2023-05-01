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

export const CartState = create<CartState>(() => ({
    list: [],

    addToCart: (product: Product) => {
        
    },

    removeFromCart: (productId: string) => {
        
    },

    increaseQty: (proructId: string) => {
        
    },

    decreaseQty: (productId: string) => {
        
    },

    clearCart: () => {
        
    },
})) 