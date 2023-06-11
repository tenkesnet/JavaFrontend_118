import { Fragment, useContext } from 'react';

import ProductCard from '../../components/product-card/product-card.component';

import { ProductsContext } from '../../context/products.context';

import './shop.styles.scss';

const Shop = () => {
  const { products } = useContext(ProductsContext);

  return (
    <Fragment>
      {products?.map((category) => {
        return (
          <Fragment key={category.title}>
            <h2>{category.title}</h2>
            <div className="products-container">
              {category.items.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </Fragment>
        );
      })}
    </Fragment>
  );
};

export default Shop;
