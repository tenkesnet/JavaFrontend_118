import { CartItemEntity } from "../../model/CartItemEntity";
import "./cart-item.css";

interface Props {
    cartItem: CartItemEntity;
}

const CartItem = ({ cartItem }: Props) => {
    const { imageUrl, price, name, quantity } = cartItem;

    return (
        <div className="cart-item-container">
            <img
                src={imageUrl}
                alt={`${name}`}
            />
            <div className="item-details">
                <span className="name">{name}</span>
                <span className="price">
                    {quantity} x ${price}
                </span>
            </div>
        </div>
    );
};

export default CartItem;
