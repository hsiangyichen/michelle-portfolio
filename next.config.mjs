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

//2.
// // next.config.mjs
// export default {
//   webpack(config) {
//     config.module.rules.push({
//       test: /\.svg$/,
//       use: ["@svgr/webpack"],
//     });
//     return config;
//   },
// };

//3.
// /** @type {import('next').NextConfig} */
// const nextConfig = {};

// export default nextConfig;
