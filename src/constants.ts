const isProd = process.env.NODE_ENV === 'production';
const BASE_URL = isProd ? 'https://wallets.eco' : 'http://localhost:3000';

export { BASE_URL };
