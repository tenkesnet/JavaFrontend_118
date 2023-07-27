/*export default function ShopItem({ params }: { params: { item: number } }) {
    return (
        <div>
            <h2>Item: {params.item}</h2>
        </div>
    );
}
*/
"use client";
import { useContext, useState, useEffect, Fragment } from "react";

import ProductCard from "../../../components/product-card/product-card.component";

import { CategoriesContext } from "../../../context/categories.context";

import "./category.styles.scss";
import Product from "../../../model/Product";

const Category = ({ params }: { params: { category: string } }) => {
    //const { category } = useParams();
    const { categories } = useContext(CategoriesContext);
    const category = params.category;
    const [products, setProducts] = useState<Product[] | undefined>(
        categories?.filter((cat) => cat.title === category)[0]?.items
    );

    useEffect(() => {
        setProducts(
            categories?.filter((cat) => cat.title === category)[0]?.items
        );
    }, [category, categories]);

    return (
        <Fragment>
            <h2 className="category-title">{category?.toUpperCase()}</h2>
            <div className="category-container">
                {products &&
                    products.map((product) => (
                        <ProductCard
                            key={product.id}
                            product={product}
                        />
                    ))}
            </div>
        </Fragment>
    );
};

export default Category;
