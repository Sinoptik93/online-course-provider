import webpack from "webpack";

type WebpackRule = webpack.RuleSetRule;

/**
 * Get webpack loaders list.
 *
 * [Loaders examples](https://webpack.js.org/loaders/#root)
 */
export function buildLoaders(): WebpackRule[] {

  /**
   * [Loader options](https://github.com/TypeStrong/ts-loader#loader-options)
   * [ts-loader guide](https://webpack.js.org/guides/typescript/#loader)
   */
  const typeScriptLoader: WebpackRule = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: '/node_modules/',
  }

  return [
    typeScriptLoader,
  ]
}
