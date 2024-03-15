import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
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
    <Table>
      {caption && <TableCaption>{caption}</TableCaption>}
      {columns?.length > 0 && (
        <TableHeader>
          <TableRow>
            {columns.map((column, index) => (
              <TableHead key={index}>{column}</TableHead>
            ))}
          </TableRow>
        </TableHeader>
      )}
      <TableBody>
        {data.map((row, rowIndex) => (
          <TableRow key={rowIndex}>
            {row.map((cell: string, rowIndex: Key) => (
              <TableCell key={rowIndex}>{cell}</TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
