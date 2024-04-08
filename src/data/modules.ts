const modules = [
  {
    name: 'Saving Accounts',
    description:
      'Ability to configure savings accounts (sub-accounts) with specific ongoing allocations (e.g. 5% of all deposits) and a specific yield-earning strategy',
    category: ['Defi'],
    module_type: ['Plugin/Executor'],
    compatible_sca_frameworks: ['Biconomy', 'ERC-7579', 'Kernel', 'Safe'],
    audits: '',
    implementation:
      '<a href="https://github.com/rhinestonewtf/modulekit/blob/main/examples/src/AutoSavings/AutoSavings.sol" target="_blank">Rhinestone (AutoSavings)</a>',
    notes: 'Rhinestone module not yet compatible with Safe, Biconomy, Kernel.',
  },
  {
    name: 'Pull Payment (subscription)',
    description:
      'Ability to set up a reoccurring transaction triggered by a merchant',
    category: ['Defi'],
    module_type: ['Plugin/Executor'],
    compatible_sca_frameworks: [
      'Biconomy',
      'ERC-6900',
      'ERC-7579',
      'Kernel',
      'Modular Account (Alchemy)',
      'Safe',
    ],
    audits:
      '<a href="https://github.com/alchemyplatform/modular-account/tree/develop/audits" target="_blank">Modular Account (Alchemy)</a>',
    implementation: `<a href="https://github.com/rhinestonewtf/modulekit/blob/main/examples/src/AutoSend/AutoSend.sol" target="_blank"> Rhinestone (AutoSend) </a>
      <br />
      Alchemy (implemented with <a href="https://github.com/alchemyplatform/modular-account/blob/v1.0.x/src/plugins/session/SessionKeyPlugin.sol" target="_blank">SessionKeyPlugin</a>)
      <br />
      Libree (implemented as stand alone)`,
    notes: 'Rhinestone module not yet compatible with Safe, Biconomy, Kernel.',
  },
  {
    name: 'Buy Now Pay Later / DeFi Credit',
    description:
      'A decentralized credit module that utilizes flash lending from a DeFi protocol of choice',
    category: ['Defi'],
    module_type: ['Plugin/Executor'],
    compatible_sca_frameworks: [
      'Biconomy',
      'ERC-6900',
      'ERC-7579',
      'Kernel',
      'Modular Account (Alchemy)',
      'Safe',
    ],
    audits: '',
    implementation:
      'Rhinestone (<a href="https://github.com/rhinestonewtf/modulekit/blob/main/examples/src/ColdStorage/FlashloanLender.sol" target="_blank">FlashloanLender</a>, <a href="https://github.com/rhinestonewtf/modulekit/blob/main/examples/src/ColdStorage/FlashloanCallback.sol" target="_blank">FlashloanCallback</a>)',
    notes: 'Rhinestone module not yet compatible with Safe, Biconomy, Kernel.',
  },
  {
    name: 'DollarCostAverage',
    description: 'Dollar-cost averaging strategy natively in the wallet',
    category: ['Defi'],
    module_type: ['Plugin/Executor'],
    compatible_sca_frameworks: [
      'Biconomy',
      'ERC-6900',
      'ERC-7579',
      'Kernel',
      'Modular Account (Alchemy)',
      'Safe',
    ],
    audits: '',
    implementation:
      'Rhinestone (<a href="https://github.com/rhinestonewtf/modulekit/blob/main/examples/src/DollarCostAverage/DollarCostAverage.sol" target="_blank">DollarCostAverage</a>)',
    notes: 'Rhinestone module not yet compatible with Safe, Biconomy, Kernel.',
  },
  {
    name: 'P2P Flash Loans',
    description:
      'Users can specify and create flash loans for ERC20 and ERC721 (e.g. offer monkey pic with X access rights for Y timeframe or Z transaction — such as a specific utility claim)',
    category: ['Defi'],
    module_type: ['Plugin/Executor'],
    compatible_sca_frameworks: ['Biconomy', 'ERC-7579', 'Kernel', 'Safe'],
    audits: '',
    implementation:
      'Rhinestone (<a href="" target="_blank">FlashloanLender</a>, <a href="" target="_blank">FlashloanCallback</a>)',
    notes: 'Rhinestone module not yet compatible with Safe, Biconomy, Kernel.',
  },
  {
    name: 'Multisig (equal weights)',
    description:
      'Threshold signature scheme of M/N where all N signers have equal weight.',
    category: ['General'],
    module_type: ['Validator'],
    compatible_sca_frameworks: ['ERC-6900', 'Modular Account (Alchemy)'],
    audits: 'Completed. Link to be updated.',
    implementation: 'Maple/Alchemy (Link coming soon)',
    notes: '',
  },
  {
    name: 'Multisig (unequal weights)',
    description:
      'Threshold signature scheme of M/N where all N signers can have different weights.',
    category: ['General'],
    module_type: ['Validator'],
    compatible_sca_frameworks: ['ERC-6900', 'Modular Account (Alchemy)'],
    audits: '',
    implementation: 'ERC-6900 ecosystem (Link coming soon)',
    notes: '',
  },
  {
    name: 'Multi-owner',
    description: '',
    category: [''],
    module_type: [''],
    compatible_sca_frameworks: ['ERC-6900', 'Modular Account (Alchemy)'],
    audits:
      '<a href="https://github.com/alchemyplatform/modular-account/tree/develop/audits" target="_blank">Modular Account (Alchemy)</a>',
    implementation:
      'Alchemy (<a href="https://github.com/alchemyplatform/modular-account/blob/v1.0.x/src/plugins/owner/MultiOwnerPlugin.sol" target="_blank">MultiOwnerPlugin</a>)',
    notes: '',
  },
  {
    name: 'DeFi position management',
    description:
      'Put in place a stop loss, take profit, or repay triggers to prevent liquidation and maximize returns.',
    category: ['Defi'],
    module_type: ['Plugin/Executor'],
    compatible_sca_frameworks: [''],
    audits: '',
    implementation: '',
    notes: '',
  },
  {
    name: 'Deadman Switch',
    description:
      'Set up an inheritance system that transfers the account keys to a dedicated signer if the user does not interact with the account for a specified time period.',
    category: ['General'],
    module_type: ['Hook, Validator'],
    compatible_sca_frameworks: [
      'Biconomy',
      'ERC-6900',
      'ERC-7579',
      'Kernel',
      'Modular Account (Alchemy)',
      'Safe',
    ],
    audits: '',
    implementation: `
    Rhinestone (<a href="https://github.com/rhinestonewtf/modulekit/blob/main/examples/src/DeadmanSwitch/DeadmanSwitch.sol" target="_blank">DeadmanSwitch</a>)
    <br />
    Kernel (<a href="https://github.com/zerodevapp/kernel_v3/blob/master/src/validator/WeightedECDSAValidator.sol" target="_blank">WeightedECDSAValidator</a>)
    <br />
    Rolla — Kernel (<a href="https://github.com/RollaProject/kernel/blob/feat/session_key_owned/src/validator/KillSwitchValidator.sol" target="_blank">KillSwitchValidator</a>)
    `,
    notes:
      'KillSwitchValidator has been retired and replaced with the WeightedECDSAValidator.',
  },
  {
    name: 'ColdStorage',
    description:
      'Install a hook that prevents certain assets from being traded unless certain high-security measures are met (e.g. 2FA or multi-sig)',
    category: ['Security'],
    module_type: ['Hook, Plugin/Executor'],
    compatible_sca_frameworks: [
      'Biconomy',
      'ERC-6900',
      'ERC-7579',
      'Kernel',
      'Modular Account (Alchemy)',
      'Safe',
    ],
    audits: '',
    implementation: `
    Rhinestone (<a href="https://github.com/rhinestonewtf/modulekit/blob/main/examples/src/ColdStorage/ColdStorageExecutor.sol" target="_blank">ColdStorageExecutor</a>, <a href="https://github.com/rhinestonewtf/modulekit/blob/main/examples/src/ColdStorage/ColdStorageHook.sol" target="_blank">ColdStorageHook</a>)
    <br />
    Alchemy (different implementation requirements - <a href="https://github.com/alchemyplatform/aa-virtual-cold-storage/blob/main/contracts/src/ColdStoragePlugin.sol" target="_blank">ColdStoragePlugin</a>, <a href="https://aa-virtual-cold-storage.vercel.app/" target="_blank">demo</a>)
    `,
    notes: 'Rhinestone module not yet compatible with Safe, Biconomy, Kernel.',
  },
  {
    name: 'Spending caps',
    description:
      'Allow users to set a max transfer per day/week/month unless the module is removed / disabled',
    category: ['Security'],
    module_type: ['Hook, Plugin/Executor'],
    compatible_sca_frameworks: [''],
    audits:
      '<a href="https://github.com/alchemyplatform/modular-account/tree/develop/audits" target="_blank">Modular Account (Alchemy)</a>',
    implementation:
      'Alchemy (implemented with <a href="https://github.com/alchemyplatform/modular-account/blob/v1.0.x/src/plugins/session/SessionKeyPlugin.sol" target="_blank">SessionKeyPlugin</a>)',
    notes: '',
  },
  {
    name: 'ERC1271PrehashValidator',
    description: '',
    category: [''],
    module_type: ['Validator'],
    compatible_sca_frameworks: ['Biconomy', 'ERC-7579', 'Kernel', 'Safe'],
    audits: '',
    implementation:
      '<a href="https://github.com/rhinestonewtf/modulekit/blob/main/examples/src/ERC1271PreHash/ERC1271PrehashValidator.sol" target="_blank">Rhinestone</a>',
    notes: 'Rhinestone module not yet compatible with Safe, Biconomy, Kernel.',
  },
  {
    name: 'MultiFactor',
    description: 'Multi-plex multiple validators together',
    category: [''],
    module_type: ['Validator'],
    compatible_sca_frameworks: ['Biconomy', 'ERC-7579', 'Kernel', 'Safe'],
    audits: '',
    implementation:
      '<a href="https://github.com/rhinestonewtf/modulekit/tree/main/examples/src/MultiFactor" target="_blank">Rhinestone</a>',
    notes: 'Rhinestone module not yet compatible with Safe, Biconomy, Kernel.',
  },
  {
    name: 'OwnableValidator',
    description: 'Simple ECDSA validator',
    category: [''],
    module_type: ['Validator'],
    compatible_sca_frameworks: [
      'Biconomy',
      'ERC-6900',
      'ERC-7579',
      'Kernel',
      'Modular Account (Alchemy)',
      'Safe',
    ],
    audits: '',
    implementation: `
    <a href="https://github.com/rhinestonewtf/modulekit/blob/main/examples/src/OwnableValidator/OwnableValidator.sol" target="_blank">Rhinestone</a>
    <br />
    ERC-6900 ecosystem (Link coming soon)`,
    notes: 'Rhinestone module not yet compatible with Safe, Biconomy, Kernel.',
  },
  {
    name: 'ScheduledOrders',
    description: 'Execute swap orders on a predetermined schedule',
    category: ['General'],
    module_type: ['Plugin/Executor'],
    compatible_sca_frameworks: ['Biconomy', 'ERC-7579', 'Kernel', 'Safe'],
    audits: '',
    implementation:
      '<a href="https://github.com/rhinestonewtf/modulekit/blob/main/examples/src/ScheduledTransactions/ScheduledOrders.sol" target="_blank">Rhinestone</a>',
    notes: 'Rhinestone module not yet compatible with Safe, Biconomy, Kernel.',
  },
  {
    name: 'ScheduledTransfers',
    description: 'Execute transfers on a predetermined schedule',
    category: ['General'],
    module_type: ['Plugin/Executor'],
    compatible_sca_frameworks: ['Biconomy', 'ERC-7579', 'Kernel', 'Safe'],
    audits: '',
    implementation:
      '<a href="https://github.com/rhinestonewtf/modulekit/blob/main/examples/src/ScheduledTransactions/ScheduledTransfers.sol" target="_blank">Rhinestone</a>',
    notes: 'Rhinestone module not yet compatible with Safe, Biconomy, Kernel.',
  },
  {
    name: 'WebauthnValidator',
    description:
      'A module used to validated user operations via WebAuthn signature',
    category: ['Security'],
    module_type: ['Validator'],
    compatible_sca_frameworks: [
      'Biconomy',
      'ERC-6900',
      'ERC-7579',
      'Kernel',
      'Modular Account (Alchemy)',
      'Safe',
    ],
    audits: '',
    implementation: `
    Rhinestone (<a href="https://github.com/rhinestonewtf/modulekit/blob/main/examples/src/WebAuthnValidator/WebAuthnValidator.sol" target="_blank">WebauthnValidator</a>)
    <br />
    Kernel (<a href="https://github.com/zerodevapp/kernel/blob/main/src/validator/webauthn/WebAuthnFclValidator.sol" target="_blank">WebAuthnFclValidator</a>)
    <br />
    ERC-6900 ecosystem (<a href="" target="_blank">Link coming soon</a>)
    `,
    notes: 'Rhinestone module not yet compatible with Safe, Biconomy, Kernel.',
  },
  {
    name: 'Burner Factory',
    description:
      'Allows users to spin up burner accounts for specific transactions that are remotely controlled from the core account',
    category: ['Security'],
    module_type: [''],
    compatible_sca_frameworks: ['ERC-6900', 'Modular Account (Alchemy)'],
    audits: '',
    implementation: '',
    notes: '',
  },
  {
    name: 'Exploit Detection',
    description:
      'A validator module that co-signs transactions if a trusted third-party service (security engine simulating transactions) deems the interaction to be safe',
    category: ['Security'],
    module_type: [''],
    compatible_sca_frameworks: [''],
    audits: '',
    implementation: '',
    notes: '',
  },
  {
    name: 'Automated Revoke Access',
    description:
      'Automate onchain revocations of ERC20 and ERC721 access rights on a schedule or after each transaction via a hook module',
    category: ['Security'],
    module_type: [''],
    compatible_sca_frameworks: ['Biconomy', 'ERC-7579', 'Kernel', 'Safe'],
    audits: '',
    implementation:
      'https://github.com/rhinestonewtf/modulekit/blob/main/examples/src/TokenRevocation/ERC20Revocation.sol',
    notes: '',
  },
  {
    name: 'Timelock',
    description:
      'Like https://solidity-by-example.org/app/time-lock/ but in the account',
    category: ['Security'],
    module_type: [''],
    compatible_sca_frameworks: ['ERC-6900', 'Modular Account (Alchemy)'],
    audits: '',
    implementation: 'ERC-6900 ecosystem (Link coming soon)',
    notes: '',
  },
  {
    name: 'Whitelist',
    description:
      'A dynamic list of protocols/smart contracts that are safe to interact with based on an oracle feeding live data regarding protocol risks and security levels',
    category: ['Security'],
    module_type: [''],
    compatible_sca_frameworks: ['ERC-6900', 'Modular Account (Alchemy)'],
    audits: '',
    implementation: 'ERC-6900 ecosystem (Link coming soon)',
    notes: '',
  },
  {
    name: 'Noob Wallets',
    description:
      'A dynamic list of protocols/smart contracts that are safe to interact with based on an oracle feeding live data regarding protocol risks and security levels',
    category: ['General'],
    module_type: [''],
    compatible_sca_frameworks: [''],
    audits: '',
    implementation: '',
    notes: '',
  },
  {
    name: 'Timed Unlock',
    description:
      'Accounts or assets that unlock in the future or when specific conditions are met',
    category: ['General'],
    module_type: [''],
    compatible_sca_frameworks: [''],
    audits: '',
    implementation: '',
    notes: '',
  },
  {
    name: 'Cross-chain account management',
    description:
      'Synchronise account actions across many chains (e.g. for account recovery or module configuration across L2 accounts)',
    category: ['General'],
    module_type: [''],
    compatible_sca_frameworks: [''],
    audits: '',
    implementation: '',
    notes: '',
  },
  {
    name: 'NFT Rental',
    description:
      'Allow user to set up an uncollateralised, pure P2P NFT rental with another user',
    category: ['NFT'],
    module_type: [''],
    compatible_sca_frameworks: [''],
    audits: '',
    implementation: '',
    notes: '',
  },
  {
    name: 'P2P NFT Swaps',
    description:
      'User can set up a P2P swap of an NFT with a specified address (wallet-native OTC)',
    category: ['NFT'],
    module_type: [''],
    compatible_sca_frameworks: [''],
    audits: '',
    implementation: '',
    notes: '',
  },
  {
    name: 'NFT Gamification',
    description:
      'Gamify onchain interactions to “level-up” or evolve an NFT (could utilise token bound accounts — ERC-6551)',
    category: ['NFT'],
    module_type: [''],
    compatible_sca_frameworks: [''],
    audits: '',
    implementation: '',
    notes: '',
  },
  {
    name: 'Stealth Address',
    description: 'validator uses the Stealth address to validate signatures.',
    category: ['Privacy'],
    module_type: ['Validator'],
    compatible_sca_frameworks: ['Biconomy', 'Kernel'],
    audits: '',
    implementation:
      'MoonChute — Kernel (https://github.com/moonchute/stealth-address-aa-plugin/blob/main/src/zerodev/StealthAddressValidator.sol)\n\nMoonChute — Biconomy (https://github.com/moonchute/stealth-address-aa-plugin/blob/main/src/biconomy/StealthAddressRegistryModule.sol)',
    notes: 'https://hackmd.io/@justinzen/HyY5M4tkT',
  },
  {
    name: 'Shielded owners',
    description:
      'A set of validator modules that hides the owners of the validators for increased privacy.',
    category: ['Privacy'],
    module_type: [''],
    compatible_sca_frameworks: [''],
    audits: '',
    implementation: '',
    notes: '',
  },
  {
    name: 'zkEmail recovery',
    description:
      'Allow users to recover their account via email, without doxxing the email',
    category: ['Privacy'],
    module_type: [''],
    compatible_sca_frameworks: [''],
    audits: '',
    implementation: '',
    notes: '',
  },
  {
    name: 'zkEmail validator',
    description:
      'Allow users to create an account, sign transactions, and send tokens via their email but without putting their email onchain',
    category: ['Privacy'],
    module_type: [''],
    compatible_sca_frameworks: [''],
    audits: '',
    implementation: '',
    notes: '',
  },
  {
    name: 'Farcaster Frame',
    description:
      'Allow user to interact and create executions on their account from a Farcaster Frame.',
    category: ['Social'],
    module_type: [''],
    compatible_sca_frameworks: [''],
    audits: '',
    implementation: '',
    notes: '',
  },
  {
    name: 'Extended validation hooks',
    description:
      'A set of hooks that perform extended validation that is not possible during the ERC-4337 validation phase due to the spec restrictions.',
    category: ['Security'],
    module_type: ['Hook'],
    compatible_sca_frameworks: [''],
    audits: '',
    implementation: '',
    notes: '',
  },
  {
    name: 'Multichain ECDSA Validator',
    description:
      'Allows use cases which require several actions to be authorized for several chains with just one signature required from user.',
    category: ['General'],
    module_type: ['Validator'],
    compatible_sca_frameworks: ['Biconomy'],
    audits: '',
    implementation:
      'https://github.com/bcnmy/scw-contracts/blob/main/contracts/smart-account/modules/MultichainECDSAValidator.sol',
    notes:
      'Leverages Merkle Trees to efficiently manage large datasets\n\nInherits from the ECDSA Ownership Registry Module\n\nCompatible with Biconomy Modular Interface v 0.1\n\nDoes not introduce any additional security trade-offs compared to the vanilla ERC-4337 flow.',
  },
  {
    name: 'SessionKey Validator',
    description:
      'Performs basic verifications for every session key signed userOp.\nChecks if the session key has been enabled, that it is not due and has not yet expired.',
    category: ['Security'],
    module_type: ['Validator'],
    compatible_sca_frameworks: [
      'Biconomy',
      'ERC-6900',
      'ERC-7579',
      'Kernel',
      'Modular Account (Alchemy)',
      'Safe',
    ],
    audits:
      'https://github.com/alchemyplatform/modular-account/tree/develop/audits',
    implementation:
      'Rhinestone (https://github.com/rhinestonewtf/modulekit/blob/main/packages/modulekit/src/modules/SessionKeyBase.sol) — compatible with all 4 SCA frameworks\n\nBiconomy (https://github.com/bcnmy/scw-contracts/blob/main/contracts/smart-account/modules/SessionKeyManagerModule.sol) — compatible with Biconomy SCA framework\n\nKernel (https://github.com/zerodevapp/kernel/blob/main/src/validator/SessionKeyValidator.sol) — compatible with Kernel framework\n\nKernel (https://github.com/zerodevapp/kernel/blob/main/src/validator/ERC165SessionKeyValidator.sol) — compatible with Kernel framework\n\nRolla — Kernel (https://github.com/RollaProject/kernel/blob/feat/session_key_owned/src/validator/SessionKeyOwnedValidator.sol)\n\nAlchemy (https://github.com/alchemyplatform/modular-account/blob/v1.0.x/src/plugins/session/SessionKeyPlugin.sol)',
    notes:
      'Check if the description is correct wrt. to the Rhinestone/Kernel implementation.\n\nThe current description is for the Biconomy implementation.\n\nAlso, see if the module type is specified correctly.',
  },
  {
    name: 'Passkey Validation',
    description: 'validates user operations signed by passkeys',
    category: ['Security'],
    module_type: ['Validator'],
    compatible_sca_frameworks: [
      'Biconomy',
      'ERC-6900',
      'Modular Account (Alchemy)',
    ],
    audits: '',
    implementation:
      'Biconomy (https://github.com/bcnmy/scw-contracts/blob/main/contracts/smart-account/modules/PasskeyRegistryModule.sol)\n\nERC-6900 ecosystem (Link coming soon)',
    notes:
      'Compatible with Biconomy Modular Interface v 0.2\n\nIt allows to validate user operations signed by passkeys.\n\nOne owner per Smart Account. For Smart Contract Owners check https://www.notion.so/Smart-Contract-Ownership-Authorization-1a8d35085a864c2798c963617ec524da?pvs=21 module instead',
  },
  {
    name: 'Smart Contract Ownership Authorization',
    description:
      'validates user operations signed by other smart contracts via EIP-1271.',
    category: ['Security'],
    module_type: ['Validator'],
    compatible_sca_frameworks: ['Biconomy'],
    audits: '',
    implementation:
      'Biconomy (https://github.com/bcnmy/scw-contracts/blob/main/contracts/smart-account/modules/SmartContractOwnershipRegistryModule.sol)',
    notes:
      "This module doesn't follow the https://eips.ethereum.org/EIPS/eip-4337#storage-associated-with-an-address \nThus it will not be compatible with the standard bundlers. You can still use it in private environments or with custom bundlers which have less restrictions than ones participating in the unified userOps mempool.",
  },
  {
    name: 'ERC20 Session Validation',
    description:
      'validates userOps for ERC20 transfers and approvals using a session key signature.',
    category: ['Security'],
    module_type: ['Validator'],
    compatible_sca_frameworks: ['Biconomy'],
    audits: '',
    implementation:
      'Biconomy (https://github.com/bcnmy/scw-contracts/blob/main/contracts/smart-account/modules/SessionValidationModules/ERC20SessionValidationModule.sol)',
    notes:
      'Recommended to use with standard ERC20 tokens only\n\nCan be used with any method of any contract which implement method(address, uint256) interface',
  },
  {
    name: 'ECDSA ownership Authorization',
    description:
      'allows to validate user operations signed by EOA private key.',
    category: ['Security'],
    module_type: ['Validator'],
    compatible_sca_frameworks: ['Biconomy', 'Kernel'],
    audits: '',
    implementation:
      'Biconomy (https://github.com/bcnmy/scw-contracts/blob/main/contracts/smart-account/modules/Exotic/EcdsaEthSignSupportOwnershipRegistryModule.sol) — supports eth_sign flow\n\nBiconomy (https://github.com/bcnmy/scw-contracts/blob/main/contracts/smart-account/modules/EcdsaOwnershipRegistryModule.sol) — does not support https://support.metamask.io/hc/en-us/articles/14764161421467-What-is-eth-sign-and-why-is-it-a-risk- for cheaper validations\n\nKernel (https://github.com/zerodevapp/kernel/blob/main/src/validator/ECDSATypedValidator.sol)\n\nKernel (https://github.com/zerodevapp/kernel/blob/main/src/validator/ECDSAValidator.sol)\n\nKernel (https://github.com/zerodevapp/kernel/blob/main/src/validator/WeightedECDSAValidator.sol)',
    notes:
      'Compatible with Biconomy Modular Interface v 0.1\n\nIt allows to validate user operations signed by EOA private key.\n\nEIP-1271 compatible (ensures Smart Account can validate signed messages).\n\nOne owner per Smart Account.\n\n\n\nOnly EOA owners supported, no Smart Account Owners\n\nFor Smart Contract Owners check SmartContractOwnership module instead',
  },
  {
    name: 'Multiple Owner ECDSA Validator',
    description: 'ECDSA validator for wallets with more than one owner.',
    category: ['Security'],
    module_type: ['Validator'],
    compatible_sca_frameworks: ['Etherspot'],
    audits:
      'https://github.com/etherspot/etherspot-prime-contracts/blob/mew-audit/audits/ModularEtherspotWallet',
    implementation:
      'Etherspot (https://github.com/etherspot/etherspot-prime-contracts/blob/master/src/modular-etherspot-wallet/modules/MultipleOwnerECDSAValidator.sol)',
    notes: '',
  },
  {
    name: 'Permission Management Validator',
    description: 'validator that allows to register and revoke permissions',
    category: ['Security'],
    module_type: ['Validator'],
    compatible_sca_frameworks: ['Kernel'],
    audits: '',
    implementation:
      'Kernel (https://github.com/zerodevapp/kernel/blob/main/src/validator/modularPermission/ModularPermissionValidator.sol)',
    notes: '',
  },
  {
    name: '2FA Validator',
    description: '',
    category: ['Security'],
    module_type: ['Validator'],
    compatible_sca_frameworks: ['Kernel'],
    audits: '',
    implementation:
      'MoonChute — Kernel\n(https://github.com/moonchute/kernel-2fa-plugin/blob/feat/two-factor-validator/src/validator/TwofaValidator.sol)',
    notes: '',
  },
  {
    name: '2FA Hook',
    description: '',
    category: ['Security'],
    module_type: ['Hook'],
    compatible_sca_frameworks: ['Soul Wallet'],
    audits: '',
    implementation:
      'Soul Wallet (https://github.com/SoulWallet/soul-wallet-contract/blob/develop/contracts/hooks/2fa/Crypto2FAHook.sol)',
    notes: '',
  },
  {
    name: 'BLS Validator',
    description:
      'a validator that uses BLS signatures to validate transactions.',
    category: ['Security'],
    module_type: ['Validator'],
    compatible_sca_frameworks: ['Kernel'],
    audits: '',
    implementation:
      'WAX — Kernel (https://github.com/getwax/wax/blob/main/packages/plugins/src/kernel/BLSValidator.sol)',
    notes: '',
  },
  {
    name: 'Safe BLS Module',
    description: '',
    category: ['General'],
    module_type: ['Safe Module'],
    compatible_sca_frameworks: ['Safe'],
    audits: '',
    implementation:
      'WAX — Safe (https://github.com/getwax/wax/blob/main/packages/plugins/src/safe/SafeBlsPlugin.sol)',
    notes: '',
  },
  {
    name: 'Safe Aadhaar Module',
    description:
      'A plugin allows the owner of the Aadhaar card, a biometric identity card issued by the Indian government, to control 4337 wallets via the Safe plugin.',
    category: ['General'],
    module_type: ['Safe Module'],
    compatible_sca_frameworks: ['Safe'],
    audits: '',
    implementation:
      'WAX — Safe (https://github.com/porco-rosso-j/wax/blob/anon-aadhaar/packages/plugins/src/safe/SafeAnonAadhaarPlugin.sol)',
    notes: '',
  },
  {
    name: 'Safe Compression Module',
    description: '',
    category: ['General'],
    module_type: ['Safe Module'],
    compatible_sca_frameworks: ['Safe'],
    audits: '',
    implementation:
      'WAX — Safe (https://github.com/getwax/wax/blob/main/packages/plugins/src/safe/SafeCompressionPlugin.sol)',
    notes: '',
  },
  {
    name: 'Safe ECDSA Module',
    description: '',
    category: ['General'],
    module_type: ['Safe Module'],
    compatible_sca_frameworks: ['Safe'],
    audits: '',
    implementation:
      'WAX — Safe (https://github.com/getwax/wax/blob/main/packages/plugins/src/safe/SafeECDSAPlugin.sol)',
    notes: '',
  },
  {
    name: 'Safe ECDSA Recovery Module',
    description: '',
    category: ['General'],
    module_type: ['Safe Module'],
    compatible_sca_frameworks: ['Safe'],
    audits: '',
    implementation:
      'WAX — Safe (https://github.com/getwax/wax/blob/main/packages/plugins/src/safe/SafeECDSARecoveryPlugin.sol)',
    notes: '',
  },
  {
    name: 'Safe WebAuthn Module',
    description: '',
    category: ['General'],
    module_type: ['Safe Module'],
    compatible_sca_frameworks: ['Safe'],
    audits: '',
    implementation:
      'WAX — Safe (https://github.com/getwax/wax/blob/main/packages/plugins/src/safe/SafeWebAuthnPlugin.sol)',
    notes:
      'Recommended to use a more efficient verifier, see https://hackmd.io/@1ofB8klpQky-YoR5pmPXFQ/SJ0nuzD1T',
  },
  {
    name: 'Safe ZKP Password Module',
    description: '',
    category: ['General'],
    module_type: ['Safe Module'],
    compatible_sca_frameworks: ['Safe'],
    audits: '',
    implementation:
      'WAX — Safe (https://github.com/getwax/wax/blob/main/packages/plugins/src/safe/SafeZKPPasswordPlugin.sol)',
    notes: 'Mocked circuit, not fully implemented',
  },
  {
    name: 'Safe ZkEmail Recovery Module',
    description: '',
    category: ['General'],
    module_type: ['Safe Module'],
    compatible_sca_frameworks: [
      'ERC-6900',
      'ERC-7579',
      'Safe',
      'SimpleAccount',
    ],
    audits: '',
    implementation:
      'WAX — Safe (https://github.com/getwax/wax/blob/main/packages/plugins/src/safe/SafeZkEmailRecoveryPlugin.sol, https://github.com/getwax/wax/blob/33fe632c52e93fb6fe12aa5020fa1c28d574b6b6/packages/plugins/src/SimpleAccountWithRecovery.sol, https://github.com/getwax/wax/blob/33fe632c52e93fb6fe12aa5020fa1c28d574b6b6/packages/plugins/src/erc7579/ERC7579ZkEmailRecoveryModule.sol, https://github.com/getwax/wax/blob/main/packages/plugins/src/safe/SafeZkEmailRecoveryPlugin.sol)',
    notes: 'Mocked circuit, not fully implemented',
  },
  {
    name: 'Safe 4337 Module',
    description: '',
    category: ['General'],
    module_type: ['Safe Module'],
    compatible_sca_frameworks: ['Safe'],
    audits: '',
    implementation:
      'Safe Global (https://github.com/safe-global/safe-modules/blob/main/modules/4337/contracts/Safe4337Module.sol)',
    notes: '',
  },
  {
    name: 'Allowance Module',
    description: '',
    category: ['General'],
    module_type: ['Safe Module'],
    compatible_sca_frameworks: ['Safe'],
    audits: '',
    implementation:
      'Safe Global (https://github.com/safe-global/safe-modules/blob/main/modules/allowances/contracts/AllowanceModule.sol)',
    notes: '',
  },
  {
    name: 'WebAuthn Signer Module',
    description: '',
    category: ['General'],
    module_type: ['Signature Validator (Safe)'],
    compatible_sca_frameworks: ['Safe'],
    audits: '',
    implementation:
      'Safe Global (https://github.com/safe-global/safe-modules/blob/main/modules/passkey/contracts/WebAuthnSigner.sol)',
    notes: '',
  },
  {
    name: 'Zodiac Bridge Module',
    description:
      'This module allows an address on one chain to control an avatar on another chain using an Arbitrary Message Bridge (AMB). This enables a DAO on one chain to control assets and interact with systems like a Safe on a different chain.',
    category: ['General'],
    module_type: ['Safe Module'],
    compatible_sca_frameworks: ['Safe'],
    audits:
      'https://github.com/gnosisguild/zodiac-module-bridge/tree/main/audits',
    implementation:
      'Gnosis Guild (https://github.com/gnosisguild/zodiac-module-bridge/blob/main/contracts/AMBModule.sol)',
    notes: '',
  },
  {
    name: 'Zodiac Exit Module',
    description:
      "This module allows users to redeem a designated token for a relative share of an avatar's assets, similar to MolochDAO's infamous rageQuit() function.",
    category: ['General'],
    module_type: ['Safe Module'],
    compatible_sca_frameworks: ['Safe'],
    audits:
      'https://github.com/gnosisguild/zodiac-module-exit/tree/master/packages/contracts/audits',
    implementation:
      'Gnosis Guild (https://github.com/gnosisguild/zodiac-module-exit/blob/master/packages/contracts/contracts/ExitModule/ExitERC20Module.sol, https://github.com/gnosisguild/zodiac-module-exit/blob/master/packages/contracts/contracts/ExitModule/ExitERC721Module.sol)',
    notes: '',
  },
  {
    name: 'Zodiac OZ Governor Module',
    description:
      'An opinionated implementation of https://docs.openzeppelin.com/contracts/4.x/api/governance designed to be used in a Zodiac-style setup, allowing a Avatar (like a Safe) to controlled by on-chain governance similar to https://compound.finance/docs/governance.',
    category: ['General'],
    module_type: ['Safe Module'],
    compatible_sca_frameworks: ['Safe'],
    audits:
      'https://github.com/gnosisguild/zodiac-module-oz-governor/tree/main/audits',
    implementation:
      'Gnosis Guild (https://github.com/gnosisguild/zodiac-module-oz-governor/blob/main/contracts/OZGovernorModule.sol)',
    notes: '',
  },
  {
    name: 'Optimistic Governor Module',
    description:
      "This module allows on-chain executions based on Snapshot proposal results. The module utilizes UMA's optimistic oracle to govern a Safe based on a set of rules defined off-chain.",
    category: ['General'],
    module_type: ['Safe Module'],
    compatible_sca_frameworks: ['Safe'],
    audits: 'https://blog.openzeppelin.com/uma-optimistic-governor-audit',
    implementation:
      'Outcome Finance (https://github.com/UMAprotocol/protocol/blob/master/packages/core/contracts/optimistic-governor/implementation/OptimisticGovernor.sol)',
    notes: '',
  },
  {
    name: 'Zodiac Reality Module',
    description:
      'This module allows on-chain execution based on the outcome of events reported by Reality.eth. While built initially to execute Safe transactions according to Snapshot proposals, this module is framework agnostic. It can enable proposal execution from just about anywhere. For example, it can bring Discord polls on-chain.',
    category: ['General'],
    module_type: ['Safe Module'],
    compatible_sca_frameworks: ['Safe'],
    audits:
      'https://github.com/gnosisguild/zodiac-module-reality/tree/main/audits',
    implementation:
      'Gnosis Guild (https://github.com/gnosisguild/zodiac-module-reality/blob/main/contracts/RealityModuleETH.sol, https://github.com/gnosisguild/zodiac-module-reality/blob/main/contracts/RealityModuleERC20.sol)',
    notes: '',
  },
  {
    name: 'Safe Minion',
    description:
      'This module allows Moloch DAOs to manage the assets in a Safe based on the outcome of v2 Moloch DAO proposals. Safe Minion enables Moloch DAOs to manage collections of NFTs, manage LP positions with AMMs, and initiate any other arbitrary interactions. It enables DAOs that start as a Safe to later delegate governance to a Moloch DAO.',
    category: ['General'],
    module_type: ['Safe Module'],
    compatible_sca_frameworks: ['Safe'],
    audits: '',
    implementation:
      'DAOHaus (https://github.com/HausDAO/MinionSummonerV2/blob/main/contracts/SafeMinion.sol)',
    notes: '',
  },
  {
    name: 'Baal',
    description:
      'Baal is a governance layer that sits on top of a multisig treasury. It uses the https://github.com/gnosis/zodiac standards to interface with the treasury.',
    category: ['General'],
    module_type: ['Safe Module'],
    compatible_sca_frameworks: ['Safe'],
    audits:
      'https://github.com/HausDAO/Baal/blob/feat/baalZodiac/audits/Hacken-02082022.pdf\nhttps://github.com/HausDAO/Baal/blob/feat/baalZodiac/audits/Quantstamp-10182022.pdf',
    implementation:
      'DAOHaus (https://github.com/HausDAO/Baal/blob/feat/baalZodiac/contracts/Baal.sol)',
    notes: '',
  },
  {
    name: 'Zodiac Tellor Module',
    description:
      'This module allows on-chain executions based on Snapshot proposal results, it uses the Tellor oracle to retrieve the data in a secure and decentralized manner.',
    category: ['General'],
    module_type: ['Safe Module'],
    compatible_sca_frameworks: ['Safe'],
    audits:
      'https://github.com/tellor-io/snapshot-zodiac-module/tree/tellor/audits',
    implementation:
      'Tellor (https://github.com/tellor-io/snapshot-zodiac-module/blob/tellor/contracts/TellorModule.sol)',
    notes: '',
  },
  {
    name: 'Usul Zodiac Module',
    description:
      'This module allows avatars to operate with trustless tokenized DeGov, similar to Compound or Gitcoin, with a time-boxed proposal core that can register swappable voting contracts. This enables DAOs to choose from various on-chain voting methods that best suit their needs.',
    category: ['General'],
    module_type: ['Safe Module'],
    compatible_sca_frameworks: ['Safe'],
    audits: 'https://github.com/SekerDAO/Usul/tree/master/audits',
    implementation:
      'SekerDAO (https://github.com/SekerDAO/Usul/blob/master/contracts/Usul.sol)',
    notes: '',
  },
  {
    name: 'Zodiac Delay Modifier',
    description:
      'This modifier allows avatars to enforce a time delay between when a module initiates a transaction and when it will be executed by an avatar.',
    category: ['General'],
    module_type: ['Safe Modifier'],
    compatible_sca_frameworks: ['Safe'],
    audits:
      'https://github.com/gnosisguild/zodiac-modifier-delay/tree/main/audits',
    implementation:
      'Gnosis Guild (https://github.com/gnosisguild/zodiac-modifier-delay/blob/main/contracts/Delay.sol)',
    notes: '',
  },
  {
    name: 'Zodiac Roles Modifier',
    description:
      'This modifier allows for fine-grained, role-based, access control for enabled modules. Scopes for a given role include allowed addresses, and optionally include allowed functions on allowed addresses, allowed parameters on allowed functions, whether or not delegate calls are allowed to an allowed address, and whether or not value (ETH) can be sent to an allowed address.',
    category: ['General'],
    module_type: ['Safe Modifier'],
    compatible_sca_frameworks: ['Safe'],
    audits: '',
    implementation:
      'Gnosis Guild (https://github.com/gnosisguild/zodiac-modifier-roles/blob/main/packages/evm/contracts/Roles.sol)',
    notes: '',
  },
  {
    name: 'Meta Guard',
    description:
      'This guard allows an avatar to have multiple checking processes by registering multiple guards to this meta guard.',
    category: ['General'],
    module_type: ['Safe Guard'],
    compatible_sca_frameworks: ['Safe'],
    audits: '',
    implementation:
      'Cardstack (https://github.com/cardstack/cardstack-meta-guard/blob/main/contracts/MetaGuard.sol)',
    notes: '',
  },
  {
    name: 'Zodiac Scope Guard',
    description:
      'This guard allows an avatar to limit the scope of the addressable functions with which its owners can interact. This enables the avatar to define granular permissions for different control mechanisms.',
    category: ['General'],
    module_type: ['Safe Guard'],
    compatible_sca_frameworks: ['Safe'],
    audits:
      'https://github.com/gnosisguild/zodiac-guard-scope/tree/main/audits',
    implementation:
      'Gnosis Guild (https://github.com/gnosisguild/zodiac-guard-scope/blob/main/contracts/ScopeGuard.sol)',
    notes: '',
  },
  {
    name: 'Zodiac Connext Module',
    description:
      'This module allows an Avatar to be the target of any arbitrary function call originiating from a Gnosis Safe on another domain (chain or rollup) using https://connext.network/.',
    category: ['General'],
    module_type: ['Safe Module'],
    compatible_sca_frameworks: ['Safe'],
    audits:
      'https://github.com/gnosisguild/zodiac-module-connext/tree/main/audits',
    implementation:
      'Gnosis Guild (https://github.com/gnosisguild/zodiac-module-connext/blob/main/contracts/ConnextModule.sol)',
    notes: '',
  },
  {
    name: 'Zodiac Siphon Module',
    description:
      'This module exposes a public interface which allows anyone to trigger an Avatar to withdraw from a designated liquidity position in order to pay down some of its debt in a designated debt position, thereby improving the health of the positio',
    category: ['General'],
    module_type: ['Safe Module'],
    compatible_sca_frameworks: ['Safe'],
    audits: '',
    implementation:
      'Gnosis Guild (https://github.com/gnosisguild/zodiac-module-siphon/blob/master/contracts/Siphon.sol)',
    notes: '',
  },
  {
    name: 'Zodiac Access Card Module',
    description:
      'The Zodiac Access Card module grants the holder of a given NFT unilateral control of an avatar (probably a Safe). The module is compatible with any ERC721 or ERC1155 token, allowing any NFT to be used as an access card for a safe.',
    category: ['General'],
    module_type: ['Safe Module'],
    compatible_sca_frameworks: ['Safe'],
    audits: '',
    implementation:
      'Gnosis Guild (https://github.com/gnosisguild/zodiac-module-access-card/blob/main/contracts/ERC721AccessCardModule.sol, https://github.com/gnosisguild/zodiac-module-access-card/blob/main/contracts/ERC1155AccessCardModule.sol)',
    notes: '',
  },
  {
    name: 'Zodiac Mod Guard',
    description:
      'A guard that prevents the contract its guarding from disabling protected modules.',
    category: ['General'],
    module_type: ['Safe Guard'],
    compatible_sca_frameworks: ['Safe'],
    audits: 'https://github.com/gnosisguild/zodiac-guard-mod/tree/main/audits',
    implementation:
      'Gnosis Guild (https://github.com/gnosisguild/zodiac-guard-mod/blob/main/contracts/ModGuard.sol)',
    notes: '',
  },
  {
    name: 'Zodiac Nomad Module',
    description:
      'This module allows an account on one network to control a avatar (https://gnosis-safe.io/) on any other network where there is a suitable https://nomad.xyz/ bridge.',
    category: ['General'],
    module_type: ['Safe Module'],
    compatible_sca_frameworks: ['Safe'],
    audits:
      'https://github.com/gnosisguild/zodiac-module-nomad/tree/main/audits',
    implementation:
      'Gnosis Guild (https://github.com/gnosisguild/zodiac-module-nomad/blob/main/contracts/NomadModule.sol)',
    notes: '',
  },
  {
    name: 'Zodiac Revert Modifier',
    description:
      'A Zodiac modifier that executes from avatar, and enforces revert on internal transaction failure',
    category: ['General'],
    module_type: ['Safe Modifier'],
    compatible_sca_frameworks: ['Safe'],
    audits: '',
    implementation:
      'Gnosis Guild (https://github.com/gnosisguild/zodiac-modifier-revert/blob/master/contracts/Revert.sol)',
    notes: '',
  },
  {
    name: 'Debug Transaction Guard',
    description: 'Emits transaction events with extended information.',
    category: ['General'],
    module_type: ['Safe Guard'],
    compatible_sca_frameworks: ['Safe'],
    audits: '',
    implementation:
      'Safe Global (https://github.com/safe-global/safe-smart-account/blob/main/contracts/examples/guards/DebugTransactionGuard.sol)',
    notes: 'This guard is only meant as a development tool and example.',
  },
  {
    name: 'DelegateCall Transaction Guard',
    description: 'Limits delegate calls to a specific target.',
    category: ['General'],
    module_type: ['Safe Guard'],
    compatible_sca_frameworks: ['Safe'],
    audits: '',
    implementation:
      'Safe Global (https://github.com/safe-global/safe-smart-account/blob/main/contracts/examples/guards/DelegateCallTransactionGuard.sol)',
    notes: 'This guard is only meant as an example.',
  },
  {
    name: 'Only Owners Guard',
    description: 'Only allows owners to execute transactions.',
    category: ['General'],
    module_type: ['Safe Guard'],
    compatible_sca_frameworks: ['Safe'],
    audits: '',
    implementation:
      'Safe Global (https://github.com/safe-global/safe-smart-account/blob/main/contracts/examples/guards/OnlyOwnersGuard.sol)',
    notes: 'This guard is only meant as an example.',
  },
  {
    name: 'Reentrancy Transaction Guard',
    description: 'Prevents reentrancy into the transaction execution function.',
    category: ['General'],
    module_type: ['Safe Guard'],
    compatible_sca_frameworks: ['Safe'],
    audits: '',
    implementation:
      'Safe Global (https://github.com/safe-global/safe-smart-account/blob/main/contracts/examples/guards/ReentrancyTransactionGuard.sol)',
    notes: 'This guard is only meant as an example.',
  },
  {
    name: 'FlashLoans Module',
    description:
      'A simple Module allowing anyone to execute Flashloans using the safe.',
    category: ['Defi'],
    module_type: ['Safe Module'],
    compatible_sca_frameworks: ['Safe'],
    audits: '',
    implementation:
      'Dialectic (https://github.com/dialecticch/safe-flashloan/blob/main/contracts/FlashloanModule.sol)',
    notes: 'WIP. Do not use in production.',
  },
  {
    name: 'Vesting Module',
    description:
      'Allows to transfer limited amounts of ERC20 tokens and Ether without confirmations.',
    category: ['General'],
    module_type: ['Safe Module'],
    compatible_sca_frameworks: ['Safe'],
    audits: '',
    implementation:
      'Phala Network (https://github.com/Phala-Network/safe-vest-module/blob/master/contracts/VestingModule.sol)',
    notes: '',
  },
  {
    name: 'Gelato Safe Module',
    description: "A module to automate transactions for Gnosis Safe's",
    category: ['General'],
    module_type: ['Safe Module'],
    compatible_sca_frameworks: ['Safe'],
    audits: '',
    implementation:
      'Gelato (https://github.com/gelatodigital/gelato-safe-module/blob/master/contracts/GelatoSafeModule.sol)',
    notes:
      "This code is currently unaudited, please don't use this in production.",
  },
  {
    name: 'Revoke Safe Module',
    description:
      'A Gnosis Safe Module to delegate to an another account to revoke on your behalf token allowances for an exploited address.',
    category: ['General'],
    module_type: ['Safe Module'],
    compatible_sca_frameworks: ['Safe'],
    audits: '',
    implementation:
      'Emiliano Bonassi (https://github.com/emilianobonassi/revoke-safe-module/blob/main/src/RevokeModule.sol)',
    notes: 'This is a PoC and not audited. Experiment at your own risk.',
  },
  {
    name: 'zk Connect Safe Module',
    description:
      'Use your Gnosis Safe with your web2 credentials via Sismo zkConnect SSO',
    category: ['General'],
    module_type: ['Safe Module'],
    compatible_sca_frameworks: ['Safe'],
    audits: '',
    implementation:
      'Emiliano Bonassi (https://github.com/emilianobonassi/zkSafe/blob/main/contracts/src/zkConnectModule.sol)',
    notes: '',
  },
  {
    name: 'BICO Safe Module',
    description:
      'Gnosis safe module for claiming vested BICO tokens, and staking from a safe.',
    category: ['General'],
    module_type: ['Safe Module'],
    compatible_sca_frameworks: ['Safe'],
    audits: '',
    implementation:
      'Aaron Abu Usama (https://github.com/pythonpete32/bico-safe-module/blob/main/src/BicoSafeModule.sol)',
    notes: '',
  },
  {
    name: 'Check Mate Multi Guard',
    description:
      'Check Mate allows to compose and setup a suite of multiple on-chain transaction checks in your smart contract account using a guard that will allow enabling multiple Safe Guards.',
    category: ['General'],
    module_type: ['Safe Guard'],
    compatible_sca_frameworks: ['Safe'],
    audits: '',
    implementation:
      'Germán Martínez (https://github.com/germartinez/multi-transaction-guard/blob/main/contracts/MultiGuard.sol)',
    notes: 'This guard is only meant as a development tool and example',
  },
  {
    name: 'CookieJar',
    description:
      'CookieJar is a module for a DAO (Decentralized Autonomous Organization) or similar type of organization, that allows certain members to make claims (potentially for funds or other assets) at certain intervals.',
    category: ['DAO, General'],
    module_type: ['Safe Module'],
    compatible_sca_frameworks: ['Safe'],
    audits: '',
    implementation:
      'bitbeckers (https://github.com/bitbeckers/moloch-safe-modules/blob/main/src/CookieJar.sol)',
    notes: '',
  },
  {
    name: 'Safe Panic (Emergency) Modules',
    description:
      'By enabling our Safe Panic Modules on your Safe, you are able to perform emergency actions on your multisig without needing all signers to sign off on it.',
    category: ['Security'],
    module_type: ['Safe Module'],
    compatible_sca_frameworks: ['Safe'],
    audits: '',
    implementation:
      'Onchainification Labs (https://github.com/onchainification/safe_panic_modules/blob/main/contracts/modules/RevokeModule.sol, https://github.com/onchainification/safe_panic_modules/blob/main/contracts/modules/AaveWithdrawModule.sol, https://github.com/onchainification/safe_panic_modules/blob/main/contracts/modules/UniswapWithdrawModule.sol)',
    notes: '',
  },
  {
    name: 'Token Withdrawal Module',
    description:
      'A Safe Module, which allows accounts that are not related to the Safe, to withdraw a predetermined amount of a specific token.',
    category: ['Security'],
    module_type: ['Safe Module'],
    compatible_sca_frameworks: ['Safe'],
    audits: '',
    implementation:
      'Yevgeniy (https://github.com/roleengineer/token-withdrawal-module/blob/master/src/TokenWithdrawalModule.sol)',
    notes: '',
  },
  {
    name: 'CowDumper',
    description:
      'Whitelist your shitcoins on this Safe module, so that as soon as they are received by your Safe they will automatically be sent straight to CoW Swap in return for a predefined ERC20 of your choice.',
    category: ['Defi'],
    module_type: ['Safe Module'],
    compatible_sca_frameworks: ['Safe'],
    audits: '',
    implementation:
      'Onchainification Labs (https://github.com/onchainification/CowDumper/blob/main/src/CowDungerModule.sol)',
    notes: '',
  },
  {
    name: 'X-Safe: Cross-Chain Gnosis Safe Multi-Sig Optimization',
    description:
      'X-Safe aims to optimize the Gnosis Safe multi-sig framework for multi-chain transactions. It simplifies identical administrative functions on multiple blockchains by enabling single signature propagation and transaction broadcasting.',
    category: ['DAO, General'],
    module_type: ['Safe Module'],
    compatible_sca_frameworks: ['Safe'],
    audits: '',
    implementation:
      'Adam Cuculich (https://github.com/cucupac/x-safe/blob/main/src/God.sol)',
    notes: '',
  },
  {
    name: 'Recovery with Delay',
    description:
      'A contract compatible with Safe{Core} Protocol that replaces a specified owner for a Safe by a non-owner account.',
    category: ['General'],
    module_type: ['Safe Module'],
    compatible_sca_frameworks: ['Safe'],
    audits: '',
    implementation:
      'Akshay Patel (https://github.com/unlocktheswap/Safe-AA/blob/main/contracts/contracts/RecoveryWithDelayPlugin.sol)',
    notes: '',
  },
  {
    name: 'Intent Safe Module',
    description:
      'Module functionalities:\n- pay fees to the settlement contract for ATO execution\n- get quote for ATO payment\n- emit fee payment event',
    category: ['General'],
    module_type: ['Safe Module'],
    compatible_sca_frameworks: ['Safe'],
    audits: '',
    implementation:
      'Banana Wallet (https://github.com/Banana-Wallet/safe-intent-plugin/blob/main/contracts/IntentSafePlugin.sol)',
    notes: '',
  },
  {
    name: 'Game Session Key Module',
    description:
      'Allows a Module to execute a Safe transaction without any further confirmations.',
    category: ['General'],
    module_type: ['Safe Module'],
    compatible_sca_frameworks: ['Safe'],
    audits: '',
    implementation:
      'itublockchain (https://github.com/itublockchain/eth-paris-session-key/blob/master/account-contracts/contracts/Safe4337SessionKeyModule.sol)',
    notes: '',
  },
  {
    name: 'PaySplit',
    description:
      'Split payments between employees and employers on Safe{Protocol} accounts',
    category: ['General'],
    module_type: ['Safe Module'],
    compatible_sca_frameworks: ['Safe'],
    audits: '',
    implementation:
      'Ilya Savitsky (https://github.com/ipsavitsky/PaySplit/blob/main/contracts/contracts/Plugins.sol)',
    notes: '',
  },
  {
    name: 'Recurring Execution',
    description:
      'Recurring Execute Module - Allows an owner to create arbitrary execution that can be executed by anyone on a recurring basis',
    category: ['General'],
    module_type: ['Safe Module'],
    compatible_sca_frameworks: ['Safe'],
    audits: '',
    implementation:
      'Unhosted-Wallet (https://github.com/Unhosted-Wallet/unhosted-modules/blob/main/recurring-execution/contracts/RecurringExecuteModule.sol)',
    notes: '',
  },
  {
    name: 'Social Recovery Module',
    description:
      'Recovers the account using signatures from friends or family members',
    category: ['Security'],
    module_type: [''],
    compatible_sca_frameworks: [''],
    audits: '',
    implementation:
      'Clave Wallet (https://github.com/getclave/clave-contracts/blob/775efeb0a8b2a9ab7a3237dbebded4ae6ca45aaf/contracts/modules/recovery/SocialRecoveryModule.sol)\n\nCANDIDE Labs (https://github.com/candidelabs/CandideWalletContracts/blob/main/contracts/modules/social_recovery/SocialRecoveryModule.sol)\n\nTrue Wallet (https://github.com/TrueWallet/contracts/blob/main/src/modules/SocialRecoveryModule/SocialRecoveryModule.sol)',
    notes: '',
  },
  {
    name: 'Cloud Recovery Module',
    description: 'Recovers the account using a key stored in iCloud or similar',
    category: ['Security'],
    module_type: [''],
    compatible_sca_frameworks: [''],
    audits: '',
    implementation:
      'Clave Wallet (https://github.com/getclave/clave-contracts/blob/775efeb0a8b2a9ab7a3237dbebded4ae6ca45aaf/contracts/modules/recovery/CloudRecoveryModule.sol)',
    notes:
      'This is no longer used by the Clave wallet in favour of the Clave’s https://www.notion.so/Social-Recovery-Module-2c86718a35d6460fba0c8e6d684f0059?pvs=21.',
  },
  {
    name: 'Key Store Module',
    description:
      'The KeyStoreModule integrates with wallets to manage signing keys using L1 keystore data.',
    category: ['General'],
    module_type: ['Module (Soul Wallet)'],
    compatible_sca_frameworks: ['Soul Wallet'],
    audits: '',
    implementation:
      'Soul Wallet (https://github.com/SoulWallet/soul-wallet-contract/blob/develop/contracts/modules/keystore/KeyStoreModule.sol)',
    notes:
      "Upon wallet creation, it checks if the keystore has been synced. If so, the wallet's signing key\nis set to the keystore's signing key. Otherwise, it uses the initial signing key specified during creation.\n\nThe module also offers functionality to sync the wallet's signing key with the latest from the L1 keystore via the syncL1Keystore method. This ensures wallet signing keys can be dynamically updated to reflect changes in the keystore",
  },
  {
    name: 'Security Control Module',
    description:
      'The SecurityControlModule is a default security module integrated into SoulWallet,\ndesigned to enhance security through a time-lock mechanism for managing module/hook/validator additions.',
    category: ['General'],
    module_type: ['Module (Soul Wallet)'],
    compatible_sca_frameworks: ['Soul Wallet'],
    audits: '',
    implementation:
      'Soul Wallet (https://github.com/SoulWallet/soul-wallet-contract/blob/develop/contracts/modules/securityControlModule/SecurityControlModule.sol)\n\nTrue Wallet\n(https://github.com/TrueWallet/contracts/blob/main/src/modules/SecurityControlModule/SecurityControlModule.sol)',
    notes:
      'This setup ensures that non-whitelist modules undergo a mandatory waiting period before integration, providing an additional layer of security against potential threats.\nBut modules added to the SecurityControlModule whitelist can be immediately activated without waiting for the time-lock period.',
  },
  {
    name: 'Upgrade Module (Soul)',
    description:
      'The UpgradeModule is responsible for upgrading the logic contract of SoulWallet.',
    category: ['General'],
    module_type: ['Module (Soul Wallet)'],
    compatible_sca_frameworks: ['Soul Wallet'],
    audits: '',
    implementation:
      'Soul Wallet (https://github.com/SoulWallet/soul-wallet-contract/blob/develop/contracts/modules/upgrade/UpgradeModule.sol)',
    notes: '',
  },
  {
    name: 'Upgrade Module (Argent)',
    description: 'Temporary module used to add/remove other modules.',
    category: ['General'],
    module_type: ['Module (Argent)'],
    compatible_sca_frameworks: ['Argent'],
    audits: '',
    implementation:
      'Argent (https://github.com/argentlabs/argent-contracts/blob/develop/contracts/modules/SimpleUpgrader.sol)',
    notes: '',
  },
  {
    name: 'Account Recovery (Social Recovery)',
    description:
      'The design of the Biconomy Account Recovery Module is highly inspired by https://vitalik.ca/general/2021/01/11/recovery.html. Enabling Account Recovery for the Smart Account means compromising on trustlessness and introducing additional risk which is an inevitable trade-off of enabling an opportunity to change a key that controls the Smart Account.',
    category: ['Security'],
    module_type: ['Plugin/Executor, Validator'],
    compatible_sca_frameworks: ['Biconomy'],
    audits:
      'https://github.com/bcnmy/scw-contracts/blob/develop/audits/Biconomy%20Account%20Recovery%20Module%20-%20Zellic%20Audit%20Report-II.pdf\nhttps://github.com/bcnmy/scw-contracts/blob/develop/audits/Biconomy%20Account%20Recovery%20Module%20-%20Kawach%20Security%20Assessment%20Report.pdf',
    implementation:
      'Biconomy(https://github.com/bcnmy/scw-contracts/blob/develop/contracts/smart-account/modules/AccountRecoveryModule.sol) - Compatible with Biconomy SCA framework',
    notes: '',
  },
  {
    name: 'Gasless transactions (Safe)',
    description: '',
    category: ['General'],
    module_type: ['Safe Module'],
    compatible_sca_frameworks: ['Safe'],
    audits: '',
    implementation:
      'Safe (https://github.com/5afe/safe-core-protocol-demo/blob/main/contracts/contracts/Plugins.sol)',
    notes: '',
  },
  {
    name: 'Gasless transactions (Argent)',
    description:
      'Abstract Module to execute transactions signed by ETH-less accounts and sent by a relayer.',
    category: ['General'],
    module_type: ['Module (Argent)'],
    compatible_sca_frameworks: ['Argent'],
    audits: '',
    implementation:
      'Argent (https://github.com/argentlabs/argent-contracts/blob/develop/contracts/modules/RelayerManager.sol)',
    notes: '',
  },
  {
    name: 'Security Manager (Argent)',
    description:
      'Abstract module implementing the key security features of the wallet: guardians, lock and recovery.',
    category: ['Security'],
    module_type: ['Module (Argent)'],
    compatible_sca_frameworks: ['Argent'],
    audits: '',
    implementation:
      'Argent (https://github.com/argentlabs/argent-contracts/blob/develop/contracts/modules/SecurityManager.sol)',
    notes: '',
  },
  {
    name: 'Transaction Manager (Argent)',
    description:
      'Module to execute transactions in sequence to e.g. transfer tokens (ETH, ERC20, ERC721, ERC1155) or call third-party contracts.',
    category: ['General'],
    module_type: ['Module (Argent)'],
    compatible_sca_frameworks: ['Argent'],
    audits: '',
    implementation:
      'Argent (https://github.com/argentlabs/argent-contracts/blob/develop/contracts/modules/TransactionManager.sol)',
    notes: '',
  },
  {
    name: 'Module Isolation Hook',
    description:
      'Stops Modules from being able to install/uninstall each other',
    category: ['Security'],
    module_type: ['Hook'],
    compatible_sca_frameworks: ['Etherspot'],
    audits:
      'https://github.com/etherspot/etherspot-prime-contracts/blob/mew-audit/audits/ModularEtherspotWallet',
    implementation:
      'Etherspot (https://github.com/etherspot/etherspot-prime-contracts/blob/mew-audit/src/modular-etherspot-wallet/hooks/ModuleIsolationHook.sol)',
    notes: '',
  },
];
export default modules;
