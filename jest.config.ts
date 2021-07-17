import type { Config } from "@jest/types";

const config: Config.InitialOptions = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  clearMocks: true,
  modulePathIgnorePatterns: ["dist"],
  collectCoverageFrom: ["src/**", "!src/**/*.stories.tsx"],
};

export default config;
