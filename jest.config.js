module.exports = {
	rootDir: './',
	roots: ['<rootDir>/src'],
	moduleFileExtensions: ['js', 'jsx', 'json'],
	moduleDirectories: ['node_modules'],
	snapshotSerializers: ['enzyme-to-json/serializer'],
	setupFiles: ['<rootDir>/enzyme.config.js'],
	transform: {
		'^.+\\.(t|j)sx?$': 'babel-jest'
	},
	testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.((t|j)sx?)$'
};
