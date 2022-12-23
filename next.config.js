/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/videos',
        destination: 'https://www.presidentekennedy.es.gov.br/',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
