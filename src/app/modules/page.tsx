import { Badge, Table } from '@radix-ui/themes';
import Link from 'next/link';
import React from 'react';
import modules from '@/data/modules';

export default function page() {
  return (
    <main>
      <Table.Root variant="surface" className="mt-6 fixed-header-table">
        <Table.Header className=" sticky top-0 z-10 bg-[#202224] align-middle">
          <Table.Row>
            <Table.ColumnHeaderCell className="w-64 items-center ">
              Name
            </Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Description</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Category</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Module Type</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>
              Compatible SCA Frameworks
            </Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Audits/Attestations</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Implementations</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Notes</Table.ColumnHeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {modules.map((row, index) => {
            return (
              <Table.Row key={index}>
                <Table.RowHeaderCell className="font-medium">
                  {row.name}
                </Table.RowHeaderCell>
                <Table.Cell>{row.description}</Table.Cell>
                <Table.Cell>
                  <div className="flex flex-wrap gap-1">
                    {row.category.map((l, i) => (
                      <Badge key={i}>{l}</Badge>
                    ))}
                  </div>
                </Table.Cell>
                <Table.Cell>
                  <div className="flex flex-wrap gap-1">
                    {row.module_type.map((l, i) => (
                      <Badge key={i}>{l}</Badge>
                    ))}
                  </div>
                </Table.Cell>
                <Table.Cell>
                  <div className="flex flex-wrap gap-1">
                    {row.compatible_sca_frameworks.map((l, i) => (
                      <Badge key={i}>{l}</Badge>
                    ))}
                  </div>
                </Table.Cell>
                <Table.Cell>
                  {<div dangerouslySetInnerHTML={{ __html: row.audits }} />}
                </Table.Cell>
                <Table.Cell>
                  {
                    <div
                      dangerouslySetInnerHTML={{ __html: row.implementation }}
                    />
                  }
                </Table.Cell>
                <Table.Cell>
                  {<div dangerouslySetInnerHTML={{ __html: row.notes }} />}
                </Table.Cell>
              </Table.Row>
            );
          })}
        </Table.Body>
      </Table.Root>
    </main>
  );
}
