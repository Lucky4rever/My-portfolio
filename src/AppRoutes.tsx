import Header from './components/Header';
import { Info, Skills, Projects, PageNotFound } from './pages';

const AppRoutes = [
  {
    path: 'Lucky4rever/my-portfolio/',
    element: <><Info /><Header /></>
  },
  {
    path: 'Lucky4rever/my-portfolio/skills',
    element: <><Skills /><Header /></>
  },
  {
    path: 'Lucky4rever/my-portfolio/projects',
    element: <><Projects /><Header /></>
  },
  {
    path: '*',
    element: <PageNotFound />
  }
];

export default AppRoutes;
