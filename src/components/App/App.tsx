import CssBaseline from '@mui/material/CssBaseline';
import { StrictMode } from 'react';
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom';

import routes from '~/src/routes';

const router = createBrowserRouter(createRoutesFromElements(routes));

export default function App() {
  return (
    <StrictMode>
      <CssBaseline />
      <RouterProvider router={router} />
    </StrictMode>
  );
}
