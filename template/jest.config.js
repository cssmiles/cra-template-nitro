const path = require('path');
const { baseconfig } = require('jest-config');
const fromRoot = (d) => path.join(__dirname, d);
module.exports = {
  ...baseconfig,
  testEnvironment: 'jest-environment-jsdom',
  moduleDirectories: ['node_modules', fromRoot('test-utils')],
  moduleFileExtensions: ['js', 'jsx', 'json', 'ts', 'tsx'],
  moduleNameMapper: {
    '~/(.*)': fromRoot('app/$1')
  },
  transform: {
    '^.+\\.tsx?$': 'esbuild-jest',
    '^.+\\.jsx?$': 'esbuild-jest'
  }
};
