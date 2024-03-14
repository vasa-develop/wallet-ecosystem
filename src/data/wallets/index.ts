import { WalletData } from '@/app/types';
import * as metamask from './metamask';

const wallets: { [key: string]: WalletData } = {
  metamask: metamask.wallet_data,
};

export default wallets;
