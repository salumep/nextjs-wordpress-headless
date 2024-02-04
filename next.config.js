/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['localhost', 'wp.chromatplus.ir', 'chromatplus.ir'],
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack'],
    });
    config.resolve.fallback = {
      ...config.resolve.fallback,
      fs: false,
    };
    return config;
  },
};

module.exports = nextConfig;
