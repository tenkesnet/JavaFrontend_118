import { createContext, useState } from 'react';

export type CartContextType = {
  isCartOpen: boolean | null;
  setIsCartOpen: (isCartOpen: boolean) => void;
};
interface Props {
  children: React.ReactNode;
}
export const CartContext = createContext<CartContextType | null>(null);

export const CartProvider = ({ children }: Props) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const value = { isCartOpen, setIsCartOpen };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
