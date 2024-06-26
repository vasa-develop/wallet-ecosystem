import { ChartBarIcon } from '@/components/icons/ChartBarIcon';
import { ClipboardDocumentListIcon } from '@/components/icons/ClipboardDocumentListIcon';
import { CreditCardIcon } from '@/components/icons/CreditCardIcon';
import { GiftIcon } from '@/components/icons/GiftIcon';
import { KeyIcon } from '@/components/icons/KeyIcon';
import { PresentationChartLineIcon } from '@/components/icons/PresentationChartLineIcon';
import { ScaleIcon } from '@/components/icons/ScaleIcon';
import { ShieldCheckIcon } from '@/components/icons/ShieldCheckIcon';
import { ShieldExclamationIcon } from '@/components/icons/ShieldExclamationIcon';
import { Squares2X2Icon } from '@/components/icons/Squares2X2Icon';
import { SVGAttributes } from 'react';

declare global {
  interface ObjectConstructor {
    typedKeys<T>(obj: T): Array<keyof T>;
  }
}
Object.typedKeys = Object.keys as any;

export enum SECTIONS {
  STATS = 'Stats',
  ACTIVITY = 'Activity',
  SECURITY_ANALYSIS = 'Security Analysis',
  FEATURES = 'Features',
  SUPPORTED_STANDARD = 'Supported Standards',
  INCENTIVES = 'Incentives',
  SECURITY = 'Security',
  INCIDENTS = 'Past Incidents',
  LEGAL_COMPLIANCE = 'Legal Compliance',
  LICENSE = 'License',
}

export const SECTION_ICON: {
  [key in SECTIONS]: (props: SVGAttributes<SVGElement>) => JSX.Element;
} = {
  [SECTIONS.STATS]: ChartBarIcon,
  [SECTIONS.ACTIVITY]: PresentationChartLineIcon,
  [SECTIONS.SECURITY_ANALYSIS]: KeyIcon,
  [SECTIONS.FEATURES]: Squares2X2Icon,
  [SECTIONS.SUPPORTED_STANDARD]: ClipboardDocumentListIcon,
  [SECTIONS.INCENTIVES]: GiftIcon,
  [SECTIONS.SECURITY]: ShieldCheckIcon,
  [SECTIONS.INCIDENTS]: ShieldExclamationIcon,
  [SECTIONS.LEGAL_COMPLIANCE]: ScaleIcon,
  [SECTIONS.LICENSE]: CreditCardIcon,
};

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
  WINDOWS = 'Windows',
  MAC = 'Mac OS',
}
export const PLATFORM_IMAGES: { [key in WALLET_PLATFORM]: string } = {
  Chrome: '/logos/chrome.png',
  Firefox: '/logos/firefox.png',
  Opera: '/logos/opera.png',
  Edge: '/logos/edge.png',
  Android: '/logos/play-store.png',
  IOS: '/logos/app-store.png',
  Windows: '/logos/windows.png',
  'Mac OS': '/logos/mac.svg',
};
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

export enum AUDIT_RELEVANCE {
  UP_TO_DATE = 'Up to date',
  OUTDATED = 'Outdated',
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
