export default {
  preset: "ts-jest",
  globals: {
    "ts-jest": {
      tsconfig: "<rootDir>/tsconfig.json",
      diagnostics: false,
    },
  },
  moduleFileExtensions: ["ts", "tsx"],
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest",
  },
  roots: ["<rootDir>/src"],
  testPathIgnorePatterns: ["/node_modules/"],
  testMatch: ["<rootDir>/src/**/*.test.(ts|js|tsx)"],
  testEnvironment: "react-testing-library",
  collectCoverageFrom: [
    "<rootDir>/src/**/*.ts", // include all files, even files that have no tests yet (or are never called)
  ],
};
