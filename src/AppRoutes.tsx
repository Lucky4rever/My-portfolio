import { Header } from './components';
import { Info, Skills, Projects, PageNotFound, Achivements } from './pages';
import { Language } from './utils';

const startLink = "/" + Language.name;

const AppRoutes = [
  {
    path: startLink + '/my-portfolio/',
    element: <><Info /><Header /></>
  },
  {
    path: startLink + '/my-portfolio/skills',
    element: <><Skills /><Header /></>
  },
  {
    path: startLink + '/my-portfolio/projects',
    element: <><Projects /><Header /></>
  },
  {
    path: startLink + '/my-portfolio/achivements',
    element: <><Achivements /><Header /></>
  },
  {
    path: '*',
    element: <PageNotFound />
  }
];

export default AppRoutes;
