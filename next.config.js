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
  env: {
    mapbox_key:
      "pk.eyJ1IjoiYWJoaXNoZWstMDYiLCJhIjoiY211Nm1jOHV3MGVxejJ4czluYmdrMGNmaiJ9.7E_DLfmT9TRD6NuHVDO0RQ",
  },
};

module.exports = nextConfig;

// module.exports = {
//   images: {
//     remotePatterns: [new URL("https://download.logo.wine/**")],
//   },
// };
