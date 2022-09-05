const path = require("path");
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  distDir: "build",
  webpack: (config, options) => {
    // this will override the experiments
    config.experiments = { ...config.experiments, ...{ topLevelAwait: true } };
    // this will just update topLevelAwait property of config.experiments
    // config.experiments.topLevelAwait = true
    config.plugins.push(
      new options.webpack.container.ModuleFederationPlugin({
        name: "fe3",
        filename: "static/consumerFile.js",
        remoteType: "var",
        remotes: {
          fe1: options.isServer
            ? path.resolve("../fe1/build/remoteEntry.js")
            : "fe1",
          fe2: options.isServer
            ? path.resolve("../fe1/build/remoteEntry_2.js")
            : "fe2",
        },
        shared: [
          {
            react: {
              eager: true,
              singleton: true,
              requiredVersion: false,
            },
          },
          {
            "react-dom": {
              eager: true,
              singleton: true,
              requiredVersion: false,
            },
          },
        ],
      })
    );
    return config;
  },
};

module.exports = nextConfig;
