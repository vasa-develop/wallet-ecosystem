/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
      },
      {
        protocol: 'https',
        hostname: 'wallets.eco',
      },
    ],
  },
  async redirects() {
    return [
      // Basic redirect
      {
        source: '/standards',
        destination:
          'https://wallet-ecosystem.notion.site/Wallet-Ecosystem-Standards-Tracker-9151e788ab7243f7a53a70c6e9834b0c',
        permanent: false,
      },
      {
        source: '/modules',
        destination: 'https://wallet-ecosystem.notion.site/100-Smart-Account-Modules-8873025da42c49648bfe03bf980c89d6',
        permanent: false,
      }
    ];
  },
};

export default nextConfig;
