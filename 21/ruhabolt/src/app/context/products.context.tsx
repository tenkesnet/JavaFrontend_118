import { createContext, useEffect, useState } from 'react';

import SHOP_DATA from '../shop-data';
import Product from '../model/Product';
import Category from '../model/Category';
import {
  addCollectionAndDocuments,
  getCategoriesAndDocuments,
} from '../utils/firebase.utils';

interface Props {
  children: React.ReactNode;
}
export type ProductContextType = {
  products: Category[];
};

export const ProductsContext = createContext<Partial<ProductContextType>>({});

export const ProductsProvider = ({ children }: Props) => {
  //const [products, setProducts] = useState(SHOP_DATA as Category[]);
  const [products, setProducts] = useState<Category[]>([] as Category[]);
  // useEffect(() => {
  //   addCollectionAndDocuments('categories', SHOP_DATA);
  // }, []);

  useEffect(() => {
    const fetchProducts = async () => {
      const categoryMap = await getCategoriesAndDocuments();
      setProducts(categoryMap);
    };
    fetchProducts();
  }, []);

  const value = { products };
  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};
