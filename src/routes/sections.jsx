import { lazy, Suspense } from 'react';
import { Outlet, Navigate, useRoutes } from 'react-router-dom';

import DashboardLayout from 'src/layouts/dashboard';

export const IndexPage = lazy(() => import('src/pages/app'));
export const IndexPage1 = lazy(() => import('src/pages/app1'));
export const UserPage = lazy(() => import('src/pages/user'));
export const UserPage1 = lazy(() => import('src/pages/user1'));
export const PackagePage = lazy(() => import('src/pages/package'));
export const PackagePage1 = lazy(() => import('src/pages/package1'));
export const SubscribePage = lazy(() => import('src/pages/subscribe'));
export const SubscribePage1 = lazy(() => import('src/pages/subscribe1'));
export const AddUserPage = lazy(() => import('src/pages/addUser'));
export const AddUserPage1 = lazy(() => import('src/pages/addUser1'));
export const LoginPage = lazy(() => import('src/pages/login'));
export const Page404 = lazy(() => import('src/pages/page-not-found'));
export const AddSubscribePage = lazy(() => import('src/pages/addSubscribe'));
export const AddPackagePage = lazy(() => import('src/pages/addPackage'));

// ----------------------------------------------------------------------

export default function Router() {
  const routes = useRoutes([
    {
      element: (
        <DashboardLayout>
          <Suspense>
            <Outlet />
          </Suspense>
        </DashboardLayout>
      ),
      children: [
       //  paragon
        { element: <IndexPage />, index: true },
        { path: 'paragon/user', element: <UserPage /> },
        { path: 'paragon/package', element: <PackagePage /> },
        { path: 'paragon/subscribe', element: <SubscribePage /> },
        { path: 'paragon/addUser', element: <AddUserPage /> },
        { path: 'paragon/addSubscribe', element: <AddSubscribePage /> },
        { path: 'paragon/addPackage', element: <AddPackagePage /> },
        
        // swatti autos
        { path: 'swatti', element: <IndexPage1 /> },
        { path: 'swatti/user', element: <UserPage1 /> },
        { path: 'swatti/package', element: <PackagePage1 /> },
        { path: 'swatti/subscribe', element: <SubscribePage1 /> },
        { path: 'swatti/addUser', element: <AddUserPage1 /> },
        { path: 'swatti/addSubscribe', element: <AddSubscribePage /> },
        { path: 'swatti/addPackage', element: <AddPackagePage /> },

                
      ],
    },
    {
      path: 'login',
      element: <LoginPage />,
    },
    {
      path: '404',
      element: <Page404 />,
    },
    {
      path: '*',
      element: <Navigate to="/404" replace />,
    },
  ]);

  return routes;
}
