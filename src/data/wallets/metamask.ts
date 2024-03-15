import { WalletData, WalletSubSectionTypes } from '@/app/types';
import GithubIcon from '@/components/icons/GithubIcon';
import { BASE_URL } from '@/constants';

export const wallet_data: WalletData = {
  id: 'metamask',
  name: 'Metamask',
  icon: 'metamask.png',
  sections: [
    {
      id: 0,
      section_name: 'Stats',
      sub_sections: [
        {
          id: 0,
          sub_section_name: 'Downloads',
          type: WalletSubSectionTypes.STAT_CARDS,
          data: [
            {
              image: '/chrome.png',
              title: 'Chrome',
              stat: '10,000,000+',
            },
            {
              image: '/firefox.png',
              title: 'Firefox',
              stat: '491,097+',
            },
            {
              image: '/opera.png',
              title: 'Opera',
              stat: '359,633+',
            },
            {
              image: '/edge.png',
              title: 'Edge',
              stat: '2,000,000+',
            },
            {
              image: '/play-store.png',
              title: 'Android',
              stat: '10,000,000+',
            },
            {
              image: '/app-store.png',
              title: 'IOS',
              stat: '??',
            },
          ],
        },
        {
          id: 1,
          sub_section_name: 'Staking',
          type: WalletSubSectionTypes.DUNE_CHART,
          width: '100%',
          height: 600,
          iframe_urls: ['https://dune.com/embeds/1901264/3192714/'],
        },
        {
          id: 2,
          sub_section_name: 'Swap',
          type: WalletSubSectionTypes.DUNE_CHART,
          width: '100%',
          height: 600,
          iframe_urls: [
            'https://dune.com/embeds/1793048/2953820/',
            'https://dune.com/embeds/1793048/4456070/',
          ],
        },
        {
          id: 3,
          sub_section_name: 'Bridge',
          type: WalletSubSectionTypes.DUNE_CHART,
          width: '100%',
          height: 600,
          iframe_urls: [
            'https://dune.com/embeds/1767108/2914176/',
            'https://dune.com/embeds/1767108/2914417/',
            'https://dune.com/embeds/2372425/3889795/',
          ],
        },
      ],
    },
    {
      id: 1,
      section_name: 'Activity',
      sub_sections: [
        {
          id: 1,
          sub_section_name: 'Metamask Extension',
          section_icon: GithubIcon,
          type: WalletSubSectionTypes.GITHUB_HEATMAP,
          link: 'https://github.com/MetaMask/metamask-extension',
          repo: 'MetaMask/metamask-extension',
          data: 'https://api.github.com/repos/MetaMask/metamask-extension/stats/commit_activity',
        },
        {
          id: 2,
          sub_section_name: 'Metamask Mobile',
          section_icon: GithubIcon,
          type: WalletSubSectionTypes.GITHUB_HEATMAP,
          link: 'https://github.com/MetaMask/metamask-mobile',
          repo: 'MetaMask/metamask-mobile',
          data: 'https://api.github.com/repos/MetaMask/metamask-mobile/stats/commit_activity',
        },
        {
          id: 3,
          sub_section_name: 'Metamask Snaps',
          section_icon: GithubIcon,
          type: WalletSubSectionTypes.GITHUB_HEATMAP,
          link: 'https://github.com/MetaMask/snaps',
          repo: 'MetaMask/snaps',
          data: 'https://api.github.com/repos/MetaMask/snaps/stats/commit_activity',
        },
      ],
    },
    {
      id: 2,
      section_name: 'Security Analysis',
      sub_sections: [
        {
          id: 0,
          sub_section_name: 'Key Management',
          type: WalletSubSectionTypes.EXPLAINER,
          content: [
            {
              id: 0,
              type: 'image',
              src: `/wallets/metamask_key_management.png`,
              alt: 'Metamask Key Management',
              width: 2000,
              height: 1553,
            },
            {
              id: 1,
              type: 'html',
              html: '<p> Metamask allows users to use a password to access the key stored in the user’s local browser’s storage. </p> <p>In case of mobile wallet users can use a password OR biometrics to access the key stored in the user’s device.</p>More info on <a href="https://www.wispwisp.com/index.php/2020/12/25/how-metamask-stores-your-wallet-secret/">how MetaMask stores your wallet secret?</a>',
            },
          ],
        },
        {
          id: 1,
          sub_section_name: 'Account Management',
          type: WalletSubSectionTypes.EXPLAINER,
          content: [
            {
              id: 1,
              type: 'html',
              html: '<ul><li>EOA ✅</li><li>SCA ⚠️ (not supported natively, but could be supported using <a href="https://metamask.io/news/developers/aa-snap-democratizing-account-abstraction/">AA snap</a> plugin)</li></ul>',
            },
          ],
        },
        {
          id: 2,
          sub_section_name: 'Processes',
          type: WalletSubSectionTypes.EXPLAINER,
          content: [
            {
              id: 0,
              type: 'html',
              html: '<p>For each case, check, how this works and some benchmarks on cost and time used to perform the operation.</p>',
            },
            {
              id: 1,
              type: 'html',
              html: '<h2>Key generation</h2>',
            },
            {
              id: 2,
              type: 'image',
              src: `/wallets/secp256k1_key_generation.png`,
              alt: 'Metamask Key Generation',
              width: 2000,
              height: 417,
            },
            {
              id: 3,
              type: 'html',
              html: "<p>A random number selected from the secp256k1 elliptic curve serves as the private key. This key is then multiplied by a predefined point on the curve to generate the public key. The Ethereum address is derived from the last 20 bytes of the hashed public key. The 'seed phrase' is usually introduced for human-readable backup, enabling the deterministic derivation of private and public keys.</p>",
            },
            {
              id: 4,
              type: 'html',
              html: '<h2>Transaction process</h2>',
            },
            {
              id: 5,
              type: 'image',
              src: `/wallets/secp256k1_trx_sig.png`,
              alt: 'Metamask Transaction Signing',
              width: 2000,
              height: 417,
            },
            {
              id: 6,
              type: 'html',
              html: '<p>Signing Transactions: A transaction, containing details such as nonce(a sequential number), amount, gas price, and recipient address, is signed using the private key. This process, involving the ECDSA, a digital signature algorithm that uses elliptic curve cryptography and adopts secp256k1 as the curve, generates a signature consisting of values (r, s, v). The signature and the original transaction are then broadcast on the network.</p>',
            },
            {
              id: 7,
              type: 'image',
              src: `/wallets/eth_trx_verification.png`,
              alt: 'Metamask Transaction Verification',
              width: 2000,
              height: 417,
            },
            {
              id: 8,
              type: 'html',
              html: "<p>Verifying Transactions: Once a transaction reaches Ethereum nodes, it undergoes a validation process in the node's mempool. To verify the signer, the nodes use the signature and hashed transaction to derive the sender's public key and confirm the transaction’s authenticity by matching the derived address with the sender's.</p>",
            },
            {
              id: 9,
              type: 'html',
              html: '<h2>Recovery process</h2>',
            },
            {
              id: 10,
              type: 'html',
              html: '<p>Users are suggested to maintain a secure back up of the seed phrase/private key(s) in order to recover their account if needed. If a user loses their private key/seed phrase, then they cannot recover their account.</p>',
            },
            {
              id: 11,
              type: 'html',
              html: '<h2>Migrating from another wallet</h2>',
            },
            {
              id: 12,
              type: 'html',
              html: '<ul><li>seed phrase import supported (seed format supported: 12/24)</li><li>private key import supported</li><li>Hierarchical deterministic (HD) address derivation</li></ul>',
            },
            {
              id: 13,
              type: 'html',
              html: '<h2>Migrating to another wallet</h2>',
            },
            {
              id: 14,
              type: 'html',
              html: '<p>You can export your private key/seed phrase and import that to any other compatible wallet.</p>',
            },
          ],
        },
      ],
    },
    {
      id: 3,
      section_name: 'Features',
      sub_sections: [
        {
          id: 0,
          sub_section_name: 'List of all Features',
          type: WalletSubSectionTypes.EXPLAINER,
          content: [
            {
              id: 0,
              type: 'html',
              html: '<ul><li>KYC required?<ul><li>No in case of standard metamask extention/mobile, but Yes in case of metamask institutional</li></ul></li><li>Does it support social login?<ul><li>No (could be supported in future using snaps)</li></ul></li><li>Does it support account abstraction? -- more specifics on does the support work?<ul><li>No (could be supported in future using snaps)</li></ul></li><li><strong>Screenshot possibility while doing backup</strong><ul><li>cannot take screenshot on mobile (but possible on browser)</li></ul></li><li>portfolio tracking<ul><li>Yes</li></ul></li><li>on-ramp support?<ul><li>Yes</li></ul></li><li>off-ramp support?<ul><li>Yes</li></ul></li><li>extensibility: can you add 3rd party modules to the wallet to extend the functionality of the wallet?<ul><li>Yes, using MM snaps (currently in beta, will be open in future)</li><li>discuss if we can add more features using modules or not (in case of SCA)</li></ul></li><li>ens support?<ul><li><strong>Mainnet</strong>: whether a user is able to send transactions to a standard ENS (e.g. user.eth) on mainnet → YES</li><li><strong>Subdomains</strong>: whether a user is able to send transactions to an ENS subdomain (e.g. hot.user.eth) on mainnet → YES</li><li><strong>Offchain</strong>: whether a user is able to send transactions to an ENS with an offchain resolver on mainnet.</li><li><strong>L2s</strong>: whether a user is able to send transactions to an ENS on an L2 (tested on Optimism).</li><li><strong>Custom</strong>: whether a user is able to send transactions to an ENS with a custom domain on mainnet (e.g. user.cb.id) → YES</li><li><strong>Usernames</strong>: whether a user can get a free (offchain) ENS inside the wallet → NO</li></ul></li><li>Watching wallets (like rabby)<ul><li>No</li></ul></li><li>ability to point to custom rpc<ul><li>Yes</li></ul></li><li>swap support<ul><li>Yes</li></ul></li><li>bridge support<ul><li>Yes</li></ul></li><li>stake support<ul><li>yes</li></ul></li><li>transaction simulation<ul><li>Using snaps like tenderly tx preview</li></ul></li><li>view nfts<ul><li>yes</li></ul></li><li>dapp browser<ul><li>yes (in mobile wallet)</li></ul></li><li>gas fees customization<ul><li>yes</li></ul></li><li>token importing<ul><li>yes</li></ul></li><li><a href="https://twitter.com/hanni_abu/status/1732164884098331087">connection options (wallet connect vs a more open standard)</a><ul><li>injected (browser)</li><li>wallet connect (mobile)</li></ul></li><li><a href="https://github.com/ethereum-lists/wallets/issues/1">which hardware wallets does it support?</a><ul><li>Ledger</li><li>Trezor</li><li>Lattice</li><li>Keystone (via QR code)</li><li>AirGap Vault (via QR code)</li><li>CoolWallet (via QR code)</li><li>D\'Cent (via QR code)</li><li>Ngrave (coming soon)</li></ul></li></ul>',
            },
          ],
        },
      ],
    },
    {
      id: 4,
      section_name: 'Supported Standards',
      sub_sections: [
        {
          id: 1,
          sub_section_name: 'EIP Support Status',
          type: WalletSubSectionTypes.EIP_SUPPORT_TABLE,
          columns: [
            {
              title: 'EIP name',
              dataIndex: 'eipName',
            },
            {
              title: 'EIP type',
              dataIndex: 'eipType',
            },
            {
              title: 'EIP status',
              dataIndex: 'eipStatus',
            },
            {
              title: 'Wallet Support status',
              dataIndex: 'status',
              align: 'center',
            },
          ],
          data: [
            {
              eipName: 'EIP-3091: Block Explorer API Routes',
              eipType: 'Standards Track: Interface',
              eipStatus: 'Draft',
              supportStatus: '❓',
            },
            {
              eipName: 'ERC-4337: Account Abstraction Using Alt Mempool',
              eipType: 'Standards Track: ERC',
              eipStatus: 'Draft',
              supportStatus: '❎',
            },
            {
              eipName: 'ERC-6900: Modular Smart Contract Accounts and Plugins',
              eipType: 'Standards Track: ERC',
              eipStatus: 'Draft',
              supportStatus: '❓',
            },
            {
              eipName: 'EIP-7039: Scheme-Handler Discovery Option for Wallets',
              eipType: 'Standards Track: Interface',
              eipStatus: 'Draft',
              supportStatus: '❓',
            },
            {
              eipName: 'EIP-7377: Migration Transaction',
              eipType: 'Standards Track: Core',
              eipStatus: 'Stagnant',
              supportStatus: '❓',
            },
            {
              eipName: 'ERC-7484: Registry Extension for ERC-7579',
              eipType: 'Standards Track: ERC',
              eipStatus: 'Draft',
              supportStatus: '❓',
            },
            {
              eipName: 'ERC-7529: Contract Discovery and eTLD+1 Association',
              eipType: 'Standards Track: ERC',
              eipStatus: 'Draft',
              supportStatus: '❓',
            },
            {
              eipName: 'ERC-7579: Minimal Modular Smart Accounts',
              eipType: 'Standards Track: ERC',
              eipStatus: 'Draft',
              supportStatus: '❓',
            },
            {
              eipName: 'EIP-3085: wallet_addEthereumChain RPC Method',
              eipType: 'Standards Track: Interface',
              eipStatus: 'Review',
              supportStatus: '✅',
            },
            {
              eipName: 'EIP-4844: Shard Blob Transactions',
              eipType: 'Standards Track: Core',
              eipStatus: 'Review',
              supportStatus: '✅',
            },
            {
              eipName: 'ERC-5568: Well-Known Format for Required Actions',
              eipType: 'Standards Track: ERC',
              eipStatus: 'Review',
              supportStatus: '❓',
            },
            {
              eipName: 'ERC-831: URI Format for Ethereum',
              eipType: 'Standards Track: ERC',
              eipStatus: 'Stagnant',
              supportStatus: '❓',
            },
            {
              eipName: 'EIP-1102: Opt-in account exposure',
              eipType: 'Standards Track: Interface',
              eipStatus: 'Stagnant',
              supportStatus: '✅',
            },
            {
              eipName: 'EIP-1474: Remote procedure call specification',
              eipType: 'Standards Track: Interface',
              eipStatus: 'Stagnant',
              supportStatus: '✅',
            },
            {
              eipName: 'EIP-2015: wallet_updateEthereumChain RPC Method',
              eipType: 'Standards Track: Interface',
              eipStatus: 'Stagnant',
              supportStatus: '❓',
            },
            {
              eipName: 'ERC-3224: Described Data',
              eipType: 'Standards Track: ERC',
              eipStatus: 'Stagnant',
              supportStatus: '🛑',
            },
            {
              eipName:
                'EIP-3326: Wallet Switch Ethereum Chain RPC Method (wallet_switchEthereumChain)',
              eipType: 'Standards Track: Interface',
              eipStatus: 'Stagnant',
              supportStatus: '✅',
            },
            {
              eipName: 'ERC-4430: Described Transactions',
              eipType: 'Standards Track: ERC',
              eipStatus: 'Stagnant',
              supportStatus: '🛑',
            },
            {
              eipName: 'EIP-5003: Insert Code into EOAs with AUTHUSURP',
              eipType: 'Standards Track: Core',
              eipStatus: 'Stagnant',
              supportStatus: '❓',
            },
            {
              eipName: 'ERC-5139: Remote Procedure Call Provider Lists',
              eipType: 'Standards Track: ERC',
              eipStatus: 'Stagnant',
              supportStatus: '❓',
            },
            {
              eipName: 'EIP-5792: Wallet Function Call API',
              eipType: 'Standards Track: Interface',
              eipStatus: 'Stagnant',
              supportStatus: '❓',
            },
            {
              eipName: 'ERC-6384: Human-readable offline signatures',
              eipType: 'Standards Track: ERC',
              eipStatus: 'Stagnant',
              supportStatus: '❓',
            },
            {
              eipName: 'ERC-681: URL Format for Transaction Requests',
              eipType: 'Standards Track: ERC',
              eipStatus: 'Final',
              supportStatus: '✅',
            },
            {
              eipName: 'EIP-712: Typed structured data hashing and signing',
              eipType: 'Standards Track: Interface',
              eipStatus: 'Final',
              supportStatus: '✅',
            },
            {
              eipName: 'EIP-747: wallet_watchAsset RPC Method',
              eipType: 'Standards Track: Interface',
              eipStatus: 'Final',
              supportStatus: '✅',
            },
            {
              eipName: 'EIP-1193: Ethereum Provider JavaScript API',
              eipType: 'Standards Track: Interface',
              eipStatus: 'Final',
              supportStatus: '✅',
            },
            {
              eipName:
                'ERC-1271: Standard Signature Validation Method for Contracts',
              eipType: 'Standards Track: ERC',
              eipStatus: 'Final',
              supportStatus: '❎',
            },
            {
              eipName: 'EIP-1559: Fee market change for ETH 1.0 chain',
              eipType: 'Standards Track: Core',
              eipStatus: 'Final',
              supportStatus: '✅',
            },
            {
              eipName: 'EIP-2255: Wallet Permissions System',
              eipType: 'Standards Track: Interface',
              eipStatus: 'Final',
              supportStatus: '✅',
            },
            {
              eipName: 'EIP-2930: Optional access lists',
              eipType: 'Standards Track: Core',
              eipStatus: 'Final',
              supportStatus: '✅',
            },
            {
              eipName: 'EIP-6492: Signature Validation for Predeploy Contracts',
              eipType: 'Standards Track: ERC',
              eipStatus: 'Final',
              supportStatus: '❓',
            },
            {
              eipName: 'EIP-6963: Multi Injected Provider Discovery',
              eipType: 'Standards Track: Interface',
              eipStatus: 'Final',
              supportStatus: '✅',
            },
            {
              eipName: 'ERC-945: wallet_scanQRCode RPC Method',
              eipType: '',
              eipStatus: '',
              supportStatus: '✅',
            },
            {
              eipName: 'RIP-7560: Native Account Abstraction',
              eipType: '',
              eipStatus: '',
              supportStatus: '❓',
            },
            {
              eipName: 'ERC-7555: Single Sign-On for Account Discovery',
              eipType: '',
              eipStatus: '',
              supportStatus: '❓',
            },
          ],
        },
      ],
    },
    {
      id: 5,
      section_name: 'Incentives',
      sub_sections: [
        {
          id: 0,
          sub_section_name: 'List of all incentive programs',
          type: WalletSubSectionTypes.EXPLAINER,
          content: [
            {
              id: 0,
              type: 'html',
              html: '<p>No incentives</p>',
            },
          ],
        },
      ],
    },
    {
      id: 6,
      section_name: 'Chain Support',
      sub_sections: [
        {
          id: 0,
          sub_section_name:
            'List of all chains supported across different platforms',
          type: WalletSubSectionTypes.EXPLAINER,
          content: [
            {
              id: 0,
              type: 'html',
              html: '<p><a href="https://github.com/MetaMask/metamask-extension/blob/16b62a8bb6a2ca89958a988be56903bd9fa13f89/shared/constants/network.ts">Metamask Extension Chain Support</a> + custom EVM chain support + any chain support possible in future using snaps.</p><p><a href="https://github.com/MetaMask/metamask-extension/blob/16b62a8bb6a2ca89958a988be56903bd9fa13f89/shared/constants/network.ts">Metamask Mobile Chain Support</a> + custom EVM chain support + any chain support possible in future using snaps.</p>',
            },
          ],
        },
      ],
    },
    {
      id: 7,
      section_name: 'Security Audits',
      sub_sections: [
        {
          id: 0,
          sub_section_name: 'List of all security audits',
          type: WalletSubSectionTypes.SECURITY_AUDIT,
          audits: [
            [
              'Least Authority TFA GmbH',
              'November 1, 2019',
              '36c6082',
              'dcd286e',
              'Outdated',
              'https://leastauthority.com/static/publications/LeastAuthority-MetaMask-Permissions-Capnode-Audit-Report.pdf',
            ],
            [
              'Least Authority TFA GmbH',
              'March 1, 2020',
              'N/A',
              '4169c24',
              'Outdated',
              'https://leastauthority.com/static/publications/LeastAuthority-MetaMask-Plugin-System-LavaMoat-Audit-Report.pdf',
            ],
            [
              'Least Authority TFA GmbH',
              'April 1, 2019',
              'N/A',
              '992e968, f870292',
              'Outdated',
              'https://leastauthority.com/static/publications/LeastAuthority-MetaMask-Audit-Report.pdf',
            ],
          ],
          bug_bounties: [
            [
              'HackerOne',
              '$1K - $50K',
              'Active',
              'https://hackerone.com/metamask?type=team',
            ],
          ],
        },
      ],
    },
    {
      id: 8,
      section_name: 'Past Incidents',
      sub_sections: [
        {
          id: 0,
          sub_section_name:
            'The table provides a detailed record of any previous security incidents associated with the crypto wallet. This includes breaches, attacks, or any other events that might have compromised the wallet`s security or user data.',
          type: WalletSubSectionTypes.DATA_TABLE,
          columns: ['Incident', 'Type', 'Date', 'Severity', 'Status'],
          data: [],
        },
      ],
    },
    {
      id: 9,
      section_name: 'Legal Compliance',
      sub_sections: [
        {
          id: 0,
          sub_section_name:
            "Legal Compliance refers to the wallet's adherence to relevant laws, regulations, and guidelines in the jurisdictions in which it operates. This includes regulations regarding user data privacy, anti-money laundering (AML), Know Your Customer (KYC) processes, and more. Compliance ensures that the wallet operates in a legal and ethical manner, providing users with a secure and trustworthy platform for managing their digital assets.",
          type: WalletSubSectionTypes.DATA_TABLE,

          data: [
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
        },
      ],
    },
    {
      id: 10,
      section_name: 'License',
      sub_sections: [
        {
          id: 0,
          sub_section_name: '',
          type: WalletSubSectionTypes.EXPLAINER,
          content: [
            {
              id: 0,
              type: 'html',
              html: '<ul><li><a href="https://github.com/MetaMask/metamask-extension/blob/develop/LICENSE">Metamask Extension LICENSE</a></li><li><a href="https://github.com/MetaMask/metamask-mobile/blob/main/LICENSE">Metamask Mobile LICENSE</a></li></ul>',
            },
          ],
        },
      ],
    },
  ],
};
