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
import OkxSecurityAnalysis from './OkxSecurityAnalysis';

const okx: Wallet = {
  [SECTIONS.STATS]: {
    [STAT_SECTIONS.DOWNLOADS]: {
      [WALLET_PLATFORM.CHROME]: '1,000,000+',
      [WALLET_PLATFORM.FIREFOX]: '0',
      [WALLET_PLATFORM.OPERA]: '0',
      [WALLET_PLATFORM.EDGE]: '40,000+',
      [WALLET_PLATFORM.ANDROID]: '10,000,000+',
      [WALLET_PLATFORM.IOS]: '200,000+',
      [WALLET_PLATFORM.WINDOWS]: '??',
      [WALLET_PLATFORM.MAC]: '??',
    },
    [STAT_SECTIONS.DUNE_CHART]: [
      {
        name: 'Staking',
        duneEmbeds: [
          /* TODO(vasa): Add a chart like this: https://dune.com/queries/1901264/3192714 */
        ],
      },
      {
        name: 'Swap',
        duneEmbeds: [
          /* TODO(vasa): Add 2 charts:
            1. Daily Swap Volume across all chains: Eg. https://dune.com/embeds/1793048/2953820/
            2. Daily Swap Users across all chains: Eg. https://dune.com/embeds/1793048/4456070/ 
            3. OPTIONAL: Daily Swap Revenue across all chains: ???
            
            Existing chart without source: https://dune.com/lz_web3/wallet-war
            */
        ],
      },
      {
        name: 'Bridge',
        duneEmbeds: [
          /* TODO(vasa): Add 2 charts:
            1. Daily Bridge Volume across all chains: Eg. https://dune.com/embeds/1767108/2914176/
            2. Daily Bridge Users across all chains: Eg. https://dune.com/embeds/1767108/2914417/ 
            3. OPTIONAL: Daily Bridge Revenue across all chains: Eg. https://dune.com/embeds/2372425/3889795/
            */
        ],
      },
      {
        name: 'Daily Transaction Count (Smart Account)',
        duneEmbeds: [
          /* TODO(vasa): Add a chart like this: https://dune.com/queries/3441787/5782482 */
        ],
      },
      {
        name: 'Daily Deployed OKX Smart Accounts',
        duneEmbeds: [
          /* TODO(vasa): Add a chart like this: https://dune.com/queries/3455151/5806400 */
        ],
      },
      {
        name: 'Daily Active OKX Smart Accounts',
        duneEmbeds: [
          /* TODO(vasa): Add a chart like this: https://dune.com/queries/3456126/5807993 */
        ],
      },
      {
        name: 'Weekly Active OKX Smart Accounts',
        duneEmbeds: [
          /* TODO(vasa): Add a chart like this: https://dune.com/queries/3456134/5808006 */
        ],
      },
    ],
  },
  [SECTIONS.ACTIVITY]: [
    /* 
    TODO(vasa): Find the relevant repos and add them here (most of the relevant ones are private I guess)
    {
      name: 'Metamask Extension',
      repo: 'MetaMask/metamask-extension',
    },
    {
      name: 'Metamask Mobile',
      repo: 'MetaMask/metamask-mobile',
    },
    {
      name: 'Metamask Snaps',
      repo: 'MetaMask/snaps',
    }, */
  ],
  [SECTIONS.SECURITY_ANALYSIS]: OkxSecurityAnalysis,
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
      },
      {
        feature: 'Email login',
        description: '',
        isSupported: true,
        remark:
          'Email login only works with MPC wallet, not with Smart Account.',
      },
      {
        feature: 'Passkey login',
        description: '',
        isSupported: false,
      },
      {
        feature: 'Smart Account support',
        description: '',
        isSupported: true,
      },
      {
        feature: 'Portfolio tracking',
        description: '',
        isSupported: true,
      },
      {
        feature: 'On-ramp support',
        description: '',
        isSupported: true,
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
        feature: 'Ability to point to custom rpc',
        description: '',
        isSupported: true,
      },
      {
        feature: 'Swap support',
        description: '',
        isSupported: true,
      },
      {
        feature: 'Bridge support',
        description: '',
        isSupported: true,
      },
      {
        feature: 'Stake support',
        description: '',
        isSupported: true,
      },
      {
        feature: 'View NFTs',
        description: '',
        isSupported: true,
      },
      {
        feature: 'Dapp browser',
        description: '',
        isSupported: true,
        remark: 'In Mobile',
      },
      {
        feature: 'gas fees customization',
        description: '',
        isSupported: true,
      },
      {
        feature: 'token importing',
        description: '',
        isSupported: true,
      },
    ],
    [FEATURE_TYPE.SECURITY]: [
      {
        feature: 'Screenshot possibility while doing backup',
        description: '',
        isSupported: true,
        remark:
          'You can take screenshot on mobile but a warning is shown. You can take a screenshot on browser without any warning.',
      },
      {
        feature: 'Transaction Simulation',
        description: '',
        isSupported: true,
        remark:
          'TODO(vasa): Check if they use an external provider or do they have their own infra for this.',
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
    [FEATURE_TYPE.SUPPORTED_HARDWARE_WALLETS]: [
      {
        name: 'Ledger',
        imgUrl: '/wallets/ledger/ledger.png',
      },
      {
        name: 'Trezor',
        imgUrl: '/wallets/trezor/trezor.png',
      },
      {
        name: 'Keystone',
        imgUrl: '/wallets/keystone/keystone.png',
      },
      {
        name: 'OneKey',
        imgUrl: '/wallets/onekey/onekey.png',
      },
    ],
  },
  [SECTIONS.SUPPORTED_STANDARD]: {
    [SUPPORTED_STANDARD_TYPE.SUPPORTED_EIP]: [
      {
        eipName: 'ERC-4337: Account Abstraction Using Alt Mempool',
        eipType: 'Standards Track: ERC',
        eipStatus: 'Draft',
        supportStatus: EIP_SUPPORT_STATUS.SUPPORTED,
      },
      {
        eipName: 'ERC-6900: Modular Smart Contract Accounts and Plugins',
        eipType: 'Standards Track: ERC',
        eipStatus: 'Draft',
        supportStatus: EIP_SUPPORT_STATUS.NOT_SUPPORTED,
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
        supportStatus: EIP_SUPPORT_STATUS.SUPPORTED,
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
        supportStatus: EIP_SUPPORT_STATUS.NOT_SUPPORTED,
      },
      {
        eipName: 'EIP-1102: Opt-in account exposure',
        eipType: 'Standards Track: Interface',
        eipStatus: 'Stagnant',
        supportStatus: EIP_SUPPORT_STATUS.SUPPORTED,
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
        supportStatus: EIP_SUPPORT_STATUS.SUPPORTED,
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
        supportStatus: EIP_SUPPORT_STATUS.NOT_SUPPORTED,
      },
      {
        eipName: 'EIP-5792: Wallet Function Call API',
        eipType: 'Standards Track: Interface',
        eipStatus: 'Stagnant',
        supportStatus: EIP_SUPPORT_STATUS.NOT_SUPPORTED,
      },
      {
        eipName: 'ERC-6384: Human-readable offline signatures',
        eipType: 'Standards Track: ERC',
        eipStatus: 'Stagnant',
        supportStatus: EIP_SUPPORT_STATUS.NOT_SUPPORTED,
      },
      {
        eipName: 'EIP-4844: Shard Blob Transactions',
        eipType: 'Standards Track: Core',
        eipStatus: 'Last Call',
        supportStatus: EIP_SUPPORT_STATUS.SUPPORTED,
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
        supportStatus: EIP_SUPPORT_STATUS.SUPPORTED,
      },
      {
        eipName: 'EIP-747: wallet_watchAsset RPC Method',
        eipType: 'Standards Track: Interface',
        eipStatus: 'Final',
        supportStatus: EIP_SUPPORT_STATUS.SUPPORTED,
      },
      {
        eipName: 'EIP-1193: Ethereum Provider JavaScript API',
        eipType: 'Standards Track: Interface',
        eipStatus: 'Final',
        supportStatus: EIP_SUPPORT_STATUS.SUPPORTED,
      },
      {
        eipName: 'ERC-1271: Standard Signature Validation Method for Contracts',
        eipType: 'Standards Track: ERC',
        eipStatus: 'Final',
        supportStatus: EIP_SUPPORT_STATUS.NOT_NEEDED,
      },
      {
        eipName: 'EIP-1559: Fee market change for ETH 1.0 chain',
        eipType: 'Standards Track: Core',
        eipStatus: 'Final',
        supportStatus: EIP_SUPPORT_STATUS.SUPPORTED,
      },
      {
        eipName: 'EIP-2255: Wallet Permissions System',
        eipType: 'Standards Track: Interface',
        eipStatus: 'Final',
        supportStatus: EIP_SUPPORT_STATUS.SUPPORTED,
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
        supportStatus: EIP_SUPPORT_STATUS.SUPPORTED,
      },
      {
        eipName: 'ERC-945: wallet_scanQRCode RPC Method',
        eipType: '',
        eipStatus: '',
        supportStatus: EIP_SUPPORT_STATUS.NOT_SUPPORTED,
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
        supportStatus: EIP_SUPPORT_STATUS.EIP_NOT_READY,
      },
    ],
  },
  [SECTIONS.INCENTIVES]: undefined,
  [SECTIONS.SECURITY]: {
    [SECURITY_AUDIT_TYPE.AUDIT]: [
      {
        auditor: 'SlowMist',
        date: 'Aug 14, 2022',
        auditedVersion: [
          {
            name: 'N/A',
            link: '',
          },
        ],

        currentVersion: [
          {
            name: 'N/A',
            link: '',
          },
        ],

        relevance: AUDIT_RELEVANCE.OUTDATED,
        report:
          'https://www.okx.com/help/okx-wallet-passed-security-key-audit-by-slowmist',
      },
    ],
    [SECURITY_AUDIT_TYPE.BUG_BOUNTY]: [],
  },
  [SECTIONS.INCIDENTS]: [],
  [SECTIONS.LEGAL_COMPLIANCE]: [
    [
      'Where is the company registered?',
      "This is important as it can impact the regulatory standards the company must adhere to, the legal protections available to users, and the company's overall credibility and trustworthiness.",
      'Australia, Malta, Bahamas, Hong Kong, Brazil, Singapore, Seychelles',
    ],
    [
      'Data Safety Policy',
      "It's essential for ensuring the privacy and security of user data, demonstrating the company's commitment to maintaining user trust and adhering to data protection regulations. It provides users with an understanding of what to expect regarding their personal information when using the wallet.",
      'https://www.okx.com/help/privacy-policy-statement',
    ],
    [
      'Website Cookie policy',
      'Website cookies in this wallet are used for:',
      'https://www.okx.com/help/privacy-policy-statement',
    ],
  ],
  [SECTIONS.LICENSE]: [
    {
      name: 'OKX Extension - Closed Source',
      link: '',
    },
    {
      name: 'OKX Mobile - Closed Source',
      link: '',
    },
    {
      name: 'OKX Desktop - Closed Source',
      link: '',
    },
  ],
};
export default okx;
