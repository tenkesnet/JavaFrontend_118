import { createContext, useEffect, useState } from 'react';

import SHOP_DATA from '../shop-data';
import Product from '../model/Product';
import Category from '../model/Category';
import { addCollectionAndDocuments } from '../utils/firebase.utils';

interface Props {
  children: React.ReactNode;
}
export type ProductContextType = {
  products: Category[];
};

export const ProductsContext = createContext<Partial<ProductContextType>>({});

export const ProductsProvider = ({ children }: Props) => {
  const [products, setProducts] = useState(SHOP_DATA as Category[]);

  useEffect(() => {
    addCollectionAndDocuments('collections', SHOP_DATA);
  }, []);

  const value = { products };
  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};
