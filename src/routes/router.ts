import { lazy } from 'react';
import type { Route } from '@/types/route';
import MainLayout from '@/layouts/MainLayout';
import AuthLayout from '@/layouts/AuthLayout';
import BlankLayout from '@/layouts/BlankLayout';

export const PUBLIC_ROUTER: Route[] = [
  {
    component: lazy(() => import('@/pages/Auth/Login')),
    exact: true,
    id: 'login',
    path: 'login',
    public: true,
    layout: AuthLayout,
  },
  {
    component: lazy(() => import('@/pages/Auth/Register')),
    exact: true,
    id: 'register',
    path: 'register',
    public: true,
    layout: AuthLayout,
  },
  {
    component: lazy(() => import('@/pages/404')),
    exact: true,
    id: '404',
    path: '*',
    public: true,
    layout: BlankLayout,
  },
];

export const PRIVATE_ROUTER: Route[] = [
  {
    component: lazy(() => import('@/pages/Home')),
    exact: true,
    id: 'private-01',
    path: '',
    public: true,
    children: [],
    layout: MainLayout,
  },
];
