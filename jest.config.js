module.exports = {
  clearMocks: true,
  collectCoverageFrom: ["src/**", "!src/**/*.stories.tsx"],
  modulePathIgnorePatterns: ["dist"],
  setupFilesAfterEnv: ["./jest.setup.js"],
};
