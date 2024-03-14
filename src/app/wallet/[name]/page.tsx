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
            <Card
              key={index}
              id={`#${section.section_name
                .toLocaleLowerCase()
                .replace(' ', '_')}`}
            >
              <CardHeader>
                <CardTitle>{section.section_name}</CardTitle>
              </CardHeader>
              <CardContent>
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
                      <h2 className="text-xl font-medium">
                        {sub_section.sub_section_name}
                      </h2>
                      {renderSubSection()}
                    </Fragment>
                  );
                })}
              </CardContent>
              <CardFooter>
                <p>Card Footer</p>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </>
  );
}
