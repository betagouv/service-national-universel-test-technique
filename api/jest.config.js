const config = {
  roots: ["src/"],
  testEnvironment: "node",
  testPathIgnorePatterns: ["/node_modules/", "/__mocks__/", "/helpers/", "/fixtures/", "/scripts/", "/config/"],
  testMatch: ["**/?(*.)+(test).[jt]s?(x)"],
  preset: "ts-jest",
};

module.exports = config;
