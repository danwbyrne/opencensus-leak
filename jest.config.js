module.exports = {
  testRegex: '^.*.test\\.tsx?$',
  roots: [
    "<rootDir>/src"
  ],
  transform: {
    "^.+\\.tsx?$": "ts-jest"
  },
}