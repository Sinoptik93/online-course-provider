import path from 'path';
import { Configuration } from "webpack";
import { buildWebpackConfig } from "./config/build/buildWebpackConfig";
import { BUILD_MODE_VARIANTS, BuildPaths, BuildMode } from "./config/build/types/config";

const paths: BuildPaths = {
  entry: path.resolve(__dirname, 'src', 'index.ts'),
  build: path.resolve(__dirname, 'build'),
  html: path.resolve(__dirname, 'public', 'index.html')
}


/**
 * [Source](https://webpack.js.org/guides/environment-variables/)
 */
interface BuildEnv {
  mode: BuildMode;
  port: number;
}

export default (env: BuildEnv): Configuration => {

  const MODE = env.mode ?? BUILD_MODE_VARIANTS.DEVELOPMENT;
  const PORT = env.port ?? 3000;

  const isDev = MODE === BUILD_MODE_VARIANTS.DEVELOPMENT;

  return buildWebpackConfig({
    mode: MODE,
    port: PORT,
    isDev,
    paths,
  })
}
