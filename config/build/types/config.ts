export const BUILD_MODE_VARIANTS = {
  DEVELOPMENT: "development",
  PRODUCTION: "production",
} as const;

export type BuildMode = typeof BUILD_MODE_VARIANTS[keyof typeof BUILD_MODE_VARIANTS];

export interface BuildPaths {
  /**
   * Webpack config entry point path.
   *
   * [Config entry point](https://webpack.js.org/concepts/entry-points/#single-entry-shorthand-syntax)
   */
  entry: string;

  /**
   * Webpack output result directory path.
   *
   * [Config output path](https://webpack.js.org/concepts/output/#usage)
   */
  build: string;

  /**
   * HTML webpack plugin path.
   *
   * [Config HTMLWebpack plugin](https://webpack.js.org/plugins/html-webpack-plugin/#basic-usage)
   */
  html: string;


  /**
   * Module resolution
   *
   * [Example absolute paths usage](https://webpack.js.org/concepts/module-resolution/)
   */
  src: string;
}

export interface BuildOptions {
  mode: BuildMode;
  paths: BuildPaths;
  isDev: boolean;
  port: number | string;
}

/**
 * [Source](https://webpack.js.org/guides/environment-variables/)
 */
export interface BuildEnv {
  mode: BuildMode;
  port: number;
}
