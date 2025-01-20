import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ThirdwebProvider } from 'thirdweb/react';

import Home from '../pages/Home.tsx';
import Styleguide from '../pages/Styleguide.tsx';
import RWD from '../pages/RWD.tsx';
import NotFound from '../pages/NotFound.tsx';

import Layout from './Layout.tsx';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: (
        <Layout>
          <Home />
        </Layout>
      ),
    },
    {
      path: 'styleguide',
      element: (
        <Layout>
          <Styleguide />
        </Layout>
      ),
    },
    {
      path: 'rwd',
      element: (
        <Layout>
          <RWD />
        </Layout>
      ),
    },
    {
      path: '*',
      element: (
        <Layout>
          <NotFound />
        </Layout>
      ),
    },
  ]);

  return (
    <ThirdwebProvider>
      <RouterProvider router={router} />
    </ThirdwebProvider>
  );
}

export default App;
