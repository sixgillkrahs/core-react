import type { FC, JSX, LazyExoticComponent, ReactNode } from 'react';

export interface Route extends ChildRoute {
  layout: FC<{ children: ReactNode }>;
}

export interface ChildRoute {
  key: string;
  path: string;
  label?: string;
  redirectTo?: string;
  meta?: Record<string, any>;
  component: LazyExoticComponent<() => JSX.Element>;
  children?: ChildRoute[];
  icon?: ReactNode;
}
