import { Outlet, Link } from 'react-router-dom';

import { ReactComponent as CrwnLogo } from '../../../assets/crown.svg';

import './navigation.styles.scss';
import App from 'src/app/app';

const Navigation = () => {
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
