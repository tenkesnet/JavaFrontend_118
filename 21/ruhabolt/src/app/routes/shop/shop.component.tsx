import { Fragment, useContext } from 'react';

import ProductCard from '../../components/product-card/product-card.component';

import { CategoriesContext } from '../../context/categories.context';

import './shop.styles.scss';
import CategoryPreview from 'src/app/components/category-preview/category-preview.component';

const Shop = () => {
  const { categories } = useContext(CategoriesContext);

  return (
    <Fragment>
      {categories?.map((category) => {
        return (
          <Fragment key={category.title}>
            <div className="products-container">
              <CategoryPreview
                key={category.title}
                products={category.items}
                title={category.title}
              />
            </div>
          </Fragment>
        );
      })}
    </Fragment>
  );
};

export default Shop;
