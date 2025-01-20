import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './styles/styles.scss';
import RWD from './components/RWD.tsx';
import App from './components/App';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: 'rwd',
    element: <RWD />,
  },
]);

createRoot(document.getElementById('root')!).render(<RouterProvider router={router} />);
