import {Configuration} from "webpack";
import {BuildOptions} from "./types/config";

export function buildResolvers(options: BuildOptions): Configuration["resolve"] {
    return {
        extensions: ['.js', '.ts', '.tsx'],
        extensionAlias: {
            ".js": [".js", ".ts"],
            ".cjs": [".cjs", ".cts"],
            ".mjs": [".mjs", ".mts"]
        },
        preferAbsolute: true,
        modules: [
            options.paths.src,
            "node_modules",
        ],
        alias: {}
    }
}
