import { type ReactNode } from 'react';

const MainLayout = ({ children }: { children: ReactNode }) => {
  return <div>header{children}footer</div>;
};

export default MainLayout;
