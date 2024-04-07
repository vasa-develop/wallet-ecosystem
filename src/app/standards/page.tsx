import { Badge, Table } from '@radix-ui/themes';
import Link from 'next/link';
import React from 'react';
import walletStandard from '@/data/walletStandards';

export default function page() {
  return (
    <main>
      <Table.Root variant="surface" className="mt-6 fixed-header-table">
        <Table.Header className=" sticky top-0 z-10 bg-[#202224] align-middle">
          <Table.Row>
            <Table.ColumnHeaderCell className="w-64 items-center ">
              Name
            </Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Track</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Status</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Labels</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Created on</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Last Activity</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Authors</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Requires</Table.ColumnHeaderCell>
            {/* <Table.ColumnHeaderCell>Notes</Table.ColumnHeaderCell> */}
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {walletStandard.map((row, index) => {
            return (
              <Table.Row key={index}>
                <Table.RowHeaderCell className="font-medium">
                  <Link className="w-full" href={row.link} target="_blank">
                    {row.name}
                  </Link>
                </Table.RowHeaderCell>
                <Table.Cell>{row.track}</Table.Cell>
                <Table.Cell>{row.status}</Table.Cell>
                <Table.Cell>
                  <div className="flex flex-wrap gap-1">
                    {row.labels.map((l, i) => (
                      <Badge key={i}>{l}</Badge>
                    ))}
                  </div>
                </Table.Cell>
                <Table.Cell>{row.createdOn}</Table.Cell>
                <Table.Cell>{row.lastActivity}</Table.Cell>
                <Table.Cell>
                  <div className="flex flex-wrap gap-1">
                    {row.authors.map((l, i) => (
                      <Badge key={i}>{l}</Badge>
                    ))}
                  </div>
                </Table.Cell>
                <Table.Cell>
                  <div className="flex flex-wrap gap-1">
                    {row.requires.map((l, i) => (
                      <Link
                        key={i}
                        className="underline"
                        href={l.link}
                        target="_blank"
                      >
                        {l.name}
                      </Link>
                    ))}
                  </div>
                </Table.Cell>
                {/* <Table.Cell>{row.notes}</Table.Cell> */}
              </Table.Row>
            );
          })}
        </Table.Body>
      </Table.Root>
    </main>
  );
}
