import { Table } from '@radix-ui/themes';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between py-24">
      <Table.Root>
        <p>A list of your recent invoices.</p>
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeaderCell className="w-[100px]">
              Invoice
            </Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Status</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Method</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell className="text-right">
              Amount
            </Table.ColumnHeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          <Table.Row>
            <Table.RowHeaderCell className="font-medium">
              <Link className="w-full" href={'/wallet/metamask'}>
                Metamask
              </Link>
            </Table.RowHeaderCell>
            <Table.Cell>Paid</Table.Cell>
            <Table.Cell>Credit Card</Table.Cell>
            <Table.Cell className="text-right">$250.00</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.RowHeaderCell className="font-medium">
              <Link className="w-full" href={'/wallet/rainbow'}>
                Rainbow
              </Link>
            </Table.RowHeaderCell>
            <Table.Cell>Paid</Table.Cell>
            <Table.Cell>Credit Card</Table.Cell>
            <Table.Cell className="text-right">$250.00</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table.Root>
    </main>
  );
}
