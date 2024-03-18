'use client';
import { SECTIONS, SUPPORTED_STANDARD_TYPE } from '@/types/enum';
import { Wallet } from '@/types/wallet';
import React from 'react';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from './ui/tooltip';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from './ui/table';
import { Card, CardContent } from './ui/card';

export default function WalletSupportedStatus({
  data,
}: {
  data: Wallet[SECTIONS.SUPPORTED_STANDARD];
}) {
  return (
    <Card>
      <CardContent className="p-2">
        <TooltipProvider>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>EIP name</TableHead>
                <TableHead>EIP type</TableHead>
                <TableHead>EIP status</TableHead>
                <TableHead>Wallet Support status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {data[SUPPORTED_STANDARD_TYPE.SUPPORTED_EIP].map(
                (row, rowIndex) => (
                  <TableRow key={rowIndex}>
                    <TableCell>{row.eipName}</TableCell>
                    <TableCell>{row.eipType}</TableCell>
                    <TableCell>{row.eipStatus}</TableCell>
                    <TableCell align="center">
                      <Tooltip>
                        <TooltipTrigger>{row.supportStatus}</TooltipTrigger>
                        <TooltipContent>
                          <p>{row.supportStatus}</p>
                        </TooltipContent>
                      </Tooltip>
                    </TableCell>
                  </TableRow>
                )
              )}
            </TableBody>
          </Table>
        </TooltipProvider>
      </CardContent>
    </Card>
  );
}
