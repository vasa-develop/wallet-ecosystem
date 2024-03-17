import {
  FEATURE_TYPE,
  SECTIONS,
  SECURITY_AUDIT_TYPE,
  STAT_SECTIONS,
  SUPPORTED_STANDARD_TYPE,
  WALLET_PLATFORM,
} from './enum';

type Downloads = {
  [key in WALLET_PLATFORM]: string;
};

type DuneChart = Array<{
  name: string;
  duneEmbeds: string[];
}>;

type Stats = {
  [STAT_SECTIONS.DOWNLOADS]: Downloads;
  [STAT_SECTIONS.DUNE_CHART]?: DuneChart | undefined;
};

type Activity = Array<{
  name: string;
  repo: string;
}>;

type SecurityAnalysis = {};

type Features = {
  [FEATURE_TYPE.IN_APP]: {};
  [FEATURE_TYPE.SECURITY]: {};
};

type EIPSupportStatus = Array<{
  eipName: string;
  eipType: string;
  eipStatus: string;
  supportStatus: string;
}>;

type SupportedStandard = {
  [SUPPORTED_STANDARD_TYPE.EIP_SUPPORT_STATUS]: EIPSupportStatus;
};

type Incentives = {};

type SupportedChain = {};

type Audit = Array<{
  auditor: string;
  date: string;
  auditedVersion: string;
  currentVersion: string;
  relevance: string;
  report: string;
}>;

type BugBounty = Array<{
  platform: string;
  reward: string;
  status: string;
  scope: string;
}>;

type SecurityAudit = {
  [SECURITY_AUDIT_TYPE.AUDIT]: Audit;
  [SECURITY_AUDIT_TYPE.BUG_BOUNTY]: BugBounty;
};

type Incidents = [];

type LegalCompliance = Array<[string, string, string]>;

type License = Array<{
  name: string;
  link: string;
}>;

export type Wallet = {
  [SECTIONS.STATS]: Stats;
  [SECTIONS.ACTIVITY]: Activity;
  [SECTIONS.SECURITY_ANALYSIS]: SecurityAnalysis;
  [SECTIONS.FEATURES]: Features;
  [SECTIONS.SUPPORTED_STANDARD]: SupportedStandard;
  [SECTIONS.INCENTIVES]: Incentives;
  [SECTIONS.SUPPORTED_CHAIN]: SupportedChain;
  [SECTIONS.SECURITY_AUDIT]: SecurityAudit;
  [SECTIONS.INCIDENTS]: Incidents;
  [SECTIONS.LEGAL_COMPLIANCE]: LegalCompliance;
  [SECTIONS.LICENSE]: License;
};