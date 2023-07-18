import { useSelector } from 'react-redux';
import { selectIsLogin, selectIsRefreshing, selectUser, selectIsAuthError} from 'redux/auth/authSelectors';

export const useAuth = () => {
  const isLogin = useSelector(selectIsLogin);
  const user = useSelector(selectUser);
  const isRefreshing = useSelector(selectIsRefreshing);
  const isAuthError = useSelector(selectIsAuthError);
  return {
    isLogin,
    user,
    isRefreshing,
    isAuthError, 
  };
};
