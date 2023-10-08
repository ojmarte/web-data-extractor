/* eslint-env node */

module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    moduleNameMapper: {
      '^@/(.*)$': '<rootDir>/src/$1',
    },
    setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'],
    collectCoverage: true,
    coverageDirectory: 'coverage',
  };
  