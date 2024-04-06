import metamask from './metamask/data';
import clave from './clave/data';
import okx from './okx/data';
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
    image: '/wallets/metamask/metamask.png',
    url: 'www.metamask.io',
    sections: metamask,
  },
  clave: {
    updatedAt: '22-Mar 2024',
    name: 'Clave Wallet',
    image: '/wallets/clave/clave.webp',
    url: 'www.getclave.io/',
    sections: clave,
  },
  okx: {
    updatedAt: '22-Mar 2024',
    name: 'OKX Wallet',
    image: '/wallets/okx/okx.png',
    url: 'www.okx.com/web3',
    sections: okx,
  },
};

export default wallets;
