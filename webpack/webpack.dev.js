import { merge } from 'webpack-merge';
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';
import common from './webpack.common.js';

export default merge(common, {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        static: './dist',
        historyApiFallback: true,
        open: true,
        hot: true,
        port: 3000,
        liveReload: true,
        watchFiles: ['src/**/*'],
    },
    plugins: [new ReactRefreshWebpackPlugin()],
});
