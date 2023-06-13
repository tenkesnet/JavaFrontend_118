import { Outlet, Link } from 'react-router-dom';

import { ReactComponent as CrwnLogo } from '../../../assets/crown.svg';

import {
  NavigationContainer,
  LogoContainer,
  NavLinks,
  NavLink,
} from './navigation.styles';
import { useContext } from 'react';
import { UserContext, UserContextType } from 'src/app/context/user.context';
import { signOutUser } from 'src/app/utils/firebase.utils';
import CartIcon from 'src/app/components/cart-icon/cart-icon.component';
import CartDropdown from 'src/app/components/cart-dropdown/cart-dropdown.component';
import { CartContext } from 'src/app/context/cart.context';

const Navigation = () => {
  const { currentUser } = useContext(UserContext) as UserContextType;
  const { isCartOpen } = useContext(CartContext);

  return (
    <>
      <NavigationContainer>
        <LogoContainer to="/">
          <CrwnLogo />
        </LogoContainer>
        <NavLinks>
          <NavLink to="/shop">SHOP</NavLink>

          {currentUser ? (
            <NavLink as="span" onClick={signOutUser}>
              {' '}
              KIJELENTKEZÉS{' '}
            </NavLink>
          ) : (
            <NavLink to="/auth">BEJELENTKEZÉS</NavLink>
          )}
          <CartIcon />
        </NavLinks>
        {isCartOpen && <CartDropdown />}
      </NavigationContainer>

      <Outlet />
    </>
  );
};

export default Navigation;
