import { render } from '@testing-library/react';
import type { ReactElement, ReactNode } from 'react';
import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router';
import { createMemoryRouter } from 'react-router-dom';
import { resetActions, store } from 'src/store';

export { store };

export let router: ReturnType<typeof createMemoryRouter>;

export function wrapper(props: { children?: ReactNode }) {
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
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}

/**
 * @see {@link https://redux.js.org/usage/writing-tests#setting-up-a-reusable-test-render-function}
 */
export function renderWithProviders(ui: ReactElement) {
  return render(ui, { wrapper });
}

export function resetStore() {
  resetActions.forEach((resetAction) => store.dispatch(resetAction()));
}
