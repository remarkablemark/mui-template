import routes from './routes';

it('matches snapshot', () => {
  expect(routes).toMatchInlineSnapshot(`
    <Route
      element={<Layout />}
      path="/"
    >
      <Route
        errorElement={<ErrorBoundaryLoader />}
      >
        <Route
          element={<HomeLoader />}
          index={true}
        />
        <Route
          element={<NotFoundLoader />}
          path="*"
        />
      </Route>
    </Route>
  `);
});
