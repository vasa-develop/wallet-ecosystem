import metamask from './metamask/data';
import clave from './clave/data';
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
  clave: {
    updatedAt: '22-Mar 2024',
    name: 'Clave Wallet',
    image:
      'https://www.getclave.io/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo-black.adba12b6.png&w=640&q=75',
    url: 'www.getclave.io/',
    sections: clave,
  },
};

export default wallets;
