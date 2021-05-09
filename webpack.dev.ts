import { resolve } from 'path';
import { Configuration } from 'webpack';
import { merge } from 'webpack-merge';
import commonConfig from './webpack.common';

const config: Configuration = merge(commonConfig, {
  mode: 'development',
  devtool: 'source-map',
  devServer: {
    contentBase: resolve(__dirname, 'build'),
    historyApiFallback: true,
    compress: true,
    port: 3000,
  },
});

export default config;
