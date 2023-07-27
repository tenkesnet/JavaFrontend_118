import Image from "next/image";
import { useContext } from "react";

import ShoppingIcon from "../../../public/shopping-bag.svg";

import { CartContext, CartContextType } from "../../context/cart.context";

import "./cart-icon.css";

const CartIcon = () => {
    const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);

    const toggleIsCartOpen = () => setIsCartOpen?.(!isCartOpen);

    return (
        <div
            className="cart-icon-container"
            onClick={toggleIsCartOpen}
        >
            <Image
                src={ShoppingIcon}
                className="shopping-icon"
                alt="icon"
            />
            <span className="item-count">{cartCount}</span>
        </div>
    );
};

export default CartIcon;
