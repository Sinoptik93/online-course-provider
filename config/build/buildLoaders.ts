import webpack from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import {BuildOptions} from "./types/config";

type WebpackRule = webpack.RuleSetRule;

/**
 * Get webpack loaders list.
 *
 * [Loaders examples](https://webpack.js.org/loaders/#root)
 */
export function buildLoaders(options: BuildOptions): WebpackRule[] {

    /**
     * File loader
     *
     * [Loader options](https://v4.webpack.js.org/loaders/file-loader/#options)
     */
    const fileLoader: WebpackRule = {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
            {
                loader: 'file-loader',
            },
        ],
    };

    /**
     * SVGR loader
     *
     * [Doc](https://www.npmjs.com/package/@svgr/webpack)
     */
    const svgLoader: WebpackRule = {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
    }

    // noinspection JSUnusedGlobalSymbols
    /**
     * [Loader options](https://github.com/webpack-contrib/sass-loader?tab=readme-ov-file#sassoptions)
     *
     * [sass guide](https://webpack.js.org/loaders/sass-loader/)
     *
     * [mini-css guide](https://webpack.js.org/plugins/mini-css-extract-plugin/#root)
     */
    const cssLoader: WebpackRule = {
        test: /\.s[ac]ss$/i,
        use: [
            options.isDev ? "style-loader" : MiniCssExtractPlugin.loader,
            {
                loader: "css-loader",
                options: {
                    modules: {
                        namedExport: false,
                        auto: (resPath: string) => Boolean(resPath.includes(".module.")),
                        localIdentName:
                            options.isDev
                                ? "[path][name]__[local]--[hash:base64:5]"
                                : "[hash:base64:8]"
                    }
                }
            },
            "sass-loader",
        ],
    }


    /**
     * [Loader options](https://github.com/TypeStrong/ts-loader#loader-options)
     *
     * [ts-loader guide](https://webpack.js.org/guides/typescript/#loader)
     */
    const typeScriptLoader: WebpackRule = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: '/node_modules/',
    }

    return [
        typeScriptLoader,
        cssLoader,
        svgLoader,
        fileLoader,
    ]
}
