// noinspection JSUnusedGlobalSymbols

import path from 'path';
import { Configuration } from "webpack";
import { buildWebpackConfig } from "./config/build/buildWebpackConfig";
import { BUILD_MODE_VARIANTS, BuildPaths, BuildEnv } from "./config/build/types/config";

export default (env: BuildEnv): Configuration => {

  const paths: BuildPaths = {
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    build: path.resolve(__dirname, 'build'),
    html: path.resolve(__dirname, 'public', 'index.html'),
    src: path.resolve(__dirname, 'src'),
  }

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
