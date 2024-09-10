import { Table } from '@tanstack/react-table';

import { pageSizeGroup } from '../constants';
import Select from '@/ui/Select';
import Pagination from '@/ui/Pagination';

type TFooterProps<T> = {
  table: Table<T>;
  setPagination: (pagination: { pageIndex: number; pageSize: number }) => void;
};

const Footer = <T,>({ table, setPagination }: TFooterProps<T>) => {
  const handlePageChange = (page: number) => {
    setPagination({
      pageIndex: page - 1,
      pageSize: table.getState().pagination.pageSize,
    });
  };

  return (
    <div className='grid gap-4 py-4 items-center grid-cols-1 md:grid-cols-[1fr_auto_1fr]'>
      <div className='flex  sm:flex-row justify-center md:justify-start items-center gap-2 sm:gap-3'>
        <span className='text-sm font-semibold whitespace-nowrap'>Wiersze na stronie</span>
        <Select
          value={`${table.getState().pagination.pageSize}`}
          onChange={(value: string) => setPagination({ pageIndex: 0, pageSize: Number(value) })}
          triggerClassName='w-24'
          groups={[pageSizeGroup]}
          placeholder='Wybierz rozmiar strony'
        />
      </div>
      <div className='flex justify-center w-full'>
        <Pagination
          currentPage={table.getState().pagination.pageIndex + 1}
          totalPages={table.getPageCount()}
          onPageChange={handlePageChange}
        />
      </div>
      <div className='hidden md:block'></div>
    </div>
  );
};

export default Footer;
