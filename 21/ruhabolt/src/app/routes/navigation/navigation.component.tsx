import { Outlet, Link } from 'react-router-dom';

import { ReactComponent as CrwnLogo } from '../../../assets/crown.svg';

import './navigation.styles.scss';
import { useContext } from 'react';
import { UserContext } from 'src/app/context/user.context';
import { signOutUser } from 'src/app/utils/firebase.utils';
import CartIcon from 'src/app/components/cart-icon/cart-icon.component';
import CartDropdown from 'src/app/components/cart-dropdown/cart-dropdown.component';
import { CartContext } from 'src/app/context/cart.context';

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);

  return (
    <>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <CrwnLogo className="logo" />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>

          {currentUser ? (
            <span className="nav-link" onClick={signOutUser}>
              {' '}
              KIJELENTKEZÉS{' '}
            </span>
          ) : (
            <Link className="nav-link" to="/auth">
              BEJELENTKEZÉS
            </Link>
          )}
          <CartIcon />
        </div>
        {isCartOpen && <CartDropdown />}
      </div>

      <Outlet />
    </>
  );
};

export default Navigation;
