import { create } from "zustand";

// Type Cart Status 
export interface CartStatusOverlay {
    open: Boolean,
    toggle: () => void,
    openOverlay: () => void,
    closeOverlay: () => void,
}

// Funzione per modificare lo stato del cart 
export const useCartPanel =  create<CartStatusOverlay>((set, get) => ({
    open: false,
    toggle: () => set ({open: !get().open}),
    openOverlay: () => set ({open: true}),
    closeOverlay: () => set ({open: false}),
}))