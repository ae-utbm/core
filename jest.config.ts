import type { JestConfigWithTsJest } from 'ts-jest';

const config: JestConfigWithTsJest = {
	coverageReporters: ['text', 'lcov'],
	collectCoverage: true,
	coverageDirectory: 'coverage',
	coverageThreshold: {
		global: {
			branches: 100,
			functions: 100,
			lines: 100,
			statements: 100,
		},
	},
	detectOpenHandles: true,
	maxConcurrency: 1,
	modulePathIgnorePatterns: ['<rootDir>/dist', '<rootDir>/node_modules'],
	preset: 'ts-jest',
	testEnvironment: 'node',
	testRegex: '.(spec|test).ts$',
	verbose: true,
};

export default config;
