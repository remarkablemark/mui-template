import { Route } from 'react-router-dom';

import Home from './components/Home';
import Layout from './components/Layout';

const routes = (
  <Route path="/" element={<Layout />}>
    <Route index element={<Home />} />
  </Route>
);

export default routes;
