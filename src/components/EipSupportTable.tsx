'use client';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';

export default function EipSupportTable(props: {
  data: [
    {
      eipName: string;
      eipType: string;
      eipStatus: string;
      supportStatus: string;
    }
  ];
}) {
  return (
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
          {props.data.map((row, rowIndex) => (
            <TableRow key={rowIndex}>
              <TableCell>{row.eipName}</TableCell>
              <TableCell>{row.eipType}</TableCell>
              <TableCell>{row.eipStatus}</TableCell>
              <TableCell align="center">
                <Tooltip>
                  <TooltipTrigger>{row.supportStatus}</TooltipTrigger>
                  <TooltipContent>
                    <p>{SupportStatusTooltip[row.supportStatus]}</p>
                  </TooltipContent>
                </Tooltip>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TooltipProvider>
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
