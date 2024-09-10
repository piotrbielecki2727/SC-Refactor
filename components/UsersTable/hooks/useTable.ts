import {
    getCoreRowModel,
    getFilteredRowModel,
    getPaginationRowModel,
    useReactTable,
    ColumnDef,
  } from '@tanstack/react-table';
import { PaginationUsersTableType } from '../types';
  
  type useTable<T> = {
    data: T[] | undefined;
    documentCount: number | undefined;
    pagination: PaginationUsersTableType;
    setPagination: React.Dispatch<React.SetStateAction<PaginationUsersTableType>>;
    columns: ColumnDef<T>[];
  };
  
  function useTable<T>({ data, documentCount, pagination, setPagination, columns }: useTable<T>) {
    const table = useReactTable({
      data: data || [],
      columns,
      getCoreRowModel: getCoreRowModel(),
      rowCount: documentCount || 0,
      manualPagination: true,
      pageCount: documentCount && documentCount > 0 ? Math.ceil(documentCount / pagination.pageSize) : 1,
      getPaginationRowModel: getPaginationRowModel(),
      getFilteredRowModel: getFilteredRowModel(),
      onPaginationChange: setPagination,
      state: {
        pagination,
      },
    });
  
    return { columnDefs: columns, table };
  }
  
  export default useTable;
  