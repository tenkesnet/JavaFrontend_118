import { Outlet, Link } from 'react-router-dom';

import { ReactComponent as CrwnLogo } from '../../../assets/crown.svg';

import './navigation.styles.scss';
import App from 'src/app/app';
import { useContext } from 'react';
import { UserContext, UserContextType } from 'src/app/context/user.context';
import { signOutUser } from 'src/app/utils/firebase.utils';

const Navigation = () => {
  const { currentUser, setCurrentUser } = useContext(
    UserContext
  ) as UserContextType;
  const signOutHandler = async () => {
    await signOutUser();
    setCurrentUser(null);
  };
  return (
    <>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <CrwnLogo className="logo" />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/about">
            Rólunk
          </Link>

          {currentUser ? (
            <span className="nav-link" onClick={signOutHandler}>
              {' '}
              KIJELENTKEZÉS{' '}
            </span>
          ) : (
            <Link className="nav-link" to="/auth">
              BEJELENTKEZÉS
            </Link>
          )}
        </div>
      </div>

      <Outlet />
    </>
  );
};

export default Navigation;
