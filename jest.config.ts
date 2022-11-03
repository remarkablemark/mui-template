import type { JestConfigWithTsJest } from 'ts-jest';

const jestConfig: JestConfigWithTsJest = {
  moduleNameMapper: {
    '\\.(css|less|sass|scss)$': '<rootDir>/config/jest/__mocks__/styleMock.js',
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/config/jest/__mocks__/fileMock.js',
    '\\.svg$': '<rootDir>/config/jest/__mocks__/svgMock.js',
  },
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/config/jest/setupTests.ts'],
};

export default jestConfig;
