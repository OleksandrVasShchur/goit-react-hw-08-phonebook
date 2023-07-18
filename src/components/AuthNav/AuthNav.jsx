import { NavLink } from 'react-router-dom';
import css from '../Navigation/navigation.module.css'
export const AuthNav = () => {
  return (
    <div className={css.navLinkBox}>
      <NavLink className={css.navLinkStAuthNav} to="/register">Register</NavLink>
      <NavLink className={css.navLinkStAuthNav} to="/login">Log In</NavLink>
    </div>
  );
};
