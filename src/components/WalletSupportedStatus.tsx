'use client';
import { SECTIONS, SUPPORTED_STANDARD_TYPE } from '@/types/enum';
import { Wallet } from '@/types/wallet';
import React from 'react';
import { Card, Table, Tooltip } from '@radix-ui/themes';

export default function WalletSupportedStatus({
  data,
}: {
  data: Wallet[SECTIONS.SUPPORTED_STANDARD];
}) {
  return (
    <Card>
      <Table.Root>
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeaderCell>EIP name</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>EIP type</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell align="center">
              EIP status
            </Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell align="center">
              Wallet Support status
            </Table.ColumnHeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {data[SUPPORTED_STANDARD_TYPE.SUPPORTED_EIP].map((row, rowIndex) => (
            <Table.Row key={rowIndex}>
              <Table.RowHeaderCell>{row.eipName}</Table.RowHeaderCell>
              <Table.Cell>{row.eipType}</Table.Cell>
              <Table.Cell align="center">{row.eipStatus}</Table.Cell>
              <Table.Cell align="center">
                <Tooltip content={SupportStatusTooltip[row.supportStatus]}>
                  <div>{row.supportStatus}</div>
                </Tooltip>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>
    </Card>
  );
}
const SupportStatusTooltip: any = {
  '✅': 'Supported',
  '❎': 'Not needed',
  '⌛': 'WIP',
  '❌': 'Not supported',
  '❓': 'Not clear',
  '🛑': 'EIP not ready',
};
