/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  webpack5: true, // Need to make it true for some versions of Next JS
  distDir: "build", // Defined build directory
  webpack: (config, options) => {
    // webpack configurations
    config.plugins.push(
      new options.webpack.container.ModuleFederationPlugin({
        name: "fe1",
        filename: "remoteEntry.js", // remote file name which will used later
        remoteType: "var",
        exposes: {
          // expose all component here.
          "./header": "./component/Header",
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
