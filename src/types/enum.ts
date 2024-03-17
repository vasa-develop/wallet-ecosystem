export enum SECTIONS {
  STATS = 'Stats',
  ACTIVITY = 'Activity',
  SECURITY_ANALYSIS = 'Security Analysis',
  FEATURES = 'Features',
  SUPPORTED_STANDARD = 'Supported Standards',
  INCENTIVES = 'Incentives',
  SUPPORTED_CHAIN = 'Chain Supported',
  SECURITY_AUDIT = 'Security Audits',
  INCIDENTS = 'Past Incidents',
  LEGAL_COMPLIANCE = 'Legal Compliance',
  LICENSE = 'License',
}

export enum STAT_SECTIONS {
  DOWNLOADS = 'Downloads',
  DUNE_CHART = 'Dune Chart',
}
export enum FEATURE_TYPE {
  IN_APP = 'In App',
  SECURITY = 'Security',
  ENS_SUPPORT = 'ENS Support',
  SUPPORTED_HARDWARE_WALLETS = 'Hardware Wallet Supports',
}
export enum WALLET_PLATFORM {
  CHROME = 'Chrome',
  FIREFOX = 'Firefox',
  OPERA = 'Opera',
  EDGE = 'Edge',
  ANDROID = 'Android',
  IOS = 'IOS',
}
export enum SUPPORTED_STANDARD_TYPE {
  SUPPORTED_EIP = 'EIP Support Status',
}
export enum EIP_SUPPORT_STATUS {
  SUPPORTED = '✅',
  NOT_NEEDED = '❎',
  WIP = '⌛',
  NOT_SUPPORTED = '❌',
  NOT_CLEAR = '❓',
  EIP_NOT_READY = '🛑',
}
export enum SECURITY_AUDIT_TYPE {
  AUDIT = 'Audits',
  BUG_BOUNTY = 'Bug Bounty',
}

export enum ENSSupportType {
  MAINNET = 'Mainnet',
  SUBDOMAINS = 'Subdomains',
  OFFCHAIN = 'Offchain',
  L2 = 'L2s',
  CUSTOM = 'custom',
}

export const ENSSupportDescription: { [key in ENSSupportType]: string } = {
  [ENSSupportType.MAINNET]:
    'Whether a user is able to send transactions to a standard ENS (e.g. user.eth) on mainnet',
  [ENSSupportType.SUBDOMAINS]:
    'Whether a user is able to send transactions to an ENS subdomain (e.g. hot.user.eth) on mainnet',
  [ENSSupportType.OFFCHAIN]:
    'Whether a user is able to send transactions to an ENS with an offchain resolver on mainnet.',
  [ENSSupportType.L2]:
    'Whether a user is able to send transactions to an ENS on an L2 (tested on Optimism)',
  [ENSSupportType.CUSTOM]:
    'Whether a user is able to send transactions to an ENS with a custom domain on mainnet (e.g. user.cb.id)',
};
