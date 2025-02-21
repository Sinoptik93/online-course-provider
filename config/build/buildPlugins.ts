import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import { BuildOptions } from './types/config';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';

type WebpackPlugin = webpack.WebpackPluginInstance;

export function buildPlugins({ paths, isDev }: BuildOptions): WebpackPlugin[] {
    const plugins = [
        new HtmlWebpackPlugin({
            template: paths.html,
        }),

        new MiniCssExtractPlugin(
            {
                filename: 'css/[name]-[contenthash:8].css',
                chunkFilename: 'css/[name]-[contenthash:8].css',
            },
        ),

        new webpack.ProgressPlugin(),

        /**
         * [Define plugin instruction](https://webpack.js.org/plugins/define-plugin/)
         */
        new webpack.DefinePlugin({
            __IS_DEV: JSON.stringify(isDev),
        }),
    ];

    if (isDev) {
        plugins.push(
            new ReactRefreshWebpackPlugin(),
            new webpack.HotModuleReplacementPlugin(),
        );
    }

    return plugins;
}
