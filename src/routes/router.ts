import { lazy } from 'react';
import type { Route } from '@/types/route';
import MainLayout from '@/layouts/MainLayout';
import AuthLayout from '@/layouts/AuthLayout';
import BlankLayout from '@/layouts/BlankLayout';

export const PUBLIC_ROUTER: Route[] = [
  {
    component: lazy(() => import('@/pages/Auth/Login')),
    id: 'login',
    path: 'login',
    layout: AuthLayout,
    name: 'Login',
  },
  {
    component: lazy(() => import('@/pages/Auth/Register')),
    id: 'register',
    path: 'register',
    layout: AuthLayout,
    name: 'Register',
  },
  {
    component: lazy(() => import('@/pages/404')),
    id: '404',
    path: '*',
    layout: BlankLayout,
  },
];

export const PRIVATE_ROUTER: Route[] = [
  {
    component: lazy(() => import('@/pages/Home')),
    id: 'private-01',
    path: '',
    children: [],
    layout: MainLayout,
    name: 'Home',
  },
];
