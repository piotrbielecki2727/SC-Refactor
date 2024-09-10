import { Cell, ColumnDef, flexRender, Row, Table as TanStackTable } from '@tanstack/react-table';
import { Loader } from 'lucide-react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../base';
import EmptyState from '@/ui/EmptyState/EmptyState';
import { ScrollArea } from '@/ui/Scrollarea';
import { ScrollBar } from '@/ui/Scrollbar';

type ContentProps<T> = {
  table: TanStackTable<T>;
  columnDefs: ColumnDef<T>[];
  isLoading?: boolean;
  className?: string;
};

const Content = <T,>({ table, columnDefs, isLoading, className }: ContentProps<T>) => {
  const renderTableRows = (row: Row<T>) =>
    row
      .getVisibleCells()
      .map((cell: Cell<T, unknown>) => (
        <TableCell key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</TableCell>
      ));

  const emptyResults = () => (
    <TableRow>
      <TableCell colSpan={columnDefs.length} className={`${className} text-center`}>
        <EmptyState title='Brak wyników...' className='h-auto' />
      </TableCell>
    </TableRow>
  );

  const renderLoader = () => (
    <TableRow>
      <TableCell colSpan={columnDefs.length} className='h-24 text-center'>
        <div className='flex justify-center items-center h-64'>
          <Loader className='animate-spin mr-2' /> Ładowanie...
        </div>
      </TableCell>
    </TableRow>
  );

  return (
    <>
      <ScrollArea className={`${className} w-full `}>
        <Table className='relative'>
          <TableHeader className='sticky top-0 z-10 bg-white shadow-md'>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow className='hover:bg-white' key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <TableHead
                    key={header.id}
                    style={{
                      minWidth: header.column.columnDef.size,
                      maxWidth: header.column.columnDef.size,
                    }}
                  >
                    {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}
                  </TableHead>
                ))}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {!isLoading
              ? table.getRowModel().rows?.length
                ? table.getRowModel().rows.map((row, index) => (
                    <TableRow key={row.id} data-state={row.getIsSelected() && 'selected'}>
                      {renderTableRows(row)}
                    </TableRow>
                  ))
                : emptyResults()
              : renderLoader()}
          </TableBody>
        </Table>
      </ScrollArea>
      <ScrollBar orientation='horizontal' />
    </>
  );
};

export default Content;
