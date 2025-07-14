import type { FC, JSX, LazyExoticComponent, ReactNode } from 'react';

export interface Route {
  id: string;
  path: string;
  exact: boolean;
  public: boolean;
  component: LazyExoticComponent<() => JSX.Element>;
  children?: Route[];
  layout: FC<{ children: ReactNode }>;
}
