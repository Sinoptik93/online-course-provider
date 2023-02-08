import webpack from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";
import { BuildOptions } from "./types/config";

type WebpackPlugin = webpack.WebpackPluginInstance;

export function buildPlugins({paths}: BuildOptions): WebpackPlugin[] {
  return [
    new HtmlWebpackPlugin({
      template: paths.html
    }),

    new webpack.ProgressPlugin(),
  ]
}
