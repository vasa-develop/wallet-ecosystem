import { Table } from '@radix-ui/themes';
import Link from 'next/link';
import { wallets } from '@/data/wallets';

export default function Home() {
  const wallet_names = Object.keys(wallets);
  return (
    <main>
      <Table.Root variant="surface" className="mt-6">
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeaderCell className="w-[100px]">
              Wallet
            </Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Status</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Method</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell className="text-right">
              Amount
            </Table.ColumnHeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {wallet_names.map((wallet_name, index) => {
            const wallet = wallets[wallet_name];
            return (
              <Table.Row key={index}>
                <Table.RowHeaderCell className="font-medium">
                  <Link className="w-full" href={'/wallet/metamask'}>
                    {wallet.name}
                  </Link>
                </Table.RowHeaderCell>
                <Table.Cell>Paid</Table.Cell>
                <Table.Cell>Credit Card</Table.Cell>
                <Table.Cell className="text-right">$250.00</Table.Cell>
              </Table.Row>
            );
          })}
        </Table.Body>
      </Table.Root>
    </main>
  );
}
