import { AuthNav } from 'components/AuthNav/AuthNav';
import { Navigation } from 'components/Navigation/Navigation';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { useAuth } from 'hooks';
import { Suspense } from 'react';
import {  Outlet } from 'react-router-dom';
import css from '../Style/style-app.module.css';

export const SharedLayout = () => {
  const { isLogin } = useAuth();

  return (
    <>
    <div className={css.bodyBox}>
    <div>
        <Navigation />
        {isLogin ? <UserMenu /> : <AuthNav />}

        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </div>
    </div>
      
    </>
  );
};
