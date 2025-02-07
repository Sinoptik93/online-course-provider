import webpack from "webpack";

type WebpackRule = webpack.RuleSetRule;

/**
 * Get webpack loaders list.
 *
 * [Loaders examples](https://webpack.js.org/loaders/#root)
 */
export function buildLoaders(): WebpackRule[] {

    /**
     * [Loader options](https://github.com/webpack-contrib/sass-loader?tab=readme-ov-file#sassoptions)
     * [sass guide](https://webpack.js.org/loaders/sass-loader/)
     */
    const cssLoader: WebpackRule = {
        test: /\.s[ac]ss$/i,
        use: [
            "style-loader",
            "css-loader",
            "sass-loader",
        ],
    }


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
        cssLoader
    ]
}
