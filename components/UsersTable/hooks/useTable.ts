import { getCoreRowModel, getFilteredRowModel, useReactTable, ColumnDef } from '@tanstack/react-table';
import { useMemo } from 'react';

type useTable<T> = {
  data: T[];
  columns: ColumnDef<T>[];
};

function useTable<T>({ data, columns }: useTable<T>) {
  const table = useReactTable({
    data: data || [],
    columns,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
  });

  return useMemo(
    () => ({
      columnDefs: columns,
      table,
    }),
    [columns, table]
  );
}

export default useTable;
