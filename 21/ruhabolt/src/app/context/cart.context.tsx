import { createContext, useEffect, useState } from 'react';
import Product from '../model/Product';
import { CartItemEntity } from '../model/CartItemEntity';

export const addCartItem = (
  cartItems: CartItemEntity[],
  productToAdd: Product
) => {
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
  isCartOpen: boolean;
  setIsCartOpen: (isCartOpen: boolean) => void;
  cartItems: CartItemEntity[];
  addItemToCart: (item: Product) => void;
  cartItemCount: number;
};
interface Props {
  children: React.ReactNode;
}
export const CartContext = createContext<Partial<CartContextType>>({});

export const CartProvider = ({ children }: Props) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState<CartItemEntity[]>(
    new Array<CartItemEntity>()
  );
  const [cartItemCount, setCartItemCount] = useState(0);

  useEffect(() => {
    const count = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity,
      0
    );
    setCartItemCount(count);
  }, [cartItems]);

  const addItemToCart = (product: Product) =>
    setCartItems(addCartItem(cartItems, product));
  const value = {
    isCartOpen,
    setIsCartOpen,
    cartItems,
    addItemToCart,
    cartItemCount,
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
