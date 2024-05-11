import { NavLink } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
// import css from './SharedLayout/SharedLayout.module.css';

export const SharedLayout = () => {
  return (
    <>
      <header>
        {/* <header className={css.header}> */}
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/movies">Movies</NavLink>
        </nav>
      </header>
      <Outlet />
    </>
  );
};
