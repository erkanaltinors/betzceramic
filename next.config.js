/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images:{
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'erkanaltinors.github.io',
        port: '',
        pathname: '/betzceramic',
      },
    ],
  }
}

module.exports = nextConfig
