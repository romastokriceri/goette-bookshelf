/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // В нових версіях ігнорування перевірок під час білду виглядає так:
  typescript: {
    ignoreBuildErrors: true,
  },
  // eslint тепер винесено або ігнорується автоматично, якщо не налаштовано, 
  // але для стабільності в Next 16 краще залишити так:
};

export default nextConfig;