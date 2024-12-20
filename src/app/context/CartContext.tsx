"use client";
import { createContext, useState, useEffect, ReactNode } from "react";
export interface AddToCartItemPropsTypes {
  id: string;
  image: string;
  title: string;
  price: string;
  quantity: number;
  offer?: string;
  discount?: string;
  rating?: string;
  ratingNum?: number | string;
  isStock?: boolean;
  des?: string;
  product?: any;
}
interface CartContextTypes {
  cartItems: AddToCartItemPropsTypes[];
  addItemToCart: (item: AddToCartItemPropsTypes) => void;
  deleteItemFromCart: (id: string) => void;
  clearCart: () => void;
}
interface CartProviderProps {
  children: ReactNode;
}
const CartContext = createContext<CartContextTypes | undefined>(undefined);
export const CartProvider = ({ children }: CartProviderProps) => {
  const [cartItems, setCartItems] = useState<AddToCartItemPropsTypes[]>([]);

  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    setCartItems(storedCart ? JSON.parse(storedCart) : []);
  }, []);
  const addItemToCart = (item: AddToCartItemPropsTypes) => {
    const existingItem = cartItems.find((cartItem) => cartItem.id === item.id);

    let updatedCart;
    if (existingItem) {
      updatedCart = cartItems.map((cartItem) =>
        cartItem.id === item.id
          ? { ...cartItem, quantity: cartItem.quantity + item.quantity }
          : cartItem
      );
    } else {
      updatedCart = [...cartItems, item];
    }

    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };
  const deleteItemFromCart = (id: string) => {
    const updatedCart = cartItems.filter((cartItem) => cartItem.id !== id);
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };
  const clearCart = () => {
    setCartItems([]);
    localStorage.removeItem("cart");
  };

  return (
    <CartContext.Provider
      value={{ cartItems, addItemToCart, deleteItemFromCart, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
};
export default CartContext;
