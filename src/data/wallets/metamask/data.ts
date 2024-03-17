import { Wallet } from '@/types/wallet';
import {
  EIP_SUPPORT_STATUS,
  ENSSupportType,
  FEATURE_TYPE,
  SECTIONS,
  SECURITY_AUDIT_TYPE,
  STAT_SECTIONS,
  SUPPORTED_STANDARD_TYPE,
  WALLET_PLATFORM,
} from '@/types/enum';

export const metamask: Wallet = {
  [SECTIONS.STATS]: {
    [STAT_SECTIONS.DOWNLOADS]: {
      [WALLET_PLATFORM.CHROME]: '10,000,000+',
      [WALLET_PLATFORM.FIREFOX]: '491,097+',
      [WALLET_PLATFORM.OPERA]: '359,633+',
      [WALLET_PLATFORM.EDGE]: '2,000,000+',
      [WALLET_PLATFORM.ANDROID]: '10,000,000+',
      [WALLET_PLATFORM.IOS]: '??',
    },
    [STAT_SECTIONS.DUNE_CHART]: [
      {
        name: 'Staking',
        duneEmbeds: ['https://dune.com/embeds/1901264/3192714/'],
      },
      {
        name: 'Swap',
        duneEmbeds: [
          'https://dune.com/embeds/1793048/2953820/',
          'https://dune.com/embeds/1793048/4456070/',
        ],
      },
      {
        name: 'Bridge',
        duneEmbeds: [
          'https://dune.com/embeds/1767108/2914176/',
          'https://dune.com/embeds/1767108/2914417/',
          'https://dune.com/embeds/2372425/3889795/',
        ],
      },
    ],
  },
  [SECTIONS.ACTIVITY]: [
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
    },
  ],
  [SECTIONS.SECURITY_ANALYSIS]: {},
  [SECTIONS.FEATURES]: {
    [FEATURE_TYPE.IN_APP]: [
      {
        feature: 'KYC required?',
        description: '',
        isSupported: true,
      },
      {
        feature: 'Support social login?',
        description: '',
        isSupported: false,
        remark: 'Could be supported in future using snaps',
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
      [ENSSupportType.MAINNET]: true,
      [ENSSupportType.SUBDOMAINS]: true,
      [ENSSupportType.OFFCHAIN]: false,
      [ENSSupportType.L2]: true,
      [ENSSupportType.CUSTOM]: false,
    },
    [FEATURE_TYPE.SUPPORTED_HARDWARE_WALLETS]: Array<{
      name: string;
      imgUrl: string;
    }>,
  },
  [SECTIONS.SUPPORTED_STANDARD]: {
    [SUPPORTED_STANDARD_TYPE.SUPPORTED_EIP]: [
      {
        eipName: 'EIP-3091: Block Explorer API Routes',
        eipType: 'Standards Track: Interface',
        eipStatus: 'Draft',
        supportStatus: EIP_SUPPORT_STATUS.NOT_CLEAR,
      },
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
        supportStatus: EIP_SUPPORT_STATUS.NOT_CLEAR,
      },
      {
        eipName: 'EIP-7377: Migration Transaction',
        eipType: 'Standards Track: Core',
        eipStatus: 'Stagnant',
        supportStatus: EIP_SUPPORT_STATUS.NOT_CLEAR,
      },
      {
        eipName: 'ERC-7484: Registry Extension for ERC-7579',
        eipType: 'Standards Track: ERC',
        eipStatus: 'Draft',
        supportStatus: EIP_SUPPORT_STATUS.NOT_CLEAR,
      },
      {
        eipName: 'ERC-7529: Contract Discovery and eTLD+1 Association',
        eipType: 'Standards Track: ERC',
        eipStatus: 'Draft',
        supportStatus: EIP_SUPPORT_STATUS.NOT_CLEAR,
      },
      {
        eipName: 'ERC-7579: Minimal Modular Smart Accounts',
        eipType: 'Standards Track: ERC',
        eipStatus: 'Draft',
        supportStatus: EIP_SUPPORT_STATUS.NOT_CLEAR,
      },
      {
        eipName: 'EIP-3085: wallet_addEthereumChain RPC Method',
        eipType: 'Standards Track: Interface',
        eipStatus: 'Review',
        supportStatus: EIP_SUPPORT_STATUS.SUPPORTED,
      },
      {
        eipName: 'EIP-4844: Shard Blob Transactions',
        eipType: 'Standards Track: Core',
        eipStatus: 'Review',
        supportStatus: EIP_SUPPORT_STATUS.SUPPORTED,
      },
      {
        eipName: 'ERC-5568: Well-Known Format for Required Actions',
        eipType: 'Standards Track: ERC',
        eipStatus: 'Review',
        supportStatus: EIP_SUPPORT_STATUS.NOT_CLEAR,
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
        supportStatus: EIP_SUPPORT_STATUS.SUPPORTED,
      },
      {
        eipName: 'EIP-1474: Remote procedure call specification',
        eipType: 'Standards Track: Interface',
        eipStatus: 'Stagnant',
        supportStatus: EIP_SUPPORT_STATUS.SUPPORTED,
      },
      {
        eipName: 'EIP-2015: wallet_updateEthereumChain RPC Method',
        eipType: 'Standards Track: Interface',
        eipStatus: 'Stagnant',
        supportStatus: EIP_SUPPORT_STATUS.NOT_CLEAR,
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
        supportStatus: EIP_SUPPORT_STATUS.NOT_CLEAR,
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
        eipName: 'ERC-681: URL Format for Transaction Requests',
        eipType: 'Standards Track: ERC',
        eipStatus: 'Final',
        supportStatus: EIP_SUPPORT_STATUS.SUPPORTED,
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
        supportStatus: EIP_SUPPORT_STATUS.SUPPORTED,
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
        supportStatus: EIP_SUPPORT_STATUS.SUPPORTED,
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
  [SECTIONS.INCENTIVES]: {},
  [SECTIONS.SUPPORTED_CHAIN]: {},
  [SECTIONS.SECURITY_AUDIT]: {
    [SECURITY_AUDIT_TYPE.AUDIT]: [
      {
        auditor: 'Least Authority TFA GmbH',
        date: 'November 1, 2019',
        auditedVersion: '36c6082',
        currentVersion: 'dcd286e',
        relevance: 'Outdated',
        report:
          'https://leastauthority.com/static/publications/LeastAuthority-MetaMask-Permissions-Capnode-Audit-Report.pdf',
      },

      {
        auditor: 'Least Authority TFA GmbH',
        date: 'March 1, 2020',
        auditedVersion: 'N/A',
        currentVersion: '4169c24',
        relevance: 'Outdated',
        report:
          'https://leastauthority.com/static/publications/LeastAuthority-MetaMask-Plugin-System-LavaMoat-Audit-Report.pdf',
      },

      {
        auditor: 'Least Authority TFA GmbH',
        date: 'April 1, 2019',
        auditedVersion: 'N/A',
        currentVersion: '992e968, f870292',
        relevance: 'Outdated',
        report:
          'https://leastauthority.com/static/publications/LeastAuthority-MetaMask-Audit-Report.pdf',
      },
    ],
    [SECURITY_AUDIT_TYPE.BUG_BOUNTY]: [
      {
        platform: 'HackerOne',
        reward: '$1K - $50K',
        status: 'Active',
        scope: 'https://hackerone.com/metamask?type=team',
      },
    ],
  },
  [SECTIONS.INCIDENTS]: [],
  [SECTIONS.LEGAL_COMPLIANCE]: [
    [
      'Where is the company registered?',
      "This is important as it can impact the regulatory standards the company must adhere to, the legal protections available to users, and the company's overall credibility and trustworthiness.",
      'Texas, U.S.',
    ],
    [
      'Data Safety Policy',
      "It's essential for ensuring the privacy and security of user data, demonstrating the company's commitment to maintaining user trust and adhering to data protection regulations. It provides users with an understanding of what to expect regarding their personal information when using the wallet.",
      'https://consensys.io/privacy-policy',
    ],
    [
      'Website Cookie policy',
      'Website cookies in this wallet are used for:',
      'https://consensys.io/privacy-policy/cookies',
    ],
  ],
  [SECTIONS.LICENSE]: [
    {
      name: 'Metamask Extension',
      link: 'https://github.com/MetaMask/metamask-extension/blob/develop/LICENSE',
    },
    {
      name: 'Metamask Mobile',
      link: 'https://github.com/MetaMask/metamask-mobile/blob/main/LICENSE',
    },
  ],
};
