import GithubContributorCount from '@/components/GithubContributorCount';
import GithubHeatmap from '@/components/GithubHeatmap';
import Title from '@/components/Title';
import WalletSideNav from '@/components/WalletSideNav';
import WalletSupportedStatus from '@/components/WalletSupportedStatus';
import { ArrowTopRightOnSquareIcon } from '@/components/icons/ArrowTopRightOnSquareIcon';
import GithubIcon from '@/components/icons/GithubIcon';
import { wallets } from '@/data/wallets';
import {
  FEATURE_TYPE,
  PLATFORM_IMAGES,
  SECTIONS,
  SECTION_ICON,
  SECURITY_AUDIT_TYPE,
  STAT_SECTIONS,
} from '@/types/enum';
import { Wallet } from '@/types/wallet';
import { Badge, Card, Table, Tooltip } from '@radix-ui/themes';

import { clsx } from 'clsx';
import { ExternalLinkIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React, { Fragment } from 'react';

export default function page({ params }: { params: { name: string } }) {
  const walletData = wallets[params.name];
  const walletSectionData = walletData.sections;
  return (
    <>
      <div className="container">
        <div className=" py-2 flex gap-2 m-auto">
          <WalletSideNav sections={Object.typedKeys(walletSectionData)} />

          <div className="flex-1  flex flex-col p-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 mb-4">
                <img
                  src={walletData.image}
                  width={64}
                  className="p-2"
                  height={64}
                />
                <div>
                  <h2 className="text-lg font-bold">{walletData.name}</h2>
                  <Link
                    href={`https://${walletData.url}`}
                    target="_blank"
                    className="text-sm text-gray-400"
                  >
                    {walletData.url}
                  </Link>
                </div>
              </div>
              <div className="text-sm  text-gray-400">
                Last Updated:{' '}
                <span className="font-medium text-white">
                  {walletData.updatedAt}
                </span>
              </div>
            </div>
            {Object.typedKeys(walletSectionData).map((section, index) => {
              let SectionComponent = <NotDone />;
              switch (section) {
                case SECTIONS.STATS:
                  SectionComponent = (
                    <WalletStats stats={walletSectionData[section]} />
                  );
                  break;
                case SECTIONS.ACTIVITY:
                  SectionComponent = (
                    <WalletActivity activity={walletSectionData[section]} />
                  );
                  break;
                case SECTIONS.LEGAL_COMPLIANCE:
                  SectionComponent = (
                    <WalletLegalComplieance data={walletSectionData[section]} />
                  );
                  break;
                case SECTIONS.LICENSE:
                  SectionComponent = (
                    <WalletLicense data={walletSectionData[section]} />
                  );
                  break;
                case SECTIONS.SECURITY:
                  SectionComponent = (
                    <WalletSecurity data={walletSectionData[section]} />
                  );
                  break;
                case SECTIONS.INCENTIVES:
                  SectionComponent = (
                    <WalletIncentives data={walletSectionData[section]} />
                  );
                  break;
                case SECTIONS.SECURITY_ANALYSIS:
                  SectionComponent = (
                    <Card className="p-6">{walletSectionData[section]()}</Card>
                  );
                  break;
                case SECTIONS.FEATURES:
                  SectionComponent = (
                    <WalletFeatures data={walletSectionData[section]} />
                  );
                  break;
                case SECTIONS.SUPPORTED_STANDARD:
                  SectionComponent = (
                    <WalletSupportedStatus data={walletSectionData[section]} />
                  );
                  break;
                case SECTIONS.INCIDENTS:
                  SectionComponent = (
                    <div>
                      <NotDone />
                    </div>
                  );
                  break;
              }
              const Icon = SECTION_ICON[section];
              return (
                <>
                  <div id={section} className="mb-8">
                    <h2 className="text-xl mb-3 font-bold flex items-center gap-1.5">
                      <Icon width={20} strokeWidth={2} />
                      {section}
                    </h2>
                    <div>{SectionComponent}</div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

function WalletStats({ stats }: { stats: Wallet[SECTIONS.STATS] }) {
  return (
    <Card className="p-6">
      {stats.Downloads && (
        <div className="grid grid-cols-4 gap-2">
          {Object.typedKeys(stats.Downloads).map((platform, index) => {
            return (
              <Card
                key={index}
                className="flex hover:shadow-xl transition-shadow gap-3 items-center"
              >
                <Image
                  src={PLATFORM_IMAGES[platform]}
                  width={30}
                  height={30}
                  alt={platform}
                />
                <div>
                  <div className="text-sm text-gray-400">{platform}</div>
                  <div className="font-medium text-gray-300">
                    {stats.Downloads[platform]}
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      )}
      <figcaption>
        These are best estimates on downloads from various extension and app
        stores.
      </figcaption>
      {stats[STAT_SECTIONS.DUNE_CHART] && (
        <div>
          {stats[STAT_SECTIONS.DUNE_CHART].map((data, index) => {
            return (
              <>
                <h3 className="text-lg font-bold mt-4">{data.name}</h3>
                <div
                  className={clsx({
                    'grid grid-cols-2 gap-2': data.duneEmbeds.length > 1,
                  })}
                >
                  {data.duneEmbeds.map((link, index) => (
                    <iframe
                      key={index}
                      className={'invert mt-1 w-full'}
                      src={link}
                      height={400}
                      frameBorder="0"
                      scrolling="no"
                    ></iframe>
                  ))}
                </div>
              </>
            );
          })}
        </div>
      )}
    </Card>
  );
}

function WalletIncentives({ data }: { data: Wallet[SECTIONS.INCENTIVES] }) {
  return !data && <p className="text-gray-400 description">No incentives</p>;
}

function WalletActivity({ activity }: { activity: Wallet[SECTIONS.ACTIVITY] }) {
  return (
    <Card className="p-6 gap-3 flex flex-col">
      {activity.map((data, index) => {
        return (
          <div key={index}>
            <h3 className="text-lg flex items-center gap-2">
              <GithubIcon width={20} height={20} />
              <Link
                href={`https://github.com/${data.repo}`}
                target="_blank"
                className="flex items-center gap-2"
              >
                {data.name}
                <ArrowTopRightOnSquareIcon className="opacity-50" width={20} />
              </Link>
            </h3>
            <GithubContributorCount repo={data.repo} />
            <GithubHeatmap repo={data.repo} />
          </div>
        );
      })}
    </Card>
  );
}

function WalletFeatures({ data }: { data: Wallet[SECTIONS.FEATURES] }) {
  return (
    <Card className="flex gap-2 p-6 flex-col">
      {Object.typedKeys(data).map((section, index) => {
        let SectionComponent = <NotDone />;
        switch (section) {
          case FEATURE_TYPE.IN_APP:
          case FEATURE_TYPE.SECURITY:
            SectionComponent = <WalletInAppFeature data={data[section]} />;
            break;
          case FEATURE_TYPE.SUPPORTED_HARDWARE_WALLETS:
            SectionComponent = (
              <SupportedHardwareWallets data={data[section]} />
            );
            break;
          case FEATURE_TYPE.ENS_SUPPORT:
            SectionComponent = (
              <WalletInAppFeature
                data={Object.typedKeys(data[section]).map((k) => ({
                  feature: k.toString(),
                  description: data[section][k].description,
                  isSupported: data[section][k].isSupported,
                }))}
              />
            );
            break;
        }
        return (
          <div key={index} className="mb-8  last:mb-0 ">
            <h2 className="text-lg mb-3 font-bold">{section}</h2>
            <div>{SectionComponent}</div>
          </div>
        );
      })}
    </Card>
  );
}

function WalletInAppFeature({
  data,
}: {
  data:
    | Wallet[SECTIONS.FEATURES][FEATURE_TYPE.IN_APP]
    | Wallet[SECTIONS.FEATURES][FEATURE_TYPE.SECURITY];
}) {
  return (
    <Card>
      <Table.Root>
        <Table.Body>
          {data.map((row, rowIndex) => (
            <Table.Row key={rowIndex}>
              <Table.Cell className="font-medium ">{row.feature}</Table.Cell>
              <Table.Cell className="text-gray-500 ">
                {row.description || '-'}
              </Table.Cell>
              <Table.Cell align="center" className="w-20">
                <Tooltip content={row.remark}>
                  <div>{row.isSupported ? '✅' : '❌'}</div>
                </Tooltip>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>
    </Card>
  );
}

function SupportedHardwareWallets({
  data,
}: {
  data: Wallet[SECTIONS.FEATURES][FEATURE_TYPE.SUPPORTED_HARDWARE_WALLETS];
}) {
  return (
    <div className="grid grid-cols-6 gap-2">
      {data.map((d, i) => {
        return (
          <Tooltip key={i} content={d.name}>
            <Card className="px-8 py-4 flex items-center">
              <img src={d.imgUrl} alt={d.name} />
            </Card>
          </Tooltip>
        );
      })}
    </div>
  );
}

function NotDone() {
  return 'TODO';
}

function WalletLicense({ data }: { data: Wallet[SECTIONS.LICENSE] }) {
  return (
    <Card className="p-6">
      <div className="flex flex-col gap-2">
        {data.map((data, index) => {
          return (
            <Link
              key={index}
              href={data.link}
              target="_blank"
              className="flex items-center gap-2"
            >
              {data.name} <ExternalLinkIcon size={20} />
            </Link>
          );
        })}
      </div>
    </Card>
  );
}

function WalletLegalComplieance({
  data,
}: {
  data: Wallet[SECTIONS.LEGAL_COMPLIANCE];
}) {
  return (
    <Card className="p-6">
      <div className=" shadow rounded-lg">
        <p className="description text-gray-400 mb-4">
          Legal Compliance refers to the wallet&apos;s adherence to relevant
          laws, regulations, and guidelines in the jurisdictions in which it
          operates. This includes regulations regarding user data privacy,
          anti-money laundering (AML), Know Your Customer (KYC) processes, and
          more. Compliance ensures that the wallet operates in a legal and
          ethical manner, providing users with a secure and trustworthy platform
          for managing their digital assets.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {data.map((licence, index) => {
            return (
              <Card key={index}>
                <h4 className="opacity-70 font-semibold mb-2">{licence[0]}</h4>
                <p className=" text-sm text-gray-500 mb-2">{licence[1]}</p>
                <p className="font-semibold ">{licence[2]}</p>
              </Card>
            );
          })}
        </div>
      </div>
    </Card>
  );
}

function WalletSecurity({ data }: { data: Wallet[SECTIONS.SECURITY] }) {
  return (
    <div className="flex flex-col gap-2">
      {data.Audits && (
        <Card className="p-6">
          <Title level={4} className="mb-3">
            Audit
          </Title>
          <>
            <p className=" text-sm leading-5 text-gray-400 mb-4">
              Audits in Web3 refer to the process of conducting comprehensive
              security assessments and evaluations of blockchain-based projects,
              smart contracts, decentralized applications (dApps), and other
              Web3 protocols. The purpose of these audits is to identify
              vulnerabilities, potential risks, and weaknesses in the code and
              system architecture to enhance security, reliability, and
              trustworthiness.
            </p>
            <Table.Root>
              <Table.Header>
                <Table.Row>
                  <Table.ColumnHeaderCell>Auditor</Table.ColumnHeaderCell>
                  <Table.ColumnHeaderCell>Date</Table.ColumnHeaderCell>
                  <Table.ColumnHeaderCell>
                    Audited Version
                  </Table.ColumnHeaderCell>
                  <Table.ColumnHeaderCell>
                    Current Version
                  </Table.ColumnHeaderCell>
                  <Table.ColumnHeaderCell>
                    Audit Relevance
                  </Table.ColumnHeaderCell>
                  <Table.ColumnHeaderCell>Audit Report</Table.ColumnHeaderCell>
                </Table.Row>
              </Table.Header>
              <Table.Body>
                {data.Audits.map((audit, rowIndex) => {
                  return (
                    <Table.Row key={rowIndex}>
                      <Table.Cell>{audit.auditor}</Table.Cell>
                      <Table.Cell>{audit.date}</Table.Cell>
                      <Table.Cell>
                        <div className="flex flex-wrap gap-2">
                          {audit.auditedVersion.map((v, i) => (
                            <Badge key={i} variant="outline">
                              <Link href={v.link} target="_blank">
                                {v.name}
                              </Link>
                            </Badge>
                          ))}
                        </div>
                      </Table.Cell>
                      <Table.Cell>
                        <div className="flex flex-wrap gap-2">
                          {audit.currentVersion.map((v, i) => (
                            <Badge key={i} variant="outline">
                              <Link href={v.link} target="_blank">
                                {v.name}
                              </Link>
                            </Badge>
                          ))}
                        </div>
                      </Table.Cell>
                      <Table.Cell>{audit.relevance}</Table.Cell>
                      <Table.Cell>
                        <Link
                          href={audit.report}
                          target="_blank"
                          className="flex items-center gap-1"
                        >
                          Link
                          <ExternalLinkIcon className="inline" size={18} />
                        </Link>
                      </Table.Cell>
                    </Table.Row>
                  );
                })}
              </Table.Body>
            </Table.Root>
          </>
        </Card>
      )}
      {data['Bug Bounty'] && (
        <Card className="p-6">
          <Title level={4} className="mb-3">
            Bug Bounty
          </Title>
          <>
            <p className=" text-sm leading-5 text-gray-400 mb-4">
              A bug bounty program in Web3 is an initiative offered by
              blockchain projects, cryptocurrency platforms, or decentralized
              applications (dApps) to incentivize security researchers and
              ethical hackers to discover and report vulnerabilities or bugs in
              their systems. It is a crowdsourced approach to security testing
              where individuals or teams are rewarded for responsibly disclosing
              vulnerabilities they find.
            </p>
            <Table.Root>
              <Table.Header>
                <Table.Row>
                  <Table.ColumnHeaderCell>Platform</Table.ColumnHeaderCell>
                  <Table.ColumnHeaderCell>Reward</Table.ColumnHeaderCell>
                  <Table.ColumnHeaderCell>Status</Table.ColumnHeaderCell>
                  <Table.ColumnHeaderCell>Scope</Table.ColumnHeaderCell>
                </Table.Row>
              </Table.Header>
              <Table.Body>
                {data[SECURITY_AUDIT_TYPE.BUG_BOUNTY].map(
                  (bugBounty, rowIndex) => {
                    return (
                      <Table.Row key={rowIndex}>
                        <Table.Cell>{bugBounty.platform}</Table.Cell>
                        <Table.Cell>{bugBounty.reward}</Table.Cell>
                        <Table.Cell>{bugBounty.status}</Table.Cell>
                        <Table.Cell>
                          <Link
                            href={bugBounty.scope}
                            target="_blank"
                            className="flex items-center gap-1"
                          >
                            Link
                            <ExternalLinkIcon className="inline" size={20} />
                          </Link>
                        </Table.Cell>
                      </Table.Row>
                    );
                  }
                )}
              </Table.Body>
            </Table.Root>
          </>
        </Card>
      )}
    </div>
  );
}
