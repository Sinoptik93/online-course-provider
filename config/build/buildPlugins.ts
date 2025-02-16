import webpack from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";
import {BuildOptions} from "./types/config";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

type WebpackPlugin = webpack.WebpackPluginInstance;

export function buildPlugins({paths, isDev}: BuildOptions): WebpackPlugin[] {
    return [
        new HtmlWebpackPlugin({
            template: paths.html
        }),

        new MiniCssExtractPlugin(
            {
                filename: "css/[name]-[contenthash:8].css",
                chunkFilename: "css/[name]-[contenthash:8].css",
            }
        ),

        new webpack.ProgressPlugin(),

        /**
         * [Define plugin instruction](https://webpack.js.org/plugins/define-plugin/)
         */
        new webpack.DefinePlugin({
            __IS_DEV: JSON.stringify(isDev)
        })
    ]
}
