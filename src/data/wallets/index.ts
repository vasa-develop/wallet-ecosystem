import { WalletData } from '@/app/types';
import * as metamask from './metamask';
import metamask2 from './metamask/data';
import { Wallet } from '@/types/wallet';

const wallets: { [key: string]: WalletData } = {
  metamask: metamask.wallet_data,
};

export const wallets2: { [key: string]: Wallet } = {
  metamask: metamask2,
};

export default wallets;
