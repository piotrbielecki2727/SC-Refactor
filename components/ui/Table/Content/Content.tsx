import { Cell, ColumnDef, flexRender, Row, Table as TanStackTable } from '@tanstack/react-table';
import { Loader } from 'lucide-react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../base';
import EmptyState from '@/ui/EmptyState/EmptyState';
import { ScrollArea, ScrollBar } from '@/ui/Scrollarea';
import styled from 'styled-components';
import * as S from './styled';

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
        <S.StyledCell1 key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</S.StyledCell1>
      ));

  const emptyResults = () => (
    <TableRow>
      <S.StyledCell2 colSpan={columnDefs.length}>
        <S.StyledEmptyState title='Empty results...' />
      </S.StyledCell2>
    </TableRow>
  );

  const renderLoader = () => (
    <TableRow>
      <S.StyledLoaderCell colSpan={columnDefs.length}>
        <S.StyledLoaderDiv>
          <S.StyledLoader /> Loading...
        </S.StyledLoaderDiv>
      </S.StyledLoaderCell>
    </TableRow>
  );

  return (
    <>
      <S.StyledScrollArea>
        <S.StyledTable>
          <S.StyledTableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <S.StyledTableRow key={headerGroup.id}>
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
              </S.StyledTableRow>
            ))}
          </S.StyledTableHeader>
          <TableBody>
            {!isLoading
              ? table.getRowModel().rows?.length
                ? table
                    .getRowModel()
                    .rows.map((row) => <S.StyledTableBodyRow key={row.id}>{renderTableRows(row)}</S.StyledTableBodyRow>)
                : emptyResults()
              : renderLoader()}
          </TableBody>
        </S.StyledTable>
      </S.StyledScrollArea>
      <ScrollBar orientation='horizontal' />
    </>
  );
};

export default Content;
