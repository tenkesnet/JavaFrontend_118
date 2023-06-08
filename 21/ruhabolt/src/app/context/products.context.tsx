import { createContext, useState } from 'react';

import PRODUCTS from '../shop-data.json';
import Product from '../model/Product';

interface Props {
  children: React.ReactNode;
}
export type ProductContextType = {
  products: Product[];
};

export const ProductsContext = createContext<ProductContextType | null>(null);

export const ProductsProvider = ({ children }: Props) => {
  const [products, setProducts] = useState(PRODUCTS);
  const value = { products };
  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};
