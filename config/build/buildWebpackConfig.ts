import { Configuration } from "webpack";
import { BuildOptions } from "./types/config";
import { buildPlugins } from "./buildPlugins";
import { buildLoaders } from "./buildLoaders";
import { buildDevServer } from "./buildDevServer";

export function buildWebpackConfig (options: BuildOptions): Configuration {
  const {mode, paths, isDev} = options;

  return  {
    mode,
    entry: paths.entry,
    output: {
      filename: '[name][contenthash].js',
      path: paths.build,
      clean: true,
    },

    plugins: buildPlugins(options),

    module: {
      rules: buildLoaders()
    },

    resolve: {
      extensions: ['.js', '.ts', '.tsx']
    },

     // [Devtool source](https://webpack.js.org/configuration/devtool/)
    devtool: isDev ? "eval-source-map" : undefined,

    devServer: isDev ? buildDevServer(options) : undefined,
  }
}
