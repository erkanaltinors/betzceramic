/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images:{
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'raw.githubusercontent.com',
        port: '',
        pathname: '/erkanaltinors/betzceramic/main/public', 
      },
    ],
  }
}

module.exports = nextConfig
