import { WalletData } from '@/app/types';
import metamask from './metamask/data';
import { Wallet } from '@/types/wallet';

export const wallets: {
  [key: string]: {
    updatedAt: string;
    sections: Wallet;
    name: string;
    image: string;
    url: string;
  };
} = {
  metamask: {
    updatedAt: '22-Mar 2024',
    name: 'Metamask',
    image:
      'https://cdn.iconscout.com/icon/free/png-256/free-metamask-2728406-2261817.png',
    url: 'www.metamask.io',
    sections: metamask,
  },
};

export default wallets;
