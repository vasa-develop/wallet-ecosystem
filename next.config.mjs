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
  // async redirects() {
  //   return [
  //     // Basic redirect
  //     {
  //       source: '/standards',
  //       destination:
  //         'https://wallet-ecosystem.notion.site/Wallet-Ecosystem-Standards-Tracker-9151e788ab7243f7a53a70c6e9834b0c',
  //       permanent: false,
  //     },
  //   ];
  // },
};

export default nextConfig;
