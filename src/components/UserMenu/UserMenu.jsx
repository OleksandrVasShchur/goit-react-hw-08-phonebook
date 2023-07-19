import { useAuth } from 'hooks';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/authOperations';
import css from '../Style/userMenuStyle.module.css';
import styled from '../Style/form.module.css';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <div>
    <p className={css.welcomeUser} >Welcome, {user.name}</p>
      <button className={styled.buttonLogout} type="button" onClick={() => dispatch(logOut())}>
        Logout
      </button>
    </div>
  );
};
