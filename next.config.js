/** @type {import('next').NextConfig} */
const nextConfig = {
  allowedDevOrigins: ["192.168.1.8"],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "download.logo.wine",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "links.papareact.com",
        pathname: "/**",
      },
    ],
  },
};

module.exports = nextConfig;

// module.exports = {
//   images: {
//     remotePatterns: [new URL("https://download.logo.wine/**")],
//   },
// };
