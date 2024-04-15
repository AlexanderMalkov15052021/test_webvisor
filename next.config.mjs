/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

config.plugins.push(new webpack.DefinePlugin({
  SC_DISABLE_SPEEDY: true,
  REACT_APP_SC_DISABLE_SPEEDY: true,
}));

export default nextConfig;
