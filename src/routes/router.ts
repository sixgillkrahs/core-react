import { lazy } from "react";
import type { Route } from "../types/route";
import MainLayout from "../layouts/MainLayout";

export const PUBLIC_ROUTER: Route[] = [
    {
        component: lazy(() => import("../pages/Home")),
        exact: true,
        id: 'public-01',
        path: "main",
        public: true,
        layout: MainLayout
    },
    {
        component: lazy(() => import("../pages/Home/Dashboard")),
        exact: true,
        id: 'public-01',
        path: "main/dashboard",
        public: true,
        layout: MainLayout
    },
    {
        component: lazy(() => import("../pages/404")),
        exact: true,
        id: '404',
        path: "*",
        public: true,
        layout: MainLayout
    },
]

export const PRIVATE_ROUTER: Route[] = [
    {
        component: lazy(() => import("../pages/Home")),
        exact: true,
        id: 'private-01',
        path: "",
        public: true,
        children: [],
        layout: MainLayout
    },
]