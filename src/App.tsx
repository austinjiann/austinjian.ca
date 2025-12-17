import { createBrowserRouter} from 'react-router-dom';
import { Home } from './pages/Home';
import { CaseStudy } from './pages/CaseStudy';
import { Analytics } from "@vercel/analytics/next"
export const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/projects/:slug',
    element: <CaseStudy />,
  },
]);
