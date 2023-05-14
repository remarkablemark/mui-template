import { Route } from 'react-router-dom';

import Layout from './components/Layout';
import Home from './pages/Home';

const routes = (
  <Route path="/" element={<Layout />}>
    <Route index element={<Home />} />
  </Route>
);

export default routes;
