/** @type {import('next').NextConfig} */
const nextConfig = {
  // Explicitly disable App Router
  experimental: {
    appDir: false,
  },
  // Enable React strict mode for better development experience
  reactStrictMode: true,
  // Configure which extensions should be treated as pages
  pageExtensions: ["js", "jsx", "ts", "tsx"],
};

export default nextConfig;
