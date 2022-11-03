import type { Root } from 'react-dom/client';

let getElementByIdSpy: jest.SpyInstance;

beforeAll(() => {
  const div: HTMLDivElement = document.createElement('div');
  getElementByIdSpy = jest
    .spyOn(document, 'getElementById')
    .mockReturnValueOnce(div);
});

afterAll(() => {
  jest.restoreAllMocks();
});

it('renders without crashing', () => {
  expect(getElementByIdSpy).not.toBeCalled();
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const root: Root = require('.').root;
  expect(getElementByIdSpy).toBeCalledTimes(1);
  expect(getElementByIdSpy).toBeCalledWith('root');
  root.unmount();
});
