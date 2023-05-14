import { Route } from 'react-router-dom';

import Layout from '~/src/components/Layout';
import Home from '~/src/pages/Home';

const routes = (
  <Route path="/" element={<Layout />}>
    <Route index element={<Home />} />
  </Route>
);

export default routes;
