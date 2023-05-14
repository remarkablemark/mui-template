import { render } from '@testing-library/react';
import type { ReactElement, ReactNode } from 'react';
import { createMemoryRouter, RouterProvider } from 'react-router-dom';

export let router: ReturnType<typeof createMemoryRouter>;

function wrapper(props: { children?: ReactNode }) {
  const routes = [
    {
      path: '/',
      element: <>{props.children}</>,
    },
    {
      path: '*',
      element: <></>,
    },
  ];

  router = createMemoryRouter(routes);
  return <RouterProvider router={router} />;
}

/**
 * @see {@link https://redux.js.org/usage/writing-tests#setting-up-a-reusable-test-render-function}
 */
export function renderWithProviders(ui: ReactElement) {
  return render(ui, { wrapper });
}
