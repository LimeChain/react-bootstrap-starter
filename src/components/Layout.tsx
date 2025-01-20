import { Toaster } from 'react-hot-toast';

import Header from './Header';

import { ReactNode } from 'react';

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <Toaster position="bottom-right" />
      <Header />
      {children}
    </div>
  );
};

export default Layout;
