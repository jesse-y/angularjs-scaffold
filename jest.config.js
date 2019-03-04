module.exports = {
	testEnvironment: 'jsdom',
	setupFilesAfterEnv: [ '<rootDir>/test/setupJest.js' ],
	roots: [ 'src' ],
	transform: {
		"^.+\\.ts?$": "ts-jest"
	},
	testRegex: "(/__tests__/.*|\\.(test|spec))\\.(ts|tsx|js|jsx)$",
	moduleNameMapper: {
		"(.*)\\.(s*)css$": "<rootDir>/test/cssMock.js",
    	"(.*)\\.html$": "<rootDir>/test/htmlMock.js",
    	"^src(.*)": "<rootDir>/src$1"
	},
	moduleFileExtensions: [ 'js', 'ts', 'json' ],
	coveragePathIgnorePatterns: [
		"<rootDir>/node_modules/",
    	"<rootDir>/test",
    	"(.*).spec.js"	
	],
	coverageThreshold: {
		global: {
			branches: 80,
			functions: 80,
			lines: 80,
			statements: 80
		}
	}
}