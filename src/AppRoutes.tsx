import Header from './components/Header';
import { Info, Skills, Projects, PageNotFound } from './pages';

const AppRoutes = [
  {
    path: 'my-portfolio/',
    element: <><Info /><Header /></>
  },
  {
    path: 'my-portfolio/skills',
    element: <><Skills /><Header /></>
  },
  {
    path: 'my-portfolio/projects',
    element: <><Projects /><Header /></>
  },
  {
    path: '*',
    element: <PageNotFound />
  }
];

export default AppRoutes;
