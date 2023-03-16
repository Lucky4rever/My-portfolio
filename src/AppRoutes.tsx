import { Header } from './components';
import { Info, Skills, Projects, PageNotFound, Achivements } from './pages';

const AppRoutes = [
  {
    path: '/my-portfolio/',
    element: <><Info /><Header /></>
  },
  {
    path: '/my-portfolio/skills',
    element: <><Skills /><Header /></>
  },
  {
    path: '/my-portfolio/projects',
    element: <><Projects /><Header /></>
  },
  {
    path: '/my-portfolio/achivements',
    element: <><Achivements /><Header /></>
  },
  {
    path: '*',
    element: <PageNotFound />
  }
];

export default AppRoutes;
