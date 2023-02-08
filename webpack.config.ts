import path from 'path';
import webpack from "webpack";
import { buildWebpackConfig } from "./config/build/buildWebpackConfig";
import { BUILD_MODE_VARIANTS, BuildPaths } from "./config/build/types/config";

const paths: BuildPaths = {
  entry: path.resolve(__dirname, 'src', 'index.ts'),
  build: path.resolve(__dirname, 'build'),
  html: path.resolve(__dirname, 'public', 'index.html')
}

const mode = BUILD_MODE_VARIANTS.DEVELOPMENT;
const isDev = mode === BUILD_MODE_VARIANTS.DEVELOPMENT;

const webpackConfig: webpack.Configuration = buildWebpackConfig({
  mode: BUILD_MODE_VARIANTS.DEVELOPMENT,
  paths,
  isDev,
})

export default webpackConfig;
