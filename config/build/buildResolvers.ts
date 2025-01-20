import { Configuration } from "webpack";

export function buildResolvers (): Configuration["resolve"] {
  return {
    extensions: ['.js', '.ts', '.tsx'],
    extensionAlias: {
      ".js": [".js", ".ts"],
      ".cjs": [".cjs", ".cts"],
      ".mjs": [".mjs", ".mts"]
    }
  }
}
