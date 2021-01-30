import { renderRoutes } from 'react-router-config';

import routes from './routes';

const Router = () => {
  return renderRoutes(routes);
};

export default Router;
