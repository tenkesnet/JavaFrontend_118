import "./product-card.styles.scss";

import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";
import Product from "../../model/Product";
import { CartContext } from "../../context/cart.context";
import { useContext } from "react";

interface Props {
    product: Product;
}
const ProductCard = ({ product }: Props) => {
    const { name, price, imageUrl } = product;
    const { addItemToCart } = useContext(CartContext);

    const addProductToCart = () => addItemToCart?.(product);
    return (
        <div className="product-card-container">
            <img
                src={imageUrl}
                alt={`${name}`}
            />
            <div className="footer">
                <span className="name">{name}</span>
                <span className="price">{price}</span>
            </div>
            <Button
                buttonType={BUTTON_TYPE_CLASSES.inverted}
                onClick={addProductToCart}
            >
                Add to card
            </Button>
        </div>
    );
};

export default ProductCard;
