import { NavLink } from 'react-router-dom';
import css from './navigation.module.css';

export const Navigation = () => {
  return (
    <div className={css.navLinkBox}>
      <NavLink className={css.navLinkSt} to="/">Home</NavLink>
    </div>
  );
};
