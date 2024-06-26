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
import MetamaskSecurityAnalysis from './MetamaskSecurityAnalysis';

const metamask: Wallet = {
  [SECTIONS.STATS]: {
    [STAT_SECTIONS.DOWNLOADS]: {
      [WALLET_PLATFORM.CHROME]: '10,000,000+',
      [WALLET_PLATFORM.FIREFOX]: '491,097+',
      [WALLET_PLATFORM.OPERA]: '359,633+',
      [WALLET_PLATFORM.EDGE]: '2,000,000+',
      [WALLET_PLATFORM.ANDROID]: '10,000,000+',
      [WALLET_PLATFORM.IOS]: '??',
      [WALLET_PLATFORM.WINDOWS]: '0',
      [WALLET_PLATFORM.MAC]: '0',
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
  [SECTIONS.SECURITY_ANALYSIS]: MetamaskSecurityAnalysis,
  [SECTIONS.FEATURES]: {
    [FEATURE_TYPE.IN_APP]: [
      {
        feature: 'KYC required',
        description: '',
        isSupported: true,
      },
      {
        feature: 'Social login',
        description: '',
        isSupported: false,
        remark: 'Could be supported in future using snaps',
      },
      {
        feature: 'Email login',
        description: '',
        isSupported: false,
        remark: 'Could be supported in future using snaps',
      },
      {
        feature: 'Passkey login',
        description: '',
        isSupported: false,
        remark: 'Could be supported in future using snaps',
      },
      {
        feature: 'Smart Account support',
        description: '',
        isSupported: false,
        remark:
          'Experimental Support using snaps: https://metamask.io/news/developers/aa-snap-democratizing-account-abstraction/',
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
      [ENSSupportType.MAINNET]: {
        isSupported: true,
        description:
          'Whether a user is able to send transactions to a standard ENS (e.g. user.eth) on mainnet',
      },
      [ENSSupportType.SUBDOMAINS]: {
        isSupported: true,
        description:
          'Whether a user is able to send transactions to an ENS subdomain (e.g. hot.user.eth) on mainnet ',
      },
      [ENSSupportType.OFFCHAIN]: {
        isSupported: false,
        description:
          'Whether a user is able to send transactions to an ENS with an offchain resolver on mainnet.',
      },
      [ENSSupportType.L2]: {
        isSupported: true,
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
        imgUrl: '/wallets/ledger/ledger.webp',
      },
      {
        name: 'Trezor',
        imgUrl: '/wallets/trezor/trezor.webp',
      },
      {
        name: 'Lattice',
        imgUrl: '/wallets/grid_plus/grid_plus.webp',
      },
      {
        name: 'Keystone',
        imgUrl: '/wallets/keystone/keystone.png',
      },
      {
        name: 'AirGap Vault',
        imgUrl: '/wallets/airgap/airgap.svg',
      },
      {
        name: 'CoolWallet',
        imgUrl: '/wallets/coolwallet/coolwallet.svg',
      },
      {
        name: "D'Cent",
        imgUrl: '/wallets/dcent/dcent.svg',
      },
    ],
  },
  [SECTIONS.SUPPORTED_STANDARD]: {
    [SUPPORTED_STANDARD_TYPE.SUPPORTED_EIP]: [
      {
        eipName: 'ERC-4337: Account Abstraction Using Alt Mempool',
        eipType: 'Standards Track: ERC',
        eipStatus: 'Draft',
        supportStatus: EIP_SUPPORT_STATUS.WIP,
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
        supportStatus: EIP_SUPPORT_STATUS.NOT_SUPPORTED,
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
        supportStatus: EIP_SUPPORT_STATUS.EIP_NOT_READY,
      },
    ],
  },
  [SECTIONS.INCENTIVES]: undefined,
  [SECTIONS.SECURITY]: {
    [SECURITY_AUDIT_TYPE.AUDIT]: [
      {
        auditor: 'Cure53',
        date: 'April 27, 2016',
        auditedVersion: [
          {
            name: 'Extension (0e6bc6)',
            link: 'https://github.com/MetaMask/metamask-extension/commit/0e6bc6647ee5c0554a4e149514c87ca4d8585d2c',
          },
        ],

        currentVersion: [
          {
            name: 'Extension (0e6bc6)',
            link: 'https://github.com/MetaMask/metamask-extension/commit/0e76174df6d6efb1828098b169b58cfed80d9012',
          },
        ],

        relevance: AUDIT_RELEVANCE.OUTDATED,
        report: 'https://metamask.io/files/pentest-report_metamask.pdf',
      },

      {
        auditor: 'Least Authority TFA GmbH',
        date: 'April 9, 2019',
        auditedVersion: [
          {
            name: 'Core (92cf95)',
            link: 'https://github.com/MetaMask/core/commit/92cf95476c0732a13c5e30cadfbf9296cdd7b1cf',
          },
          {
            name: 'Mobile (b57476)',
            link: 'https://github.com/MetaMask/metamask-mobile/commit/b57476b142cedbddf725f8787b668ca64642b4c2',
          },
          {
            name: 'Keyring Controller (9e180e)',
            link: 'https://github.com/MetaMask/KeyringController/commit/9e180e5b10c0ceeb437f6d44360b525b3083c723',
          },
          {
            name: 'Browser Passworder (089893)',
            link: 'https://github.com/MetaMask/browser-passworder/commit/089893779ce366a9f0ee038b9c71708649fc0e1d',
          },
        ],

        currentVersion: [
          {
            name: 'Core (aada25)',
            link: 'https://github.com/MetaMask/core/commit/aada25179a3685fd3583293d61740b2571729726',
          },
          {
            name: 'Mobile (973981)',
            link: 'https://github.com/MetaMask/metamask-mobile/commit/973981620a5ce9dbdae7e622c3b7da11bc9cba13',
          },
          {
            name: 'Keyring Controller (d5ae5c)',
            link: 'https://github.com/MetaMask/KeyringController/commit/d5ae5c809751acebb9deb5b755b90455f2b3b7c4',
          },
          {
            name: 'Browser Passworder (1eb936)',
            link: 'https://github.com/MetaMask/browser-passworder/commit/1eb9361176cea81d24fedf42697d31b112090ab2',
          },
        ],

        relevance: AUDIT_RELEVANCE.OUTDATED,
        report:
          'https://metamask.io/files/LeastAuthority-MetaMask-Audit-Report.pdf',
      },

      {
        auditor: 'Least Authority TFA GmbH',
        date: 'March 4, 2020',
        auditedVersion: [
          {
            name: 'Snaps (7d758d)',
            link: 'https://github.com/MetaMask/metamask-snaps-beta/commit/7d758d335279bd0d25e3a9c170fcf60709eb7828',
          },
          {
            name: 'Lavamoat Browserify (9bd7fa)',
            link: 'https://github.com/LeastAuthority/lavamoat-browserify/commit/9bd7fad6eddd54691caf55ee37a64b6f0bb1057a',
          },
        ],

        currentVersion: [
          {
            name: 'Snaps (4169c2)',
            link: 'https://github.com/MetaMask/metamask-snaps-beta/commit/4169c2445e025631fa963e03da24379607a9beab',
          },
          {
            name: 'Lavamoat Browserify (9bd7fa)',
            link: 'https://github.com/LeastAuthority/lavamoat-browserify/commit/9bd7fad6eddd54691caf55ee37a64b6f0bb1057a',
          },
        ],

        relevance: AUDIT_RELEVANCE.OUTDATED,
        report:
          'https://metamask.io/files/LeastAuthority-MetaMask-Plugin-System-LavaMoat-Audit-Report.pdf',
      },

      {
        auditor: 'Cure53',
        date: 'March 3, 2023',
        auditedVersion: [
          {
            name: 'Key Tree (7b6bec)',
            link: 'https://github.com/MetaMask/key-tree/commit/7b6becf3edd8e22f6cdab40f3724bd93e15bd5c4',
          },
        ],
        currentVersion: [
          {
            name: 'Key Tree (4411c8)',
            link: 'https://github.com/MetaMask/key-tree/commit/4411c8670a0e3cba01b11bb1f748eb88eb4bfcb3',
          },
        ],

        relevance: AUDIT_RELEVANCE.OUTDATED,
        report: 'https://metamask.io/files/key-tree-audit-report.pdf',
      },

      {
        auditor: 'Least Authority TFA GmbH',
        date: 'September 8, 2023',
        auditedVersion: [
          {
            name: 'Extension (b963c9)',
            link: 'https://github.com/MetaMask/metamask-extension/commit/b963c9a40e6fea02b972f30d43bb893d9d7e84c7',
          },
        ],
        currentVersion: [
          {
            name: 'Extension (0e7617)',
            link: 'https://github.com/MetaMask/metamask-extension/commit/0e76174df6d6efb1828098b169b58cfed80d9012',
          },
        ],
        relevance: AUDIT_RELEVANCE.OUTDATED,
        report:
          'https://metamask.io/files/least-authority-metamask-snaps-audit-extension.pdf',
      },

      {
        auditor: 'Least Authority TFA GmbH',
        date: 'September 8, 2023',
        auditedVersion: [
          {
            name: 'Snaps (4b6bcf)',
            link: 'https://github.com/MetaMask/snaps/commit/4b6bcfa933b2f09a12baebbb026b8ef160217857',
          },
        ],

        currentVersion: [
          {
            name: 'Snaps (866945)',
            link: 'https://github.com/MetaMask/snaps/commit/86694591ce95c8f9552dcd1f16fcbe527fbe9d6e',
          },
        ],

        relevance: AUDIT_RELEVANCE.OUTDATED,
        report:
          'https://metamask.io/files/least-authority-metamask-snaps-audit-api.pdf',
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
export default metamask;
