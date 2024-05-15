import { NavLink } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import css from './SharedLayout.module.css';

export const SharedLayout = () => {
  return (
    <>
      <header className={css.header}>
        {/* <header className={css.header}> */}
        <nav className={css.navWrap}>
          <NavLink className={css.navLink} to="/">
            Home
          </NavLink>
          <NavLink className={css.navLink} to="/movies">
            Movies
          </NavLink>
        </nav>
      </header>
      <Outlet />
    </>
  );
};
