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
export type CategoryContextType = {
  categories: Category[];
};

export const CategoriesContext = createContext<Partial<CategoryContextType>>(
  {}
);

export const CategoriesProvider = ({ children }: Props) => {
  //const [products, setProducts] = useState(SHOP_DATA as Category[]);
  const [categories, setCategories] = useState<Category[]>([] as Category[]);
  // useEffect(() => {
  //   addCollectionAndDocuments('categories', SHOP_DATA);
  // }, []);

  useEffect(() => {
    const fetchProducts = async () => {
      const categoryMap = await getCategoriesAndDocuments();
      setCategories(categoryMap);
    };
    fetchProducts();
  }, []);

  const value = { categories };
  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  );
};
