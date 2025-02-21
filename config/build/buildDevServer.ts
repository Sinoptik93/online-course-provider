import { BuildOptions } from './types/config';
import { Configuration as DevServerConfiguration } from 'webpack-dev-server';

/**
 * Get DevServer webpack config.
 *
 * [DevServer configuration](https://webpack.js.org/configuration/dev-server/)
 * [Resource](https://github.com/webpack/webpack-dev-server)
 */
export function buildDevServer(options: BuildOptions): DevServerConfiguration {
    const { port } = options;

    return {
        port,
        open: true,
        historyApiFallback: true,
        hot: true,
    };
}
