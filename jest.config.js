module.exports = {
  testPathIgnorePatterns: ['/node_modules/', '/next/'],
  setupFilesAfterEnv: [
    '<rootDir>/tests/setup-tests.ts',
  ],
  transform: {
    '^.+\\.(js|jsx|ts|tsx)': '<rootDir>/node_modules/babel-jest',
  },
  testEnvironment: 'jsdom',
};
