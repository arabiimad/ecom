import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CartItem } from "../types";

let initialState: {
  items: CartItem[];
  totalAmount: number;
  totalNumItems: number;
} = {
  items: [],
  totalAmount: 0,
  totalNumItems: 0,
};

const savedCart = localStorage.getItem("cart");
if (savedCart) {
  initialState = JSON.parse(savedCart);
}

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action: PayloadAction<CartItem>) {
      state.totalAmount += action.payload.price;
      state.totalNumItems += action.payload.amount;
      const indexToUpdate = state.items.findIndex(
        (item) => item.id === action.payload.id
      );
      if (indexToUpdate > -1) {
        let itemToUpdate = state.items[indexToUpdate];
        itemToUpdate = {
          ...itemToUpdate,
          amount: itemToUpdate.amount + action.payload.amount,
        };
        state.items[indexToUpdate] = itemToUpdate;
      } else {
        state.items.push(action.payload);
      }
      localStorage.setItem("cart", JSON.stringify(state)); // Sauvegarder l'état
    },
    removeItem(state, action: PayloadAction<CartItem>) {
      state.totalAmount -= action.payload.price;
      state.totalNumItems -= action.payload.amount;
      const indexToUpdate = state.items.findIndex(
        (item) => item.id === action.payload.id
      );
      if (indexToUpdate > -1) {
        let itemToUpdate = state.items[indexToUpdate];
        if (itemToUpdate.amount === 1) {
          state.items = state.items.filter(
            (item) => item.id !== action.payload.id
          );
        } else {
          itemToUpdate = {
            ...itemToUpdate,
            amount: itemToUpdate.amount - action.payload.amount,
          };
          state.items[indexToUpdate] = itemToUpdate;
        }
      }
      localStorage.setItem("cart", JSON.stringify(state)); // Sauvegarder l'état
    },
    deleteFromCart(state, action: PayloadAction<CartItem>) {
      state.totalAmount -= action.payload.price * action.payload.amount;
      state.totalNumItems -= action.payload.amount;
      state.items = state.items.filter((item) => item.id !== action.payload.id);
      localStorage.setItem("cart", JSON.stringify(state)); // Sauvegarder l'état
    },
    clearCart(state) {
      state.totalAmount = 0;
      state.totalNumItems = 0;
      state.items = [];
      localStorage.removeItem("cart"); // Supprimer l'état du localStorage
    },
  },
});


export default cartSlice.reducer;
export const cartActions = cartSlice.actions;