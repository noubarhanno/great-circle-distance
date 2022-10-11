export default {
  preset: "ts-jest",
  globals: {
    "ts-jest": {
      tsconfig: "<rootDir>/tsconfig.json",
      diagnostics: false,
    },
  },
  moduleFileExtensions: ["ts", "js"],
  transform: {
    "^.+\\.ts$": "ts-jest",
  },
  roots: ["<rootDir>/src"],
  testPathIgnorePatterns: ["/node_modules/", "/dist/"],
  testMatch: ["**/__tests__/**/*.test.(ts|js)"],
  testEnvironment: "node",
  collectCoverageFrom: [
    "<rootDir>/src/**/*.ts", // include all files, even files that have no tests yet (or are never called)
  ],
};
