import { createBrowserRouter, Navigate } from 'react-router-dom';
import { Home } from './pages/Home';
import { CaseStudy } from './pages/CaseStudy';
import { NotFound } from './pages/NotFound';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/projects',
    element: <Navigate to="/" replace />,
  },
  {
    path: '/projects/:slug',
    element: <CaseStudy />,
  },
  {
    path: '*',
    element: <NotFound />,
  },
]);
