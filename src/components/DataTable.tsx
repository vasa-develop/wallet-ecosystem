import { Table } from '@radix-ui/themes';
import { Key } from 'react';

export default function DataTable({
  caption,
  columns,
  data,
}: {
  caption: string;
  columns: string[];
  data: any[];
}) {
  return (
    <Table.Root>
      {caption && <p>{caption}</p>}
      {columns?.length > 0 && (
        <Table.Header>
          <Table.Row>
            {columns.map((column, index) => (
              <Table.ColumnHeaderCell key={index}>
                {column}
              </Table.ColumnHeaderCell>
            ))}
          </Table.Row>
        </Table.Header>
      )}
      <Table.Body>
        {data.map((row, rowIndex) => (
          <Table.Row key={rowIndex}>
            {row.map((cell: string, rowIndex: Key) => (
              <Table.Cell key={rowIndex}>{cell}</Table.Cell>
            ))}
          </Table.Row>
        ))}
      </Table.Body>
    </Table.Root>
  );
}
