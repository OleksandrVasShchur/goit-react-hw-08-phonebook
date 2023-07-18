import { useAuth } from "hooks";
import { Navigate } from "react-router-dom";


export const RestrictedRoute = ({component: Component, redirectTo = '/'}) => {
    const { isLogin } = useAuth();
    return isLogin ? <Navigate to={redirectTo} /> : Component;

}