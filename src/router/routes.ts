import HomePage from '../views/home/index';
import AboutPage from '../views/about/index';
import DevPage from '../views/dev/index';
import TypingMotion from '../components/TypingMotion/index';

const routes = [
  {
    name: 'home',
    path: '/',
    component: HomePage,
    exact: true,
    meta: {
      headerTitle: '首頁',
    },
  },
  {
    name: 'about',
    path: '/about',
    component: AboutPage,
    meta: {
      headerTitle: 'About',
    },
  },
  {
    name: 'dev',
    path: '/dev',
    component: DevPage,
  },
  {
    name: 'dev-typingMotion',
    path: '/dev-typingMotion',
    component: TypingMotion,
  },
];

export default routes;
