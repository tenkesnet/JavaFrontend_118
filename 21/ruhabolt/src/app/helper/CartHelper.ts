export class CartHelper {
    addCartItem(
        cartItems: CartItemEntity[],
        productToAdd: Product
    ) {
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
    }

    addCartItem(
        cartItems: CartItemEntity[],
        productToAdd: CartItemEntity
    ) {
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
}