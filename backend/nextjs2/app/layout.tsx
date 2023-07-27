"use client";

import { UserProvider } from "./context/user.context";
import { CategoriesProvider } from "./context/categories.context";
import { CartProvider } from "./context/cart.context";
import Navigation from "./components/navigation/navigation-copmponent";

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html>
            <body>
                <UserProvider>
                    <CategoriesProvider>
                        <CartProvider>
                            <Navigation />
                            {children}
                        </CartProvider>
                    </CategoriesProvider>
                </UserProvider>
            </body>
        </html>
    );
}
