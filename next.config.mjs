/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    transpilePackages: ["lucide-react"];
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });
    return config;
  },
};
export default nextConfig;
