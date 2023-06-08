import { Outlet, Link } from 'react-router-dom';

import { ReactComponent as CrwnLogo } from '../../../assets/crown.svg';

import './navigation.styles.scss';
import App from 'src/app/app';
import { useContext } from 'react';
import { UserContext, UserContextType } from 'src/app/context/user.context';

const Navigation = () => {
  const { currentUser, setCurrentUser } = useContext(
    UserContext
  ) as UserContextType;
  console.log(currentUser);
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
        </div>
        <div className="nav-links-container">
          <Link className="nav-link" to="/auth">
            Bejelentkezés
          </Link>
        </div>
      </div>
      <div id="Pallas">
        <Outlet />
      </div>
    </>
  );
};

export default Navigation;
