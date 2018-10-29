// Core
import merge from 'webpack-merge';

// Common
import { common } from './common';

export const development = (path, plugins) =>
    merge(common(path, plugins), {
        mode: 'development',
        entry: {
            app: path.entry.app
        },
        output: {
            filename: 'js/[name].bundle.js',
            path: path.output
        },
        devServer: {
            hot: true,
            historyApiFallback: true,
            overlay: {
                warnings: true,
                errors: true
            },
            stats: 'errors-only',
            port: 8090
        }
    });
