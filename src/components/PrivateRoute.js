import { useAuth } from "hooks";
import { Navigate } from "react-router-dom";

export const PrivateRoute = ({component: Component, redirectTo = '/'}) => {
    const { isLogin, isRefreshing } = useAuth();
    const shouldRedirect = !isLogin && !isRefreshing;

  return shouldRedirect ? <Navigate to={redirectTo} /> : Component;

}