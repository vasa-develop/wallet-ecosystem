export interface WalletDataSubSection {
  id: number;
  sub_section_name: string;
  type: string;
  [key: string]: any;
}

export interface WalletDataSection {
  id: number;
  section_name: string;
  sub_sections: WalletDataSubSection[];
}

export interface WalletData {
  id: string;
  name: string;
  icon: string;
  sections: WalletDataSection[];
}

export type WalletContent = WalletData[];

export enum WalletSubSectionTypes {
  GITHUB_HEATMAP = 'github_heatmap',
  GITHUB_CONTRIBUTOR_COUNT = 'github_contributor_count',
  DUNE_CHART = 'dune_chart',
  DATA_TABLE = 'data_table',
  STAT_CARDS = 'stat_cards',
  EXPLAINER = 'explainer',
  SECURITY_AUDIT = 'security_audit',
}
