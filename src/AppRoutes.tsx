import { Header } from './components';
import { Info, Skills, Projects, PageNotFound, Achivements } from './pages';
import { Language } from './utils';

const startLink = "/" + Language.name;

const AppRoutes = [
  {
    path: '/my-portfolio' + startLink,
    element: <><Info /><Header /></>
  },
  {
    path: '/my-portfolio' + startLink + '/skills',
    element: <><Skills /><Header /></>
  },
  {
    path: '/my-portfolio' + startLink + '/projects',
    element: <><Projects /><Header /></>
  },
  {
    path: '/my-portfolio' + startLink + '/achivements',
    element: <><Achivements /><Header /></>
  },
  {
    path: '*',
    element: <PageNotFound />
  }
];

export default AppRoutes;
