import { createContext, useEffect, useState } from 'react';

import SHOP_DATA from '../shop-data';
import Product from '../model/Product';
import { getCategoriesAndDocuments } from '../utils/firebase.utils';
import CategoryEntity from '../model/CategoryEntity';

interface Props {
  children: React.ReactNode;
}
export type CategoryContextType = {
  categories: CategoryEntity[];
};

export const CategoriesContext = createContext<Partial<CategoryContextType>>(
  {}
);

export const CategoriesProvider = ({ children }: Props) => {
  //const [products, setProducts] = useState(SHOP_DATA as Category[]);
  const [categories, setCategories] = useState<CategoryEntity[]>(
    [] as CategoryEntity[]
  );
  // useEffect(() => {
  //   addCollectionAndDocuments('categories', SHOP_DATA);
  // }, []);

  useEffect(() => {
    const fetchProducts = async () => {
      const data = await fetch('http://localhost:3000/shop/categories', {
        method: 'GET',
      });
      const jsonData = (await data.json()) as CategoryEntity[];

      setCategories(jsonData);
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
