import { lazy } from 'react';
import type { Route } from '@/types/route';
import MainLayout from '@/layouts/MainLayout';
import AuthLayout from '@/layouts/AuthLayout';
import BlankLayout from '@/layouts/BlankLayout';
import { UserOutlined } from '@ant-design/icons';

export const PUBLIC_ROUTER: Route[] = [
  {
    component: lazy(() => import('@/pages/Auth/Login')),
    key: 'login',
    path: 'login',
    layout: AuthLayout,
    label: 'Login',
    hiddenMenu: true,
  },
  {
    component: lazy(() => import('@/pages/Auth/Register')),
    key: 'register',
    path: 'register',
    layout: AuthLayout,
    label: 'Register',
    hiddenMenu: true,
  },
  {
    component: lazy(() => import('@/pages/404')),
    key: '404',
    path: '/404',
    layout: BlankLayout,
    hiddenMenu: true,
  },
];

export const PRIVATE_ROUTER: Route[] = [
  {
    component: lazy(() => import('@/pages/Home')),
    key: 'private-01',
    path: 'home',
    // children: [
    //   {
    //     component: lazy(() => import('@/pages/Home/Dashboard')),
    //     key: '1234dfas',
    //     path: 'dashboard',
    //     label: 'Dashboard',
    //   },
    // ],
    layout: MainLayout,
    label: 'Home',
    icon: <UserOutlined />,
    permission: 'user:listUser',
  },
  {
    component: lazy(() => import('@/pages/Test')),
    key: 'test',
    path: 'test',
    layout: MainLayout,
    label: 'Test',
    permission: 'user:editUser',
  },
];
