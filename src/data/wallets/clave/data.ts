import { Wallet } from '@/types/wallet';

import {
  AUDIT_RELEVANCE,
  EIP_SUPPORT_STATUS,
  ENSSupportType,
  FEATURE_TYPE,
  SECTIONS,
  SECURITY_AUDIT_TYPE,
  STAT_SECTIONS,
  SUPPORTED_STANDARD_TYPE,
  WALLET_PLATFORM,
} from '@/types/enum';
import ClaveSecurityAnalysis from './ClaveSecurityAnalysis';

const clave: Wallet = {
  [SECTIONS.STATS]: {
    [STAT_SECTIONS.DOWNLOADS]: {
      [WALLET_PLATFORM.CHROME]: '0',
      [WALLET_PLATFORM.FIREFOX]: '0',
      [WALLET_PLATFORM.OPERA]: '0',
      [WALLET_PLATFORM.EDGE]: '0',
      [WALLET_PLATFORM.ANDROID]: '1000+',
      [WALLET_PLATFORM.IOS]: '??',
    },
    [STAT_SECTIONS.DUNE_CHART]: [
      {
        name: 'Daily Transaction Count',
        duneEmbeds: ['https://dune.com/embeds/3441787/5782482/'],
      },
      {
        name: 'Daily Deployed Clave Account',
        duneEmbeds: ['https://dune.com/embeds/3455151/5806400/'],
      },
      {
        name: 'Daily Active Account Count',
        duneEmbeds: ['https://dune.com/embeds/3456126/5807993/'],
      },
      {
        name: 'Weekly Active Account Count',
        duneEmbeds: ['https://dune.com/embeds/3456134/5808006/'],
      },
    ],
  },
  [SECTIONS.ACTIVITY]: [
    {
      name: 'Clave Contracts',
      repo: 'getclave/clave-contracts',
    },
    {
      name: 'Clave Expo Passkey',
      repo: 'getclave/clave-expo-passkey',
    },
    {
      name: 'Clave Lists',
      repo: 'getclave/clave-lists',
    },
  ],
  [SECTIONS.SECURITY_ANALYSIS]: ClaveSecurityAnalysis,
  [SECTIONS.FEATURES]: {
    [FEATURE_TYPE.IN_APP]: [
      {
        feature: 'KYC required',
        description: '',
        isSupported: false,
      },
      {
        feature: 'Social login',
        description: '',
        isSupported: false,
        remark: '',
      },
      {
        feature: 'Email login',
        description: '',
        isSupported: false,
        remark: '',
      },
      {
        feature: 'Passkey login',
        description: '',
        isSupported: true,
        remark: '',
      },
      {
        feature: 'Smart Account support',
        description: '',
        isSupported: true,
        remark: '',
      },
      {
        feature: 'Portfolio tracking',
        description: '',
        isSupported: true,
      },
      {
        feature: 'On-ramp support',
        description: '',
        isSupported: false,
      },
      {
        feature: 'Off-ramp support',
        description: '',
        isSupported: true,
      },
      {
        feature: 'Watching wallets',
        description: '',
        isSupported: false,
      },
      {
        feature: 'Custom RPC support',
        description: '',
        isSupported: false,
      },
      {
        feature: 'Swap support',
        description: '',
        isSupported: true,
      },
      {
        feature: 'Bridge support',
        description: '',
        isSupported: false,
      },
      {
        feature: 'Stake support',
        description: '',
        isSupported: false,
      },
      {
        feature: 'View NFTs',
        description: '',
        isSupported: false,
      },
      {
        feature: 'Dapp browser',
        description: '',
        isSupported: true,
        remark:
          'You can only access a limited number of dapps whitelist by the Clave team',
      },
      {
        feature: 'gas fees customization',
        description: '',
        isSupported: true,
      },
      {
        feature: 'token importing',
        description: '',
        isSupported: false,
      },
      {
        feature: 'Transaction Simulation',
        description:
          'Simulates a given transaction or user operation and shows the potential outcome',
        isSupported: false,
        remark:
          'While the app does show a potential outcome of a transaction, it does not simulate the transaction itself, instead it assumes the transaction outcome',
      },
      {
        feature: 'Plugin support',
        description: 'Ability to add plugins to the wallet',
        isSupported: false,
        remark:
          'Currently support for native modules is available, but you cannot add external plugins from the app itself',
      },
    ],
    [FEATURE_TYPE.SECURITY]: [
      {
        feature: 'Screenshot possibility while doing backup',
        description: '',
        isSupported: false,
        remark: 'Cannot take screenshot on mobile (but possible on browser)',
      },
      {
        feature: 'Transaction Simulation',
        description: '',
        isSupported: true,
        remark: 'Using snaps like tenderly tx preview',
      },
    ],
    [FEATURE_TYPE.ENS_SUPPORT]: {
      [ENSSupportType.MAINNET]: {
        isSupported: true,
        description:
          'Whether a user is able to send transactions to a standard ENS (e.g. user.eth) on mainnet',
      },
      [ENSSupportType.SUBDOMAINS]: {
        isSupported: false,
        description:
          'Whether a user is able to send transactions to an ENS subdomain (e.g. hot.user.eth) on mainnet ',
      },
      [ENSSupportType.OFFCHAIN]: {
        isSupported: false,
        description:
          'Whether a user is able to send transactions to an ENS with an offchain resolver on mainnet.',
      },
      [ENSSupportType.L2]: {
        isSupported: false,
        description:
          'Whether a user is able to send transactions to an ENS on an L2 (tested on Optimism)',
      },
      [ENSSupportType.CUSTOM]: {
        isSupported: false,
        description:
          'Whether a user is able to send transactions to an ENS with a custom domain on mainnet (e.g. user.cb.id)',
      },
    },
    [FEATURE_TYPE.SUPPORTED_HARDWARE_WALLETS]: [],
  },
  [SECTIONS.SUPPORTED_STANDARD]: {
    [SUPPORTED_STANDARD_TYPE.SUPPORTED_EIP]: [
      {
        eipName: 'ERC-4337: Account Abstraction Using Alt Mempool',
        eipType: 'Standards Track: ERC',
        eipStatus: 'Draft',
        supportStatus: EIP_SUPPORT_STATUS.NOT_NEEDED,
      },
      {
        eipName: 'ERC-6900: Modular Smart Contract Accounts and Plugins',
        eipType: 'Standards Track: ERC',
        eipStatus: 'Draft',
        supportStatus: EIP_SUPPORT_STATUS.NOT_CLEAR,
      },
      {
        eipName: 'EIP-7039: Scheme-Handler Discovery Option for Wallets',
        eipType: 'Standards Track: Interface',
        eipStatus: 'Draft',
        supportStatus: EIP_SUPPORT_STATUS.EIP_NOT_READY,
      },
      {
        eipName: 'EIP-7521: General Intents for Smart Contract Wallets',
        eipType: 'Standards Track: ERC',
        eipStatus: 'Draft',
        supportStatus: EIP_SUPPORT_STATUS.EIP_NOT_READY,
      },
      {
        eipName: 'EIP-7377: Migration Transaction',
        eipType: 'Standards Track: Core',
        eipStatus: 'Draft',
        supportStatus: EIP_SUPPORT_STATUS.EIP_NOT_READY,
      },
      {
        eipName: 'ERC-7484: Registry Extension for ERC-7579',
        eipType: 'Standards Track: ERC',
        eipStatus: 'Draft',
        supportStatus: EIP_SUPPORT_STATUS.EIP_NOT_READY,
      },
      {
        eipName: 'ERC-7529: Contract Discovery and eTLD+1 Association',
        eipType: 'Standards Track: ERC',
        eipStatus: 'Draft',
        supportStatus: EIP_SUPPORT_STATUS.EIP_NOT_READY,
      },
      {
        eipName: 'ERC-7579: Minimal Modular Smart Accounts',
        eipType: 'Standards Track: ERC',
        eipStatus: 'Draft',
        supportStatus: EIP_SUPPORT_STATUS.EIP_NOT_READY,
      },
      {
        eipName: 'EIP-3085: wallet_addEthereumChain RPC Method',
        eipType: 'Standards Track: Interface',
        eipStatus: 'Review',
        supportStatus: EIP_SUPPORT_STATUS.NOT_SUPPORTED,
      },
      {
        eipName: 'ERC-5568: Well-Known Format for Required Actions',
        eipType: 'Standards Track: ERC',
        eipStatus: 'Review',
        supportStatus: EIP_SUPPORT_STATUS.EIP_NOT_READY,
      },
      {
        eipName: 'ERC-831: URI Format for Ethereum',
        eipType: 'Standards Track: ERC',
        eipStatus: 'Stagnant',
        supportStatus: EIP_SUPPORT_STATUS.NOT_CLEAR,
      },
      {
        eipName: 'EIP-1102: Opt-in account exposure',
        eipType: 'Standards Track: Interface',
        eipStatus: 'Stagnant',
        supportStatus: EIP_SUPPORT_STATUS.NOT_CLEAR,
      },
      {
        eipName: 'EIP-1474: Remote procedure call specification',
        eipType: 'Standards Track: Interface',
        eipStatus: 'Stagnant',
        supportStatus: EIP_SUPPORT_STATUS.NOT_CLEAR,
      },
      {
        eipName: 'EIP-2015: wallet_updateEthereumChain RPC Method',
        eipType: 'Standards Track: Interface',
        eipStatus: 'Stagnant',
        supportStatus: EIP_SUPPORT_STATUS.NOT_SUPPORTED,
      },
      {
        eipName: 'ERC-3224: Described Data',
        eipType: 'Standards Track: ERC',
        eipStatus: 'Stagnant',
        supportStatus: EIP_SUPPORT_STATUS.EIP_NOT_READY,
      },
      {
        eipName:
          'EIP-3326: Wallet Switch Ethereum Chain RPC Method (wallet_switchEthereumChain)',
        eipType: 'Standards Track: Interface',
        eipStatus: 'Stagnant',
        supportStatus: EIP_SUPPORT_STATUS.NOT_SUPPORTED,
      },
      {
        eipName: 'ERC-4430: Described Transactions',
        eipType: 'Standards Track: ERC',
        eipStatus: 'Stagnant',
        supportStatus: EIP_SUPPORT_STATUS.EIP_NOT_READY,
      },
      {
        eipName: 'EIP-5003: Insert Code into EOAs with AUTHUSURP',
        eipType: 'Standards Track: Core',
        eipStatus: 'Stagnant',
        supportStatus: EIP_SUPPORT_STATUS.EIP_NOT_READY,
      },
      {
        eipName: 'ERC-5139: Remote Procedure Call Provider Lists',
        eipType: 'Standards Track: ERC',
        eipStatus: 'Stagnant',
        supportStatus: EIP_SUPPORT_STATUS.NOT_CLEAR,
      },
      {
        eipName: 'EIP-5792: Wallet Function Call API',
        eipType: 'Standards Track: Interface',
        eipStatus: 'Stagnant',
        supportStatus: EIP_SUPPORT_STATUS.NOT_CLEAR,
      },
      {
        eipName: 'ERC-6384: Human-readable offline signatures',
        eipType: 'Standards Track: ERC',
        eipStatus: 'Stagnant',
        supportStatus: EIP_SUPPORT_STATUS.NOT_CLEAR,
      },
      {
        eipName: 'EIP-4844: Shard Blob Transactions',
        eipType: 'Standards Track: Core',
        eipStatus: 'Last Call',
        supportStatus: EIP_SUPPORT_STATUS.NOT_SUPPORTED,
      },
      {
        eipName: 'ERC-681: URL Format for Transaction Requests',
        eipType: 'Standards Track: ERC',
        eipStatus: 'Final',
        supportStatus: EIP_SUPPORT_STATUS.NOT_SUPPORTED,
      },
      {
        eipName: 'EIP-712: Typed structured data hashing and signing',
        eipType: 'Standards Track: Interface',
        eipStatus: 'Final',
        supportStatus: EIP_SUPPORT_STATUS.NOT_CLEAR,
      },
      {
        eipName: 'EIP-747: wallet_watchAsset RPC Method',
        eipType: 'Standards Track: Interface',
        eipStatus: 'Final',
        supportStatus: EIP_SUPPORT_STATUS.NOT_CLEAR,
      },
      {
        eipName: 'EIP-1193: Ethereum Provider JavaScript API',
        eipType: 'Standards Track: Interface',
        eipStatus: 'Final',
        supportStatus: EIP_SUPPORT_STATUS.NOT_CLEAR,
      },
      {
        eipName: 'ERC-1271: Standard Signature Validation Method for Contracts',
        eipType: 'Standards Track: ERC',
        eipStatus: 'Final',
        supportStatus: EIP_SUPPORT_STATUS.NOT_CLEAR,
      },
      {
        eipName: 'EIP-1559: Fee market change for ETH 1.0 chain',
        eipType: 'Standards Track: Core',
        eipStatus: 'Final',
        supportStatus: EIP_SUPPORT_STATUS.NOT_CLEAR,
      },
      {
        eipName: 'EIP-2255: Wallet Permissions System',
        eipType: 'Standards Track: Interface',
        eipStatus: 'Final',
        supportStatus: EIP_SUPPORT_STATUS.NOT_CLEAR,
      },
      {
        eipName: 'EIP-2930: Optional access lists',
        eipType: 'Standards Track: Core',
        eipStatus: 'Final',
        supportStatus: EIP_SUPPORT_STATUS.NOT_CLEAR,
      },
      {
        eipName: 'EIP-6492: Signature Validation for Predeploy Contracts',
        eipType: 'Standards Track: ERC',
        eipStatus: 'Final',
        supportStatus: EIP_SUPPORT_STATUS.NOT_CLEAR,
      },
      {
        eipName: 'EIP-6963: Multi Injected Provider Discovery',
        eipType: 'Standards Track: Interface',
        eipStatus: 'Final',
        supportStatus: EIP_SUPPORT_STATUS.NOT_CLEAR,
      },
      {
        eipName: 'ERC-945: wallet_scanQRCode RPC Method',
        eipType: '',
        eipStatus: '',
        supportStatus: EIP_SUPPORT_STATUS.NOT_CLEAR,
      },
      {
        eipName: 'RIP-7560: Native Account Abstraction',
        eipType: '',
        eipStatus: '',
        supportStatus: EIP_SUPPORT_STATUS.NOT_CLEAR,
      },
      {
        eipName: 'ERC-7555: Single Sign-On for Account Discovery',
        eipType: '',
        eipStatus: '',
        supportStatus: EIP_SUPPORT_STATUS.NOT_CLEAR,
      },
    ],
  },
  [SECTIONS.INCENTIVES]: undefined,
  [SECTIONS.SECURITY]: {
    [SECURITY_AUDIT_TYPE.AUDIT]: [
      {
        auditor: 'Catina',
        date: 'December 15, 2023',
        auditedVersion: [
          {
            name: 'Clave Monorepo (bbaabc)',
            link: '',
          },
        ],

        currentVersion: [
          {
            name: 'Clave Monorepo no longer exists',
            link: '',
          },
        ],

        relevance: AUDIT_RELEVANCE.OUTDATED,
        report:
          'https://github.com/getclave/clave-contracts/blob/master/audits/cantina_audit_231215.pdf',
      },
      {
        auditor: 'Catina',
        date: 'March 20, 2024',
        auditedVersion: [
          {
            name: 'Clave Contracts (4bb009)',
            link: 'https://github.com/getclave/clave-contracts/commit/4bb00991174afd27d538cc0ace14e0acb33058ea',
          },
        ],

        currentVersion: [
          {
            name: 'Clave Contracts (775efe)',
            link: 'https://github.com/getclave/clave-contracts/commit/775efeb0a8b2a9ab7a3237dbebded4ae6ca45aaf',
          },
        ],

        relevance: AUDIT_RELEVANCE.UP_TO_DATE,
        report:
          'https://github.com/getclave/clave-contracts/blob/master/audits/cantina_audit_240320.pdf',
      },
    ],
    [SECURITY_AUDIT_TYPE.BUG_BOUNTY]: [],
  },
  [SECTIONS.INCIDENTS]: [],
  [SECTIONS.LEGAL_COMPLIANCE]: [
    [
      'Where is the company registered?',
      "This is important as it can impact the regulatory standards the company must adhere to, the legal protections available to users, and the company's overall credibility and trustworthiness.",
      'London, United Kingdom',
    ],
    [
      'Data Safety Policy',
      "It's essential for ensuring the privacy and security of user data, demonstrating the company's commitment to maintaining user trust and adhering to data protection regulations. It provides users with an understanding of what to expect regarding their personal information when using the wallet.",
      'https://www.getclave.io/privacy-policy',
    ],
    [
      'Website Cookie policy',
      'Website cookies in this wallet are used for:',
      'https://www.getclave.io/privacy-policy',
    ],
  ],
  [SECTIONS.LICENSE]: [
    {
      name: 'Clave Contracts - GNU General Public License v3.0',
      link: 'https://github.com/getclave/clave-contracts/blob/master/LICENSE',
    },
  ],
};
export default clave;
