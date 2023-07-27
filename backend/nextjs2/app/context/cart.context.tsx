"use client";

import { createContext, useEffect, useState } from "react";
import Product from "../model/Product";
import { CartItemEntity } from "../model/CartItemEntity";

export const addCartItem = (
    cartItems: CartItemEntity[],
    productToAdd: Product
) => {
    const existingCartItem = cartItems.find(
        (cartItem) => cartItem.id === productToAdd.id
    );

    if (existingCartItem) {
        return cartItems.map((cartItem) =>
            cartItem.id === productToAdd.id
                ? { ...cartItem, quantity: cartItem.quantity + 1 }
                : cartItem
        );
    }

    return [...cartItems, { ...productToAdd, quantity: 1 }];
};

const removeCartItem = (
    cartItems: CartItemEntity[],
    cartItemToRemove: CartItemEntity
) => {
    // find the cart item to remove
    const existingCartItem = cartItems.find(
        (cartItem) => cartItem.id === cartItemToRemove.id
    );

    // check if quantity is equal to 1, if it is remove that item from the cart
    if (existingCartItem?.quantity === 1) {
        return cartItems.filter(
            (cartItem) => cartItem.id !== cartItemToRemove.id
        );
    }

    // return back cartitems with matching cart item with reduced quantity
    return cartItems.map((cartItem) =>
        cartItem.id === cartItemToRemove.id
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem
    );
};

const clearCartItem = (
    cartItems: CartItemEntity[],
    cartItemToClear: CartItemEntity
) => cartItems.filter((cartItem) => cartItem.id !== cartItemToClear.id);

export type CartContextType = {
    isCartOpen: boolean;
    setIsCartOpen: (isCartOpen: boolean) => void;
    cartItems: CartItemEntity[];
    addItemToCart: (item: Product) => void;
    removeItemFromCart: (cartItemToRemove: CartItemEntity) => void;
    clearItemFromCart: (cartItemToClear: CartItemEntity) => void;
    cartCount: number;
    cartTotal: number;
};
interface Props {
    children: React.ReactNode;
}
export const CartContext = createContext<Partial<CartContextType>>({});

export const CartProvider = ({ children }: Props) => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState<CartItemEntity[]>(
        new Array<CartItemEntity>()
    );
    const [cartCount, setCartItemCount] = useState(0);
    const [cartTotal, setCartTotal] = useState(0);

    useEffect(() => {
        const count = cartItems.reduce(
            (total, cartItem) => total + cartItem.quantity,
            0
        );
        setCartItemCount(count);
    }, [cartItems]);

    useEffect(() => {
        const newCartTotal = cartItems.reduce(
            (total, cartItem) => total + cartItem.quantity * cartItem.price,
            0
        );
        setCartTotal(newCartTotal);
    }, [cartItems]);

    const removeItemFromCart = (cartItemToRemove: CartItemEntity) => {
        setCartItems(removeCartItem(cartItems, cartItemToRemove));
    };

    const clearItemFromCart = (cartItemToClear: CartItemEntity) => {
        setCartItems(clearCartItem(cartItems, cartItemToClear));
    };

    const addItemToCart = (product: Product) =>
        setCartItems(addCartItem(cartItems, product));
    const value = {
        isCartOpen,
        setIsCartOpen,
        cartItems,
        addItemToCart,
        removeItemFromCart,
        clearItemFromCart,
        cartCount,
        cartTotal,
    };
    return (
        <CartContext.Provider value={value}>{children}</CartContext.Provider>
    );
};
