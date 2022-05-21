import '@testing-library/jest-dom/extend-expect';

const localStorageMock: any = {
  getItem: jest.fn(),
  setItem: jest.fn(),
  clear: jest.fn(),
  removeItem: jest.fn(),
};
global.localStorage = localStorageMock;
