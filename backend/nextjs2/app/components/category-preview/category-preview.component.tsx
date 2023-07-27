import Product from "../../model/Product";
import ProductCard from "../product-card/product-card.component";

import "./category-preview.styles.scss";
import Link from "next/link";

interface Props {
    title: string;
    products: Product[];
}

const CategoryPreview = ({ title, products }: Props) => {
    console.log(products);
    return (
        <div className="category-preview-container">
            <h2>
                <Link
                    className="title"
                    href={title}
                >
                    {title.toUpperCase()}
                </Link>
            </h2>
            <div className="preview">
                {products
                    .filter((_, idx) => idx < 4)
                    .map((product) => (
                        <ProductCard
                            key={product.id}
                            product={product}
                        />
                    ))}
            </div>
        </div>
    );
};

export default CategoryPreview;
