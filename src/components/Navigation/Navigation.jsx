import { NavLink } from 'react-router-dom';
import css from './navigation.module.css';
import { useAuth } from 'hooks';

export const Navigation = () => {
  const { isLogin } = useAuth();
  return (
    <div className={css.navLinkBox}>
      <NavLink className={css.navLinkSt} to="/">Home</NavLink>
{isLogin && <NavLink className={css.navLinkSt} to="/contacts">Contacts</NavLink>}
    </div>
  );
};
