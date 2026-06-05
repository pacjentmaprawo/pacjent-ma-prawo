/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      { source: '/onkologia-integracyjna', destination: '/terapie-wspomagajace', permanent: true },
      { source: '/onkologia-integracyjna/:path*', destination: '/terapie-wspomagajace/:path*', permanent: true },
    ]
  },
}

export default nextConfig
