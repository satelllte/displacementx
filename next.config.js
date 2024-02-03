/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  eslint: {
    ignoreDuringBuilds: true, // Checking in "test:lint" script instead
  },
  typescript: {
    ignoreBuildErrors: true, // Checking in "test:types" script instead
  },
};

module.exports = nextConfig;
