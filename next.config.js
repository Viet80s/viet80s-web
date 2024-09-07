/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
        port: '',
        pathname: '/images/kzazn5mp/production/',
      },
      {
        protocol: 'https',
        hostname: 'viet80s.co.uk',
        port: '',
        pathname: '/pictures/quiz/',
      },
    ],
  },
}

module.exports = nextConfig;
