import type { Config } from "@jest/types";

const config: Config.InitialOptions = {
  clearMocks: true,
  collectCoverageFrom: ["src/**", "!src/**/*.stories.tsx"],
  modulePathIgnorePatterns: ["dist"],
  setupFilesAfterEnv: ["./jest.setup.ts"],
};

export default config;
