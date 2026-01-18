// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* config options here */
// };

// export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',       // enables static export
  trailingSlash: true,    // optional: keeps routes as folders (e.g., /about/index.html)
};

module.exports = nextConfig;