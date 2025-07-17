import type { FC, JSX, LazyExoticComponent, ReactNode } from 'react';

export interface Route {
  id: string;
  path: string;
  name?: string;
  redirectTo?: string;
  meta?: Record<string, any>;
  component: LazyExoticComponent<() => JSX.Element>;
  children?: Route[];
  layout: FC<{ children: ReactNode }>;
}
