import { getCoreRowModel, getFilteredRowModel, useReactTable, ColumnDef } from '@tanstack/react-table';

type useTable<T> = {
  data?: T[];
  columns: ColumnDef<T>[];
};

function useTable<T>({ data, columns }: useTable<T>) {
  const table = useReactTable({
    data: data || [],
    columns,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
  });

  return { columnDefs: columns, table };
}

export default useTable;
