"use client";
import Image from "next/image";
import CrwnLogo from "../../../public/crown.svg";

import "./navigation.css";
import { Children, useContext } from "react";
import { UserContext, UserContextType } from "../../context/user.context";
import { signOutUser } from "../../utils/firebase.utils";
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import { CartContext } from "../../context/cart.context";
import Link from "next/link";

export default function Navigation() {
    const { currentUser } = useContext(UserContext) as UserContextType;
    const { isCartOpen } = useContext(CartContext);
    //const currentUser = undefined;
    return (
        <>
            <div className="navigation">
                <Link
                    className="logo-container"
                    href="/"
                >
                    <Image
                        src={CrwnLogo}
                        className="logo"
                        alt="logo"
                    />
                </Link>
                <div className="nav-links-container">
                    <Link
                        className="nav-link"
                        href="/shop"
                    >
                        SHOP
                    </Link>

                    {currentUser ? (
                        <span
                            className="nav-link"
                            onClick={signOutUser}
                        >
                            {" "}
                            KIJELENTKEZÉS{" "}
                        </span>
                    ) : (
                        <Link
                            className="nav-link"
                            href="/auth"
                        >
                            BEJELENTKEZÉS
                        </Link>
                    )}
                    <CartIcon />
                </div>
                {isCartOpen && <CartDropdown />}
            </div>
        </>
    );
}
