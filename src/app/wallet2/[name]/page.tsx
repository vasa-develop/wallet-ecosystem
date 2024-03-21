import { WalletData } from '@/app/types';
import EipSupportTable from '@/components/EipSupportTable';
import GithubContributorCount from '@/components/GithubContributorCount';
import GithubHeatmap from '@/components/GithubHeatmap';
import WalletSideNav from '@/components/WalletSideNav';
import WalletSupportedStatus from '@/components/WalletSupportedStatus';
import { ArrowTopRightOnSquareIcon } from '@/components/icons/ArrowTopRightOnSquareIcon';
import GithubIcon from '@/components/icons/GithubIcon';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { wallets2 } from '@/data/wallets';
import {
  FEATURE_TYPE,
  PLATFORM_IMAGES,
  SECTIONS,
  SECURITY_AUDIT_TYPE,
  STAT_SECTIONS,
} from '@/types/enum';
import { Wallet } from '@/types/wallet';

import { clsx } from 'clsx';
import { ExternalLinkIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React, { Fragment } from 'react';

export default function page({ params }: { params: { name: string } }) {
  const walletData = wallets2[params.name];
  return (
    <div className=" py-2 flex gap-2 m-auto">
      <WalletSideNav sections={Object.typedKeys(walletData)} />
      <div className="flex-1  flex flex-col p-2">
        {Object.typedKeys(walletData).map((section, index) => {
          let SectionComponent = <NotDone />;
          switch (section) {
            case SECTIONS.STATS:
              SectionComponent = <WalletStats stats={walletData[section]} />;
              break;
            case SECTIONS.ACTIVITY:
              SectionComponent = (
                <WalletActivity activity={walletData[section]} />
              );
              break;
            case SECTIONS.LEGAL_COMPLIANCE:
              SectionComponent = (
                <WalletLegalComplieance data={walletData[section]} />
              );
              break;
            case SECTIONS.LICENSE:
              SectionComponent = <WalletLicense data={walletData[section]} />;
              break;
            case SECTIONS.SECURITY:
              SectionComponent = <WalletSecurity data={walletData[section]} />;
              break;
            case SECTIONS.INCENTIVES:
              SectionComponent = (
                <WalletIncentives data={walletData[section]} />
              );
              break;
            case SECTIONS.FEATURES:
              SectionComponent = <WalletFeatures data={walletData[section]} />;
              break;
            case SECTIONS.SUPPORTED_STANDARD:
              SectionComponent = (
                <WalletSupportedStatus data={walletData[section]} />
              );
              break;
          }
          return (
            <div className="mb-8">
              <h2 className="text-xl mb-3 font-bold">{section}</h2>
              <div>{SectionComponent}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function WalletStats({ stats }: { stats: Wallet[SECTIONS.STATS] }) {
  return (
    <>
      {stats.Downloads && (
        <div className="grid grid-cols-4 gap-2">
          {Object.typedKeys(stats.Downloads).map((platform, index) => {
            return (
              <div
                key={index}
                className="flex hover:shadow-xl transition-shadow border rounded px-3 py-2 gap-3 border-gray-700 items-center"
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
              </div>
            );
          })}
        </div>
      )}
      {stats[STAT_SECTIONS.DUNE_CHART] && (
        <div>
          {stats[STAT_SECTIONS.DUNE_CHART].map((data, index) => {
            return (
              <>
                <h3 className="text-lg mt-4 mb-1">{data.name}</h3>
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
    </>
  );
}

function WalletIncentives({ data }: { data: Wallet[SECTIONS.INCENTIVES] }) {
  return !data && <p className="text-gray-400 description">No incentives</p>;
}

function WalletActivity({ activity }: { activity: Wallet[SECTIONS.ACTIVITY] }) {
  return (
    <>
      {activity.map((data, index) => {
        return (
          <Fragment key={index}>
            <h3 className="text-lg flex items-center gap-2 mt-4 mb-1">
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
            <GithubHeatmap
            //   colour={sub_section.colour}
            //   squareNumber={sub_section.squareNumber}
            //   count={sub_section.count}
            //   squareGap={sub_section.squareGap}
            //   squareSize={sub_section.squareSize}
            />
          </Fragment>
        );
      })}
    </>
  );
}

function WalletFeatures({ data }: { data: Wallet[SECTIONS.FEATURES] }) {
  return (
    <div className=" py-2 flex gap-2 m-auto">
      <div className="flex-1  flex flex-col p-2">
        {Object.typedKeys(data).map((section, index) => {
          let SectionComponent = <NotDone />;
          switch (section) {
            case FEATURE_TYPE.IN_APP:
            case FEATURE_TYPE.SECURITY:
              SectionComponent = <WalletInAppFeature data={data[section]} />;
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
            <div className="mb-8">
              <h2 className="text-xl mb-3 font-bold">{section}</h2>
              <div>{SectionComponent}</div>
            </div>
          );
        })}
      </div>
    </div>
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
      <CardContent className="p-2">
        <TooltipProvider>
          <Table>
            <TableBody>
              {data.map((row, rowIndex) => (
                <TableRow key={rowIndex}>
                  <TableCell className="font-medium">{row.feature}</TableCell>
                  <TableCell className="text-gray-500">
                    {row.description || '-'}
                  </TableCell>
                  <TableCell align="center">
                    <Tooltip>
                      <TooltipTrigger>
                        {row.isSupported ? '✅' : '❌'}
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>{row.remark}</p>
                      </TooltipContent>
                    </Tooltip>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TooltipProvider>
      </CardContent>
    </Card>
  );
}

function NotDone() {
  return 'TODO';
}

function WalletLicense({ data }: { data: Wallet[SECTIONS.LICENSE] }) {
  return (
    <Card>
      <CardContent className="p-4 flex flex-col gap-2">
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
      </CardContent>
    </Card>
  );
}

function WalletLegalComplieance({
  data,
}: {
  data: Wallet[SECTIONS.LEGAL_COMPLIANCE];
}) {
  return (
    <Card>
      <CardContent className="p-4">
        <div className=" shadow rounded-lg">
          <p className="description text-gray-400 mb-4">
            Legal Compliance refers to the wallet&apos;s adherence to relevant
            laws, regulations, and guidelines in the jurisdictions in which it
            operates. This includes regulations regarding user data privacy,
            anti-money laundering (AML), Know Your Customer (KYC) processes, and
            more. Compliance ensures that the wallet operates in a legal and
            ethical manner, providing users with a secure and trustworthy
            platform for managing their digital assets.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {data.map((licence, index) => {
              return (
                <div
                  key={index}
                  className="border  border-gray-600 p-4 rounded-lg"
                >
                  <h4 className="opacity-70 font-semibold mb-2">
                    {licence[0]}
                  </h4>
                  <p className=" text-sm text-gray-500 mb-2">{licence[1]}</p>
                  <p className="font-semibold ">{licence[2]}</p>
                </div>
              );
            })}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

function WalletSecurity({ data }: { data: Wallet[SECTIONS.SECURITY] }) {
  return (
    <div className="flex flex-col gap-2">
      {data.Audits && (
        <Card>
          <CardContent className="p-4 pt-0">
            <h4 className="font-semibold text-xl py-4">Audit</h4>

            <>
              <p className=" text-sm leading-5 text-gray-400 mb-4">
                Audits in Web3 refer to the process of conducting comprehensive
                security assessments and evaluations of blockchain-based
                projects, smart contracts, decentralized applications (dApps),
                and other Web3 protocols. The purpose of these audits is to
                identify vulnerabilities, potential risks, and weaknesses in the
                code and system architecture to enhance security, reliability,
                and trustworthiness.
              </p>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Auditor</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead>Audited Version</TableHead>
                    <TableHead>Current Version</TableHead>
                    <TableHead>Audit Relevance</TableHead>
                    <TableHead>Audit Report</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {data.Audits.map((audit, rowIndex) => {
                    return (
                      <TableRow key={rowIndex}>
                        <TableCell>{audit.auditor}</TableCell>
                        <TableCell>{audit.date}</TableCell>
                        <TableCell>
                          <div className="flex flex-wrap gap-2">
                            {audit.auditedVersion.map((v) => (
                              <Badge variant="outline">
                                <Link href={v.link} target="_blank">
                                  {v.name}
                                </Link>
                              </Badge>
                            ))}
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="flex flex-wrap gap-2">
                            {audit.currentVersion.map((v) => (
                              <Badge variant="outline">
                                <Link href={v.link} target="_blank">
                                  {v.name}
                                </Link>
                              </Badge>
                            ))}
                          </div>
                        </TableCell>
                        <TableCell>{audit.relevance}</TableCell>
                        <TableCell>
                          <Link
                            href={audit.report}
                            target="_blank"
                            className="flex items-center gap-1"
                          >
                            Link
                            <ExternalLinkIcon className="inline" size={18} />
                          </Link>
                        </TableCell>
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
            </>
          </CardContent>
        </Card>
      )}
      {data['Bug Bounty'] && (
        <Card>
          <CardContent className="p-4 pt-0">
            <h4 className="font-semibold text-xl py-4">Audit</h4>

            <>
              <p className=" text-sm leading-5 text-gray-400 mb-4">
                A bug bounty program in Web3 is an initiative offered by
                blockchain projects, cryptocurrency platforms, or decentralized
                applications (dApps) to incentivize security researchers and
                ethical hackers to discover and report vulnerabilities or bugs
                in their systems. It is a crowdsourced approach to security
                testing where individuals or teams are rewarded for responsibly
                disclosing vulnerabilities they find.
              </p>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Platform</TableHead>
                    <TableHead>Reward</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Scope</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {data[SECURITY_AUDIT_TYPE.BUG_BOUNTY].map(
                    (bugBounty, rowIndex) => {
                      return (
                        <TableRow key={rowIndex}>
                          <TableCell>{bugBounty.platform}</TableCell>
                          <TableCell>{bugBounty.reward}</TableCell>
                          <TableCell>{bugBounty.status}</TableCell>
                          <TableCell>
                            <Link
                              href={bugBounty.scope}
                              target="_blank"
                              className="flex items-center gap-1"
                            >
                              Link
                              <ExternalLinkIcon className="inline" size={20} />
                            </Link>
                          </TableCell>
                        </TableRow>
                      );
                    }
                  )}
                </TableBody>
              </Table>
            </>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
