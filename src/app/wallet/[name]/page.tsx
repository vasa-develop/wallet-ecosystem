import { WalletData, WalletSubSectionTypes } from '@/app/types';
import DataTable from '@/components/DataTable';
import DuneChart from '@/components/DuneChart';
import Explainer from '@/components/Explainer';
import GithubContributorCount from '@/components/GithubContributorCount';
import GithubHeatmap from '@/components/GithubHeatmap';
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

const getWalletData = async (name: string): Promise<WalletData> => {
  const response = await fetch(`http://localhost:4000/wallet_content/${name}`);
  return response.json();
};

export default async function Page({ params }: { params: { name: string } }) {
  const walletData = await getWalletData(params.name);

  return (
    <>
      <div className="container flex gap-2 m-auto">
        <div className="w-64 p-2 sticky">
          <Card className="sticky top-4">
            {walletData.sections.map((section, index) => (
              <CardContent key={index}>
                <Link href={`#${section.section_name.toLocaleLowerCase()}`}>
                  {section.section_name}
                </Link>
              </CardContent>
            ))}
          </Card>
        </div>
        <div className="flex-1 gap-8 flex flex-col p-2">
          {walletData.sections.map((section, index) => (
            <Card
              key={index}
              id={`#${section.section_name.toLocaleLowerCase()}`}
            >
              <CardHeader>
                <CardTitle>{section.section_name}</CardTitle>
                <CardDescription>{section.section_name}</CardDescription>
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
                      default:
                        return <p>Unknown type</p>;
                    }
                  };

                  return (
                    <Fragment key={index}>
                      <span>{sub_section.sub_section_name}</span>
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
