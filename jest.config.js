module.exports = {
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['/node_modules/'],
  collectCoverageFrom: ['src/**/*.ts(x)?', '!src/**/index.ts(x)?'],
  setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts'],
};
