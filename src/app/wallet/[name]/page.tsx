import { WalletSubSectionTypes } from '@/app/types';
import DataTable from '@/components/DataTable';
import DuneChart from '@/components/DuneChart';
import Explainer from '@/components/Explainer';
import GithubContributorCount from '@/components/GithubContributorCount';
import GithubHeatmap from '@/components/GithubHeatmap';
import SecurityAudits from '@/components/SecurityAudits';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import Link from 'next/link';
import React, { Fragment } from 'react';
import wallets from '@/data/wallets';
import StatCard from '@/components/StatCard';

export default function Page({ params }: { params: { name: string } }) {
  const walletData = wallets[params.name];

  return (
    <>
      <div className=" flex gap-2 m-auto">
        <div className="w-64 flex-shrink-0 p-2 sticky">
          <div className="sticky text-sm font-medium top-4">
            {walletData.sections.map((section, index) => (
              <div
                className="relative hover:after:h-full after:content-[''] after:absolute after:h-0 hover:after:top-0 after:w-1 after:left-0 after:bg-white after:transition-all after:duration-200 after:ease-in-out after:top-[50%] group py-2 px-3 rounded-md mb-3 opacity-60 hover:opacity-100 transition-opacity cursor-pointer "
                key={index}
              >
                <Link
                  href={`#${section.section_name
                    .toLocaleLowerCase()
                    .replace(' ', '_')}`}
                >
                  {section.section_name}
                </Link>
              </div>
            ))}
          </div>
        </div>
        <div className="flex-1 gap-8 flex flex-col p-2">
          {walletData.sections.map((section, index) => (
            <div>
              <div
                id={`${section.section_name
                  .toLocaleLowerCase()
                  .replace(' ', '_')}`}
                className="text-2xl my-3 font-semibold"
              >
                {section.section_name}
              </div>
              <Card key={index}>
                <CardContent className="py-4 flex flex-col gap-3">
                  {section.sub_sections.map((sub_section, index) => {
                    const renderSubSection = () => {
                      switch (sub_section.type) {
                        case WalletSubSectionTypes.GITHUB_HEATMAP:
                          return (
                            <GithubHeatmap
                              colour={sub_section.colour}
                              squareNumber={sub_section.squareNumber}
                              count={sub_section.count}
                              squareGap={sub_section.squareGap}
                              squareSize={sub_section.squareSize}
                            />
                          );
                        case WalletSubSectionTypes.DUNE_CHART:
                          return sub_section.iframe_urls.map(
                            (url: string, index: number) => {
                              return (
                                <DuneChart
                                  key={index}
                                  src={url}
                                  width={sub_section.width}
                                  height={sub_section.height}
                                />
                              );
                            }
                          );
                        case WalletSubSectionTypes.STAT_CARDS:
                          return (
                            <div className="grid grid-cols-4 gap-2">
                              {sub_section.data.map(
                                (
                                  stat: {
                                    image: string;
                                    title: string;
                                    stat: string;
                                  },
                                  index: number
                                ) => (
                                  <StatCard key={index} {...stat} />
                                )
                              )}
                            </div>
                          );
                        case WalletSubSectionTypes.DATA_TABLE:
                          return (
                            <DataTable
                              caption={sub_section.caption}
                              columns={sub_section.columns}
                              data={sub_section.data}
                            />
                          );
                        case WalletSubSectionTypes.GITHUB_CONTRIBUTOR_COUNT:
                          return (
                            <GithubContributorCount repo={sub_section.repo} />
                          );
                        case WalletSubSectionTypes.EXPLAINER:
                          return <Explainer content={sub_section.content} />;
                        case WalletSubSectionTypes.SECURITY_AUDIT:
                          return (
                            <SecurityAudits
                              audits={sub_section.audits}
                              bug_bounties={sub_section.bug_bounties}
                            />
                          );
                        default:
                          return <p>Unknown type</p>;
                      }
                    };

                    return (
                      <Fragment key={index}>
                        {sub_section.sub_section_name && (
                          <h2 className="text-lg text-gray-300 mt-2 font-medium">
                            {sub_section.sub_section_name}
                          </h2>
                        )}
                        {renderSubSection()}
                      </Fragment>
                    );
                  })}
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
