import { merge } from 'webpack-merge';
import TerserPlugin from 'terser-webpack-plugin';
import common from './webpack.common.js';

export default merge(common, {
    mode: 'production',
    devtool: false,
    optimization: {
        minimize: true,
        minimizer: [new TerserPlugin()],
        splitChunks: {
            chunks: 'all',
        },
    },
});
