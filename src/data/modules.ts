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
      '<a href="https://github.com/rhinestonewtf/core-modules/blob/main/src/AutoSavings/AutoSavings.sol" target="_blank">Rhinestone (AutoSavings)</a>',
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
    implementation: `Alchemy (implemented with <a href="https://github.com/alchemyplatform/modular-account/blob/v1.0.x/src/plugins/session/SessionKeyPlugin.sol" target="_blank">SessionKeyPlugin</a>)
      <br />
      Libree (implemented as stand alone)`,
    notes: '',
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
      'Rhinestone (<a href="https://github.com/rhinestonewtf/core-modules/blob/main/src/Flashloan/FlashloanLender.sol" target="_blank">FlashloanLender</a>, <a href="https://github.com/rhinestonewtf/modulekit/blob/main/examples/src/ColdStorage/FlashloanCallback.sol" target="_blank">FlashloanCallback</a>)',
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
    module_type: ['Hook', 'Validator'],
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
    Rhinestone (<a href="https://github.com/rhinestonewtf/core-modules/blob/main/src/DeadmanSwitch/DeadmanSwitch.sol" target="_blank">DeadmanSwitch</a>)
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
    module_type: ['Hook', 'Plugin/Executor'],
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
    Rhinestone (<a href="https://github.com/rhinestonewtf/core-modules/blob/main/src/ColdStorageHook/ColdStorageFlashloan.sol" target="_blank">ColdStorageFlashloan</a>, <a href="https://github.com/rhinestonewtf/core-modules/blob/main/src/ColdStorageHook/ColdStorageHook.sol" target="_blank">ColdStorageHook</a>)
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
    module_type: ['Hook', 'Plugin/Executor'],
    compatible_sca_frameworks: [''],
    audits:
      '<a href="https://github.com/alchemyplatform/modular-account/tree/develop/audits" target="_blank">Modular Account (Alchemy)</a>',
    implementation:
      'Alchemy (implemented with <a href="https://github.com/alchemyplatform/modular-account/blob/v1.0.x/src/plugins/session/SessionKeyPlugin.sol" target="_blank">SessionKeyPlugin</a>)',
    notes: '',
  },
  {
    name: 'MultiFactor',
    description: 'Multi-plex multiple validators together',
    category: [''],
    module_type: ['Validator'],
    compatible_sca_frameworks: ['Biconomy', 'ERC-7579', 'Kernel', 'Safe'],
    audits: '',
    implementation:
      '<a href="https://github.com/rhinestonewtf/core-modules/tree/main/src/MultiFactor" target="_blank">Rhinestone</a>',
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
    <a href="https://github.com/rhinestonewtf/core-modules/blob/main/src/OwnableValidator/OwnableValidator.sol" target="_blank">Rhinestone</a>
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
      '<a href="https://github.com/rhinestonewtf/core-modules/blob/main/src/ScheduledOrders/ScheduledOrders.sol" target="_blank">Rhinestone</a>',
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
      '<a href="https://github.com/rhinestonewtf/core-modules/blob/main/src/ScheduledTransfers/ScheduledTransfers.sol" target="_blank">Rhinestone</a>',
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
    Kernel (<a href="https://github.com/zerodevapp/kernel/blob/main/src/validator/webauthn/WebAuthnFclValidator.sol" target="_blank">WebAuthnFclValidator</a>)
    <br />
    ERC-6900 ecosystem (Link coming soon)
    `,
    notes: '',
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
    implementation: `
    MoonChute — Kernel (<a href="https://github.com/moonchute/stealth-address-aa-plugin/blob/main/src/zerodev/StealthAddressValidator.sol" target="_blank">StealthAddressValidator</a>)
    <br />
    MoonChute — Biconomy (<a href="https://github.com/moonchute/stealth-address-aa-plugin/blob/main/src/biconomy/StealthAddressRegistryModule.sol" target="_blank">StealthAddressRegistryModule</a>)
    `,
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
      'Biconomy (<a href="https://github.com/bcnmy/scw-contracts/blob/main/contracts/smart-account/modules/MultichainECDSAValidator.sol" target="_blank">MultichainECDSAValidator</a>)',
    notes: `
    Leverages Merkle Trees to efficiently manage large datasets
    <br />
    Inherits from the ECDSA Ownership Registry Module
    <br />
    Compatible with Biconomy Modular Interface v 0.1
    <br />
    Does not introduce any additional security trade-offs compared to the vanilla ERC-4337 flow.
    `,
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
      '<a href="https://github.com/alchemyplatform/modular-account/tree/develop/audits" target="_blank">Modular Account (Alchemy)</a>',
    implementation: `
    Rhinestone (<a href="https://github.com/rhinestonewtf/modulekit/blob/main/packages/modulekit/src/modules/SessionKeyBase.sol" target="_blank">SessionKeyBase</a>) — compatible with all 4 SCA frameworks
    <br />
    Biconomy (<a href="https://github.com/bcnmy/scw-contracts/blob/main/contracts/smart-account/modules/SessionKeyManagerModule.sol" target="_blank">SessionKeyManagerModule</a>) — compatible with Biconomy SCA framework
    <br />
    Kernel (<a href="https://github.com/zerodevapp/kernel/blob/main/src/validator/SessionKeyValidator.sol" target="_blank">SessionKeyValidator</a>) — compatible with Kernel framework
    <br />
    Kernel (<a href="https://github.com/zerodevapp/kernel/blob/main/src/validator/ERC165SessionKeyValidator.sol" target="_blank">ERC165SessionKeyValidator</a>) — compatible with Kernel framework
    <br />
    Rolla — Kernel (<a href="https://github.com/RollaProject/kernel/blob/feat/session_key_owned/src/validator/SessionKeyOwnedValidator.sol" target="_blank">SessionKeyOwnedValidator</a>)
    <br />
    Alchemy (<a href="https://github.com/alchemyplatform/modular-account/blob/v1.0.x/src/plugins/session/SessionKeyPlugin.sol" target="_blank">SessionKeyPlugin</a>)
    `,
    notes: `
    Check if the description is correct wrt. to the Rhinestone/Kernel implementation.
    <br />
    The current description is for the Biconomy implementation.
    <br />
    Also, see if the module type is specified correctly.
    `,
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
    implementation: `
    Biconomy (<a href="https://github.com/bcnmy/scw-contracts/blob/main/contracts/smart-account/modules/PasskeyRegistryModule.sol" target="_blank">PasskeyRegistryModule</a>)

    ERC-6900 ecosystem (Link coming soon)
    `,
    notes: `
    Compatible with Biconomy Modular Interface v 0.2

    It allows to validate user operations signed by passkeys.

    One owner per Smart Account. For Smart Contract Owners check SmartContractOwnership module instead
    `,
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
      'Biconomy (<a href="https://github.com/bcnmy/scw-contracts/blob/main/contracts/smart-account/modules/SmartContractOwnershipRegistryModule.sol" target="_blank">SmartContractOwnershipRegistryModule</a>)',
    notes: `
    This module doesn't follow the <a href="https://eips.ethereum.org/EIPS/eip-4337#storage-associated-with-an-address" target="_blank">Storage Access Rules set by ERC-4337</a>
    <br />
    Thus it will not be compatible with the standard bundlers. You can still use it in private environments or with custom bundlers which have less restrictions than ones participating in the unified userOps mempool.
    `,
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
      'Biconomy (<a href="https://github.com/bcnmy/scw-contracts/blob/main/contracts/smart-account/modules/SessionValidationModules/ERC20SessionValidationModule.sol" target="_blank">ERC20SessionValidationModule</a>)',
    notes: `
    Recommended to use with standard ERC20 tokens only
    <br />
    Can be used with any method of any contract which implement method(address, uint256) interface
    `,
  },
  {
    name: 'ECDSA ownership Authorization',
    description:
      'allows to validate user operations signed by EOA private key.',
    category: ['Security'],
    module_type: ['Validator'],
    compatible_sca_frameworks: ['Biconomy', 'Kernel'],
    audits: '',
    implementation: `
    Biconomy (<a href="https://github.com/bcnmy/scw-contracts/blob/main/contracts/smart-account/modules/Exotic/EcdsaEthSignSupportOwnershipRegistryModule.sol" target="_blank">EcdsaEthSignSupportOwnershipRegistryModule</a>) — supports eth_sign flow
    <br />
    Biconomy (<a href="https://github.com/bcnmy/scw-contracts/blob/main/contracts/smart-account/modules/EcdsaOwnershipRegistryModule.sol" target="_blank">EcdsaOwnershipRegistryModule</a>) — does not support <a href="https://support.metamask.io/hc/en-us/articles/14764161421467-What-is-eth-sign-and-why-is-it-a-risk" target="_blank">outdated eth_sign flow</a> for cheaper validations
    <br />
    Kernel (<a href="https://github.com/zerodevapp/kernel/blob/main/src/validator/ECDSATypedValidator.sol" target="_blank">ECDSATypedValidator</a>)
    <br />
    Kernel (<a href="https://github.com/zerodevapp/kernel/blob/main/src/validator/ECDSAValidator.sol" target="_blank">ECDSAValidator</a>)
    <br />
    Kernel (<a href="https://github.com/zerodevapp/kernel/blob/main/src/validator/WeightedECDSAValidator.sol" target="_blank">WeightedECDSAValidator</a>)
    `,
    notes: `
    Compatible with Biconomy Modular Interface v 0.1
    <br />
    It allows to validate user operations signed by EOA private key.
    <br />
    EIP-1271 compatible (ensures Smart Account can validate signed messages).
    <br />
    One owner per Smart Account.
    <br />
    Only EOA owners supported, no Smart Account Owners
    <br />
    For Smart Contract Owners check SmartContractOwnership module instead
    `,
  },
  {
    name: 'Multiple Owner ECDSA Validator',
    description: 'ECDSA validator for wallets with more than one owner.',
    category: ['Security'],
    module_type: ['Validator'],
    compatible_sca_frameworks: ['Etherspot'],
    audits:
      '<a href="https://github.com/etherspot/etherspot-prime-contracts/blob/mew-audit/audits/ModularEtherspotWallet" target="_blank">Audits</a>',
    implementation:
      'Etherspot (<a href="https://github.com/etherspot/etherspot-prime-contracts/blob/master/src/modular-etherspot-wallet/modules/MultipleOwnerECDSAValidator.sol" target="_blank">MultipleOwnerECDSAValidator</a>)',
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
      'Kernel (<a href="https://github.com/zerodevapp/kernel/blob/main/src/validator/modularPermission/ModularPermissionValidator.sol" target="_blank">ModularPermissionValidator</a>)',
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
      'MoonChute — Kernel (<a href="https://github.com/moonchute/kernel-2fa-plugin/blob/feat/two-factor-validator/src/validator/TwofaValidator.sol" target="_blank">TwofaValidator</a>)',
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
      'Soul Wallet (<a href="https://github.com/SoulWallet/soul-wallet-contract/blob/develop/contracts/hooks/2fa/Crypto2FAHook.sol" target="_blank">Crypto2FAHook</a>)',
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
      'WAX — Kernel (<a href="https://github.com/getwax/wax/blob/main/packages/plugins/src/kernel/BLSValidator.sol" target="_blank">BLSValidator</a>)',
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
      'WAX — Safe (<a href="https://github.com/getwax/wax/blob/main/packages/plugins/src/safe/SafeBlsPlugin.sol" target="_blank">SafeBlsPlugin</a>)',
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
      'WAX — Safe (<a href="https://github.com/porco-rosso-j/wax/blob/anon-aadhaar/packages/plugins/src/safe/SafeAnonAadhaarPlugin.sol" target="_blank">SafeAnonAadhaarPlugin</a>)',
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
      'WAX — Safe (<a href="https://github.com/getwax/wax/blob/main/packages/plugins/src/safe/SafeCompressionPlugin.sol" target="_blank">SafeCompressionPlugin</a>)',
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
      'WAX — Safe (<a href="https://github.com/getwax/wax/blob/main/packages/plugins/src/safe/SafeECDSAPlugin.sol" target="_blank">SafeECDSAPlugin</a>)',
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
      'WAX — Safe (<a href="https://github.com/getwax/wax/blob/main/packages/plugins/src/safe/SafeECDSARecoveryPlugin.sol" target="_blank">SafeECDSARecoveryPlugin</a>)',
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
      'WAX — Safe (<a href="https://github.com/getwax/wax/blob/main/packages/plugins/src/safe/SafeWebAuthnPlugin.sol" target="_blank">SafeWebAuthnPlugin</a>)',
    notes:
      'Recommended to use a more efficient verifier, see <a href="https://hackmd.io/@1ofB8klpQky-YoR5pmPXFQ/SJ0nuzD1T" target="_blank">more details here</a>',
  },
  {
    name: 'Safe ZKP Password Module',
    description: '',
    category: ['General'],
    module_type: ['Safe Module'],
    compatible_sca_frameworks: ['Safe'],
    audits: '',
    implementation:
      'WAX — Safe (<a href="https://github.com/getwax/wax/blob/main/packages/plugins/src/safe/SafeZKPPasswordPlugin.sol" target="_blank">SafeZKPPasswordPlugin</a>)',
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
    implementation: `
      WAX — Safe (
        <a href="https://github.com/getwax/wax/blob/main/packages/plugins/src/safe/SafeZkEmailRecoveryPlugin.sol" target="_blank">SafeZkEmailRecoveryPlugin</a>, 
        <a href="https://github.com/getwax/wax/blob/33fe632c52e93fb6fe12aa5020fa1c28d574b6b6/packages/plugins/src/SimpleAccountWithRecovery.sol" target="_blank">SimpleAccountWithRecovery</a>, 
        <a href="https://github.com/getwax/wax/blob/33fe632c52e93fb6fe12aa5020fa1c28d574b6b6/packages/plugins/src/erc7579/ERC7579ZkEmailRecoveryModule.sol" target="_blank">ERC7579ZkEmailRecoveryModule</a>, 
        <a href="https://github.com/getwax/wax/blob/main/packages/plugins/src/safe/SafeZkEmailRecoveryPlugin.sol" target="_blank">SafeZkEmailRecoveryPlugin</a>
      )
      `,
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
      'Safe Global (<a href="https://github.com/safe-global/safe-modules/blob/main/modules/4337/contracts/Safe4337Module.sol" target="_blank">Safe4337Module)</a>',
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
      'Safe Global (<a href="https://github.com/safe-global/safe-modules/blob/main/modules/allowances/contracts/AllowanceModule.sol" target="_blank">AllowanceModule</a>)',
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
      'Safe Global (<a href="https://github.com/safe-global/safe-modules/blob/main/modules/passkey/contracts/WebAuthnSigner.sol" target="_blank">WebAuthnSigner</a>)',
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
      '<a href="https://github.com/gnosisguild/zodiac-module-bridge/tree/main/audits" target="_blank">Audit</a>',
    implementation:
      'Gnosis Guild (<a href="https://github.com/gnosisguild/zodiac-module-bridge/blob/main/contracts/AMBModule.sol" target="_blank">AMBModule</a>)',
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
      '<a href="https://github.com/gnosisguild/zodiac-module-exit/tree/master/packages/contracts/audits" target="_blank">Audit</a>',
    implementation:
      'Gnosis Guild (<a href="https://github.com/gnosisguild/zodiac-module-exit/blob/master/packages/contracts/contracts/ExitModule/ExitERC20Module.sol" target="_blank">ExitERC20Module</a>, <a href="https://github.com/gnosisguild/zodiac-module-exit/blob/master/packages/contracts/contracts/ExitModule/ExitERC721Module.sol" target="_blank">ExitERC721Module</a>)',
    notes: '',
  },
  {
    name: 'Zodiac OZ Governor Module',
    description: `
    An opinionated implementation of <a href="https://docs.openzeppelin.com/contracts/4.x/api/governance" target="_blank">OpenZeppelin's Governor contracts</a> designed to be used in a Zodiac-style setup, allowing a Avatar (like a Safe) to controlled by on-chain governance similar to <a href="https://compound.finance/docs/governance" target="_blank">Compound's Governor Alpha and Bravo</a>.
    `,
    category: ['General'],
    module_type: ['Safe Module'],
    compatible_sca_frameworks: ['Safe'],
    audits:
      '<a href="https://github.com/gnosisguild/zodiac-module-oz-governor/tree/main/audits" target="_blank">Audit</a>',
    implementation:
      'Gnosis Guild (<a href="https://github.com/gnosisguild/zodiac-module-oz-governor/blob/main/contracts/OZGovernorModule.sol" target="_blank">OZGovernorModule</a>)',
    notes: '',
  },
  {
    name: 'Optimistic Governor Module',
    description:
      "This module allows on-chain executions based on Snapshot proposal results. The module utilizes UMA's optimistic oracle to govern a Safe based on a set of rules defined off-chain.",
    category: ['General'],
    module_type: ['Safe Module'],
    compatible_sca_frameworks: ['Safe'],
    audits:
      '<a href="https://blog.openzeppelin.com/uma-optimistic-governor-audit" target="_blank">Audit</a>',
    implementation:
      'Outcome Finance (<a href="https://github.com/UMAprotocol/protocol/blob/master/packages/core/contracts/optimistic-governor/implementation/OptimisticGovernor.sol" target="_blank">OptimisticGovernor</a>)',
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
      '<a href="https://github.com/gnosisguild/zodiac-module-reality/tree/main/audits" target="_blank">Audit</a>',
    implementation:
      'Gnosis Guild (<a href="https://github.com/gnosisguild/zodiac-module-reality/blob/main/contracts/RealityModuleETH.sol" target="_blank">RealityModuleETH</a>, <a href="https://github.com/gnosisguild/zodiac-module-reality/blob/main/contracts/RealityModuleERC20.sol" target="_blank">RealityModuleERC20</a>)',
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
      'DAOHaus (<a href="https://github.com/HausDAO/MinionSummonerV2/blob/main/contracts/SafeMinion.sol" target="_blank">SafeMinion</a>)',
    notes: '',
  },
  {
    name: 'Baal',
    description:
      'Baal is a governance layer that sits on top of a multisig treasury. It uses the https://github.com/gnosis/zodiac standards to interface with the treasury.',
    category: ['General'],
    module_type: ['Safe Module'],
    compatible_sca_frameworks: ['Safe'],
    audits: `
    <a href="https://github.com/HausDAO/Baal/blob/feat/baalZodiac/audits/Hacken-02082022.pdf" target="_blank">Audit 1</a>, 
    <a href="https://github.com/HausDAO/Baal/blob/feat/baalZodiac/audits/Quantstamp-10182022.pdf" target="_blank">Audit 2</a>
    `,
    implementation:
      'DAOHaus (<a href="https://github.com/HausDAO/Baal/blob/feat/baalZodiac/contracts/Baal.sol" target="_blank">Baal</a>)',
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
      '<a href="https://github.com/tellor-io/snapshot-zodiac-module/tree/tellor/audits" target="_blank">Audit</a>',
    implementation:
      'Tellor (<a href="https://github.com/tellor-io/snapshot-zodiac-module/blob/tellor/contracts/TellorModule.sol" target="_blank">TellorModule</a>)',
    notes: '',
  },
  {
    name: 'Usul Zodiac Module',
    description:
      'This module allows avatars to operate with trustless tokenized DeGov, similar to Compound or Gitcoin, with a time-boxed proposal core that can register swappable voting contracts. This enables DAOs to choose from various on-chain voting methods that best suit their needs.',
    category: ['General'],
    module_type: ['Safe Module'],
    compatible_sca_frameworks: ['Safe'],
    audits:
      '<a href="https://github.com/SekerDAO/Usul/tree/master/audits" target="_blank">Audit</a>',
    implementation:
      'SekerDAO (<a href="https://github.com/SekerDAO/Usul/blob/master/contracts/Usul.sol" target="_blank">Usul</a>)',
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
      '<a href="https://github.com/gnosisguild/zodiac-modifier-delay/tree/main/audits" target="_blank">Audit</a>',
    implementation:
      'Gnosis Guild (<a href="https://github.com/gnosisguild/zodiac-modifier-delay/blob/main/contracts/Delay.sol" target="_blank">Delay</a>)',
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
      'Gnosis Guild (<a href="https://github.com/gnosisguild/zodiac-modifier-roles/blob/main/packages/evm/contracts/Roles.sol" target="_blank">Roles</a>)',
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
      'Cardstack (<a href="https://github.com/cardstack/cardstack-meta-guard/blob/main/contracts/MetaGuard.sol" target="_blank">MetaGuard</a>)',
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
      '<a href="https://github.com/gnosisguild/zodiac-guard-scope/tree/main/audits" target="_blank">Audit</a>',
    implementation:
      'Gnosis Guild (<a href="https://github.com/gnosisguild/zodiac-guard-scope/blob/main/contracts/ScopeGuard.sol" target="_blank">ScopeGuard</a>)',
    notes: '',
  },
  {
    name: 'Zodiac Connext Module',
    description:
      'This module allows an Avatar to be the target of any arbitrary function call originiating from a Gnosis Safe on another domain (chain or rollup) using <a href="https://www.connext.network/" target="_blank">Connext</a>.',
    category: ['General'],
    module_type: ['Safe Module'],
    compatible_sca_frameworks: ['Safe'],
    audits:
      '<a href="https://github.com/gnosisguild/zodiac-module-connext/tree/main/audits" target="_blank">Audit</a>',
    implementation:
      'Gnosis Guild (<a href="https://github.com/gnosisguild/zodiac-module-connext/blob/main/contracts/ConnextModule.sol" target="_blank">ConnextModule</a>)',
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
      'Gnosis Guild (<a href="https://github.com/gnosisguild/zodiac-module-siphon/blob/master/contracts/Siphon.sol" target="_blank">Siphon</a>)',
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
      'Gnosis Guild (<a href="https://github.com/gnosisguild/zodiac-module-access-card/blob/main/contracts/ERC721AccessCardModule.sol" target="_blank">ERC721AccessCardModule</a>, <a href="https://github.com/gnosisguild/zodiac-module-access-card/blob/main/contracts/ERC1155AccessCardModule.sol" target="_blank">ERC1155AccessCardModule</a>)',
    notes: '',
  },
  {
    name: 'Zodiac Mod Guard',
    description:
      'A guard that prevents the contract its guarding from disabling protected modules.',
    category: ['General'],
    module_type: ['Safe Guard'],
    compatible_sca_frameworks: ['Safe'],
    audits:
      '<a href="https://github.com/gnosisguild/zodiac-guard-mod/tree/main/audits" target="_blank">Audits</a>',
    implementation:
      'Gnosis Guild (<a href="https://github.com/gnosisguild/zodiac-guard-mod/blob/main/contracts/ModGuard.sol" target="_blank">ModGuard</a>)',
    notes: '',
  },
  {
    name: 'Zodiac Nomad Module',
    description:
      'This module allows an account on one network to control a avatar (<a href="https://safe.global/" target="_blank">Gnosis Safe</a>) on any other network where there is a suitable <a href="https://www.nomad.xyz/" target="_blank">Nomad</a> bridge.',
    category: ['General'],
    module_type: ['Safe Module'],
    compatible_sca_frameworks: ['Safe'],
    audits:
      '<a href="https://github.com/gnosisguild/zodiac-module-nomad/tree/main/audits" target="_blank">Audits</a>',
    implementation:
      'Gnosis Guild (<a href="https://github.com/gnosisguild/zodiac-module-nomad/blob/main/contracts/NomadModule.sol" target="_blank">NomadModule</a>)',
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
      'Gnosis Guild (<a href="https://github.com/gnosisguild/zodiac-modifier-revert/blob/master/contracts/Revert.sol" target="_blank">Revert</a>)',
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
      'Safe Global (<a href="https://github.com/safe-global/safe-smart-account/blob/main/contracts/examples/guards/DebugTransactionGuard.sol" target="_blank">DebugTransactionGuard</a>)',
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
      'Safe Global (<a href="https://github.com/safe-global/safe-smart-account/blob/main/contracts/examples/guards/DelegateCallTransactionGuard.sol" target="_blank">DelegateCallTransactionGuard</a>)',
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
      'Safe Global (<a href="https://github.com/safe-global/safe-smart-account/blob/main/contracts/examples/guards/OnlyOwnersGuard.sol" target="_blank">OnlyOwnersGuard</a>)',
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
      'Safe Global (<a href="https://github.com/safe-global/safe-smart-account/blob/main/contracts/examples/guards/ReentrancyTransactionGuard.sol" target="_blank">ReentrancyTransactionGuard</a>)',
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
      'Dialectic (<a href="https://github.com/dialecticch/safe-flashloan/blob/main/contracts/FlashloanModule.sol" target="_blank">FlashloanModule</a>)',
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
      'Phala Network (<a href="https://github.com/Phala-Network/safe-vest-module/blob/master/contracts/VestingModule.sol" target="_blank">VestingModule</a>)',
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
      'Gelato (<a href="https://github.com/gelatodigital/gelato-safe-module/blob/master/contracts/GelatoSafeModule.sol" target="_blank">GelatoSafeModule</a>)',
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
      'Emiliano Bonassi (<a href="https://github.com/emilianobonassi/revoke-safe-module/blob/main/src/RevokeModule.sol" target="_blank">RevokeModule</a>)',
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
      'Emiliano Bonassi (<a href="https://github.com/emilianobonassi/zkSafe/blob/main/contracts/src/zkConnectModule.sol" target="_blank">zkConnectModule</a>)',
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
      'Aaron Abu Usama (<a href="https://github.com/pythonpete32/bico-safe-module/blob/main/src/BicoSafeModule.sol" target="_blank">BicoSafeModule</a>)',
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
      'Germán Martínez (<a href="https://github.com/germartinez/multi-transaction-guard/blob/main/contracts/MultiGuard.sol" target="_blank">MultiGuard</a>)',
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
      'bitbeckers (<a href="https://github.com/bitbeckers/moloch-safe-modules/blob/main/src/CookieJar.sol" target="_blank">CookieJar</a>)',
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
      'Onchainification Labs (<a href="https://github.com/onchainification/safe_panic_modules/blob/main/contracts/modules/RevokeModule.sol" target="_blank">RevokeModule</a>, <a href="https://github.com/onchainification/safe_panic_modules/blob/main/contracts/modules/AaveWithdrawModule.sol" target="_blank">AaveWithdrawModule</a>, <a href="https://github.com/onchainification/safe_panic_modules/blob/main/contracts/modules/UniswapWithdrawModule.sol" target="_blank">UniswapWithdrawModule</a>)',
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
      'Yevgeniy (<a href="https://github.com/roleengineer/token-withdrawal-module/blob/master/src/TokenWithdrawalModule.sol" target="_blank">TokenWithdrawalModule</a>)',
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
      'Onchainification Labs (<a href="https://github.com/onchainification/CowDumper/blob/main/src/CowDungerModule.sol" target="_blank">CowDungerModule</a>)',
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
      'Adam Cuculich (<a href="https://github.com/cucupac/x-safe/blob/main/src/God.sol" target="_blank">God</a>)',
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
      'Akshay Patel (<a href="https://github.com/unlocktheswap/Safe-AA/blob/main/contracts/contracts/RecoveryWithDelayPlugin.sol" target="_blank">RecoveryWithDelayPlugin</a>)',
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
      'Banana Wallet (<a href="https://github.com/Banana-Wallet/safe-intent-plugin/blob/main/contracts/IntentSafePlugin.sol" target="_blank">IntentSafePlugin</a>)',
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
      'itublockchain (<a href="https://github.com/itublockchain/eth-paris-session-key/blob/master/account-contracts/contracts/Safe4337SessionKeyModule.sol" target="_blank">Safe4337SessionKeyModule</a>)',
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
      'Ilya Savitsky (<a href="https://github.com/ipsavitsky/PaySplit/blob/main/contracts/contracts/Plugins.sol" target="_blank">SplitPayPlugin</a>)',
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
      'Unhosted-Wallet (<a href="https://github.com/Unhosted-Wallet/unhosted-modules/blob/main/recurring-execution/contracts/RecurringExecuteModule.sol" target="_blank">RecurringExecuteModule</a>)',
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
    implementation: `
    Clave Wallet (<a href="https://github.com/getclave/clave-contracts/blob/775efeb0a8b2a9ab7a3237dbebded4ae6ca45aaf/contracts/modules/recovery/SocialRecoveryModule.sol" target="_blank">SocialRecoveryModule</a>)
    <br />
    CANDIDE Labs (<a href="https://github.com/candidelabs/CandideWalletContracts/blob/main/contracts/modules/social_recovery/SocialRecoveryModule.sol" target="_blank">SocialRecoveryModule</a>)
    <br />
    True Wallet (<a href="https://github.com/TrueWallet/contracts/blob/main/src/modules/SocialRecoveryModule/SocialRecoveryModule.sol" target="_blank">SocialRecoveryModule</a>)
    `,
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
      'Clave Wallet (<a href="https://github.com/getclave/clave-contracts/blob/775efeb0a8b2a9ab7a3237dbebded4ae6ca45aaf/contracts/modules/recovery/CloudRecoveryModule.sol" target="_blank">CloudRecoveryModule</a>)',
    notes:
      'This is no longer used by the Clave wallet in favour of the Clave’s Social Recovery Module.',
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
      'Soul Wallet (<a href="https://github.com/SoulWallet/soul-wallet-contract/blob/develop/contracts/modules/keystore/KeyStoreModule.sol" target="_blank">KeyStoreModule</a>)',
    notes: `
    Upon wallet creation, it checks if the keystore has been synced. If so, the wallet's signing key is set to the keystore's signing key. Otherwise, it uses the initial signing key specified during creation.
    <br />
    The module also offers functionality to sync the wallet's signing key with the latest from the L1 keystore via the syncL1Keystore method. This ensures wallet signing keys can be dynamically updated to reflect changes in the keystore
    `,
  },
  {
    name: 'Security Control Module',
    description:
      'The SecurityControlModule is a default security module integrated into SoulWallet,\ndesigned to enhance security through a time-lock mechanism for managing module/hook/validator additions.',
    category: ['General'],
    module_type: ['Module (Soul Wallet)'],
    compatible_sca_frameworks: ['Soul Wallet'],
    audits: '',
    implementation: `
    Soul Wallet (<a href="https://github.com/SoulWallet/soul-wallet-contract/blob/develop/contracts/modules/securityControlModule/SecurityControlModule.sol" target="_blank">SecurityControlModule</a>)
    <br />
    True Wallet (<a href="https://github.com/TrueWallet/contracts/blob/main/src/modules/SecurityControlModule/SecurityControlModule.sol" target="_blank">SecurityControlModule</a>)
    `,
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
      'Soul Wallet (<a href="https://github.com/SoulWallet/soul-wallet-contract/blob/develop/contracts/modules/upgrade/UpgradeModule.sol" target="_blank">UpgradeModule</a>)',
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
      'Argent (<a href="https://github.com/argentlabs/argent-contracts/blob/develop/contracts/modules/SimpleUpgrader.sol" target="_blank">SimpleUpgrader</a>)',
    notes: '',
  },
  {
    name: 'Account Recovery (Social Recovery)',
    description:
      'The design of the Biconomy Account Recovery Module is highly inspired by Vitalik’s article. Enabling Account Recovery for the Smart Account means compromising on trustlessness and introducing additional risk which is an inevitable trade-off of enabling an opportunity to change a key that controls the Smart Account.',
    category: ['Security'],
    module_type: ['Plugin/Executor', 'Validator'],
    compatible_sca_frameworks: ['Biconomy'],
    audits:
      '<a href="https://github.com/bcnmy/scw-contracts/blob/develop/audits/Biconomy%20Account%20Recovery%20Module%20-%20Zellic%20Audit%20Report-II.pdf" target="_blank">Audit 1</a>, <a href="https://github.com/bcnmy/scw-contracts/blob/develop/audits/Biconomy%20Account%20Recovery%20Module%20-%20Kawach%20Security%20Assessment%20Report.pdf" target="_blank">Audit 2</a>',
    implementation:
      'Biconomy(<a href="https://github.com/bcnmy/scw-contracts/blob/develop/contracts/smart-account/modules/AccountRecoveryModule.sol" target="_blank">AccountRecoveryModule) - Compatible with Biconomy SCA framework',
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
      'Safe (<a href="https://github.com/5afe/safe-core-protocol-demo/blob/main/contracts/contracts/Plugins.sol" target="_blank">RelayPlugin</a>)',
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
      'Argent (<a href="https://github.com/argentlabs/argent-contracts/blob/develop/contracts/modules/RelayerManager.sol" target="_blank">RelayerManager</a>)',
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
      'Argent (<a href="https://github.com/argentlabs/argent-contracts/blob/develop/contracts/modules/SecurityManager.sol" target="_blank">SecurityManager</a>)',
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
      'Argent (<a href="https://github.com/argentlabs/argent-contracts/blob/develop/contracts/modules/TransactionManager.sol" target="_blank">TransactionManager</a>)',
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
      '<a href="https://github.com/etherspot/etherspot-prime-contracts/blob/mew-audit/audits/ModularEtherspotWallet" target="_blank">Audits</a>',
    implementation:
      'Etherspot (<a href="https://github.com/etherspot/etherspot-prime-contracts/blob/mew-audit/src/modular-etherspot-wallet/hooks/ModuleIsolationHook.sol" target="_blank">ModuleIsolationHook</a>)',
    notes: '',
  },
  {
    name: 'Timelocked Recovery (Ambire)',
    description:
      'Allows an account to be recovered after a given period of time',
    category: ['Security'],
    module_type: ['Validator'],
    compatible_sca_frameworks: ['Ambire'],
    audits: '',
    implementation:
      'Ambire (<a href="https://github.com/AmbireTech/ambire-common/blob/v2/contracts/RecoverySigValidator.sol" target="_blank">Timelocked Recovery</a>)',
    notes: '',
  },
  {
    name: 'DKIM Recovery (Ambire)',
    description:
      'Allows an account to be recovered by email using DKIM signatures',
    category: ['Security'],
    module_type: ['Validator'],
    compatible_sca_frameworks: ['Ambire'],
    audits:
      '<a href="https://github.com/AmbireTech/ambire-common/tree/v2/audits" target="_blank">All Ambire audits</a>',
    implementation:
      'Ambire (<a href="https://github.com/AmbireTech/ambire-common/blob/v2/contracts/DKIMRecoverySigValidator.sol" target="_blank">DKIM Recovery</a>)',
    notes: 'The DKIM Recovery won a grant from the Ethereum Foundation',
  },
];
export default modules;
