import path from "path";
import webpack from "webpack";
import { buildWebpackConfig } from "./config/build/buildWebpackConfig";
import { BuildDev, BuildPaths } from "./config/build/types/config";



export default (env: BuildDev) => {
const  mode = env.mode || 'development';
const isDev = mode === 'development';
const PORT = env.port || 3000;
const paths: BuildPaths = {
  entry: path.resolve(__dirname, 'src', 'index.ts'),
  build: path.resolve(__dirname, 'dist'),
  html:  path.resolve(__dirname, 'public', 'index.html') 
}
  return buildWebpackConfig({
    mode,
    paths,
    isDev,
    port: PORT,
  });
};