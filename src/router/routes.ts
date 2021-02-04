import HomePage from '../views/home/index';
import AboutPage from '../views/about/index';
import DevPage from '../views/dev/index';
import TypingMotion from '../components/TypingMotion/index';
import ResumePage from '../views/resume/index';

const routes = [
  {
    name: 'home',
    path: '/',
    component: HomePage,
    exact: true,
    meta: {
      headerTitle: 'Welcome',
      navText: 'Home',
      navigator: true,
    },
  },
  {
    name: 'about',
    path: '/about',
    component: AboutPage,
    meta: {
      headerTitle: 'About',
      navText: 'About',
      navigator: true,
    },
  },
  {
    name: 'resume',
    path: '/resume',
    component: ResumePage,
    meta: {
      headerTitle: 'Resume',
      navText: 'Resume',
      navigator: true,
    },
  },
  {
    name: 'dev',
    path: '/dev',
    component: DevPage,
    meta: {
      navigator: false,
    },
  },
  {
    name: 'dev-typingMotion',
    path: '/dev-typingMotion',
    component: TypingMotion,
    meta: {
      navigator: false,
    },
  },
];

export default routes;

const navRoutes = routes.filter((route) => route.meta.navigator);
export { navRoutes };
