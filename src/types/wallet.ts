import React from 'react';
import {
  EIP_SUPPORT_STATUS,
  ENSSupportType,
  FEATURE_TYPE,
  SECTIONS,
  SECURITY_AUDIT_TYPE,
  STAT_SECTIONS,
  SUPPORTED_STANDARD_TYPE,
  WALLET_PLATFORM,
  AUDIT_RELEVANCE,
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

type Features = {
  [FEATURE_TYPE.IN_APP]: Array<{
    feature: string;
    description: string;
    isSupported: boolean;
    remark?: string;
  }>;
  [FEATURE_TYPE.SECURITY]: Array<{
    feature: string;
    description: string;
    isSupported: boolean;
    remark?: string;
  }>;
  [FEATURE_TYPE.ENS_SUPPORT]: {
    [key in ENSSupportType]: { isSupported: boolean; description: string };
  };
  [FEATURE_TYPE.SUPPORTED_HARDWARE_WALLETS]: Array<{
    name: string;
    imgUrl: string;
  }>;
};

type EIPSupportStatus = Array<{
  eipName: string;
  eipType: string;
  eipStatus: string;
  supportStatus: EIP_SUPPORT_STATUS;
}>;

type SupportedStandard = {
  [SUPPORTED_STANDARD_TYPE.SUPPORTED_EIP]: EIPSupportStatus;
};

type Incentives = {} | undefined;

type SupportedChain = {};

type Audit = Array<{
  auditor: string;
  date: string;
  auditedVersion: Array<{
    name: string;
    link: string;
  }>;
  currentVersion: Array<{
    name: string;
    link: string;
  }>;
  relevance: AUDIT_RELEVANCE;
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
  [SECTIONS.SECURITY_ANALYSIS]: () => React.JSX.Element;
  [SECTIONS.FEATURES]: Features;
  [SECTIONS.SUPPORTED_STANDARD]: SupportedStandard;
  [SECTIONS.INCENTIVES]: Incentives;
  [SECTIONS.SECURITY]: SecurityAudit;
  [SECTIONS.INCIDENTS]: Incidents;
  [SECTIONS.LEGAL_COMPLIANCE]: LegalCompliance;
  [SECTIONS.LICENSE]: License;
};
