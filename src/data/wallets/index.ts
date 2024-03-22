import { WalletData } from '@/app/types';
import * as metamask from './metamask';
import metamask2 from './metamask/data';
import { Wallet } from '@/types/wallet';

const wallets: { [key: string]: WalletData } = {
  metamask: metamask.wallet_data,
};

export const wallets2: {
  [key: string]: { sections: Wallet; name: string; image: string; url: string };
} = {
  metamask: {
    name: 'Metamask',
    image:
      'https://cdn.iconscout.com/icon/free/png-256/free-metamask-2728406-2261817.png',
    url: 'www.metamask.io',
    sections: metamask2,
  },
};

export default wallets;
