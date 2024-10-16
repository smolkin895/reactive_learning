import path from "path";
import webpack from "webpack";
import HTMLWebpackPlugin from "html-webpack-plugin";

const config: webpack.Configuration ={
    mode: 'development',
    entry: path.resolve(__dirname, 'src', 'index.ts'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js',
        clean: true,
    },
    module: {
        rules: [
          {
            test: /\.tsx?$/,
            use: 'ts-loader',
            exclude: /node_modules/,
          },
        ],
      },
      resolve: {
        extensions: ['.tsx', '.ts', '.js'],
      },
    plugins:[
        new HTMLWebpackPlugin({
            template: path.resolve(__dirname, 'public', 'index.html') 
        }),
        new webpack.ProgressPlugin(),
    ]
}

export default config;