/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  eslint: {
    ignoreDuringBuilds: true, // Linting isn't used in this project yet
  },
  typescript: {
    ignoreBuildErrors: true, // Checking in "test:types" script instead
  },
};

module.exports = nextConfig;
