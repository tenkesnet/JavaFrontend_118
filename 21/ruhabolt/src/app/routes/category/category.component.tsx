import { useContext, useState, useEffect, Fragment } from 'react';
import { useParams } from 'react-router-dom';

import ProductCard from '../../components/product-card/product-card.component';

import { CategoriesContext } from '../../context/categories.context';

import './category.styles.scss';
import Product from 'src/app/model/Product';

const Category = () => {
  const { category } = useParams();
  const { categories } = useContext(CategoriesContext);
  const [products, setProducts] = useState<Product[] | undefined>(
    categories?.filter((cat) => cat.title === category)[0]?.products
  );

  useEffect(() => {
    setProducts(
      categories?.filter((cat) => cat.title === category)[0]?.products
    );
  }, [category, categories]);

  return (
    <Fragment>
      <h2 className="category-title">{category?.toUpperCase()}</h2>
      <div className="category-container">
        {products &&
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </Fragment>
  );
};

export default Category;
