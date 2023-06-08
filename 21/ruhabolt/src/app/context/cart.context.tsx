import { createContext, useState } from 'react';
import Product from '../model/Product';
import { CartItem } from '../model/CartItem';

export const addCartItem = (cartItems: CartItem[], productToAdd: Product) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  );

  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

export type CartContextType = {
  isCartOpen: boolean | null;
  setIsCartOpen: (isCartOpen: boolean) => void;
  cartItems: CartItem[];
  addItemToCart: (item: Product) => void;
};
interface Props {
  children: React.ReactNode;
}
export const CartContext = createContext<CartContextType | null>(null);

export const CartProvider = ({ children }: Props) => {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const [cartItems, setCartItems] = useState<CartItem[]>(new Array<CartItem>());

  const addItemToCart = (product: Product) =>
    setCartItems(addCartItem(cartItems, product));
  const value = { isCartOpen, setIsCartOpen, cartItems, addItemToCart };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
