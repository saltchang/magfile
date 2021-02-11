const routes = [
  {
    path: '/',
    meta: {
      headerTitle: 'Welcome',
      navText: 'Home',
      navigator: true,
    },
  },
  {
    path: '/about',
    meta: {
      headerTitle: 'About',
      navText: 'About',
      navigator: true,
    },
  },
  {
    path: '/resume',
    meta: {
      headerTitle: 'Resume',
      navText: 'Resume',
      navigator: true,
    },
  },
];

export default routes;

const navRoutes = routes.filter((route) => route.meta.navigator);
export { navRoutes };
