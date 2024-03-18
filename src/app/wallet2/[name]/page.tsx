import GithubContributorCount from '@/components/GithubContributorCount';
import GithubHeatmap from '@/components/GithubHeatmap';
import WalletSideNav from '@/components/WalletSideNav';
import { Card, CardContent } from '@/components/ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { wallets2 } from '@/data/wallets';
import { PLATFORM_IMAGES, SECTIONS, STAT_SECTIONS } from '@/types/enum';
import { Wallet } from '@/types/wallet';
import { clsx } from 'clsx';
import { ExternalLinkIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function page({ params }: { params: { name: string } }) {
  const walletData = wallets2[params.name];
  return (
    <div className=" flex gap-2 m-auto">
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
          }
          return (
            <>
              <h2 className="text-xl font-bold">{section}</h2>
              <div>{SectionComponent}</div>
            </>
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
              <div className="flex hover:shadow-xl transition-shadow border rounded px-3 py-2 gap-3 border-gray-700 items-center">
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
                  {data.duneEmbeds.map((link) => (
                    <iframe
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

function WalletActivity({ activity }: { activity: Wallet[SECTIONS.ACTIVITY] }) {
  return (
    <>
      {activity.map((data, index) => {
        return (
          <>
            <h3 className="text-lg mt-4 mb-1">{data.name}</h3>
            <GithubContributorCount repo={data.repo} />
            <GithubHeatmap
            //   colour={sub_section.colour}
            //   squareNumber={sub_section.squareNumber}
            //   count={sub_section.count}
            //   squareGap={sub_section.squareGap}
            //   squareSize={sub_section.squareSize}
            />
          </>
        );
      })}
    </>
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
          <p className=" text-sm leading-5 text-gray-400 mb-4">
            Legal Compliance refers to the wallet's adherence to relevant laws,
            regulations, and guidelines in the jurisdictions in which it
            operates. This includes regulations regarding user data privacy,
            anti-money laundering (AML), Know Your Customer (KYC) processes, and
            more. Compliance ensures that the wallet operates in a legal and
            ethical manner, providing users with a secure and trustworthy
            platform for managing their digital assets.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {data.map((licence, index) => {
              return (
                <div className="border  border-gray-600 p-4 rounded-lg">
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
    <Card>
      <CardContent className="p-4">
        {data.Audits && (
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
                      <TableCell>{audit.auditedVersion}</TableCell>
                      <TableCell>{audit.currentVersion}</TableCell>
                      <TableCell>{audit.relevance}</TableCell>
                      <TableCell>{audit.report}</TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </>
        )}
      </CardContent>
    </Card>
  );
}
