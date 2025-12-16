/** @type {import('next').NextConfig} */
const nextConfig = {
  globalNotFound: true,
  trailingSlash: false,
  output: "export",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
