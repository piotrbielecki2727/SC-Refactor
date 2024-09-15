'use client';
import Table from '@/ui/Table';
import { User } from './types';
import { usersTableColumns } from './UsersTableColumns';
import useTable from './hooks/useTable';
import { ScrollArea } from '@/ui/Scrollarea';
import FilterSection from './components/FilterSection';
import { useEffect, useState } from 'react';
import { FilterValues } from './components/FilterSection/types';
import useFilterData from './hooks/useFilterDate';

type UsersTableProps = {
  users: User[];
};

const UsersTable = ({ users }: UsersTableProps) => {
  const columns = usersTableColumns;
  const [filterValues, setFilterValues] = useState<FilterValues>({
    name: '',
    username: '',
    email: '',
    phone: '',
  });
  const [hasAppliedFilters, setHasAppliedFilters] = useState(false);

  useEffect(() => {
    const hasFilters = Object.values(filterValues).some((value) => value !== '');
    setHasAppliedFilters(hasFilters);
  }, [filterValues]);

  const { filteredUsers } = useFilterData({
    data: users,
    filterValues,
  });

  const { columnDefs, table } = useTable<User>({
    columns,
    data: hasAppliedFilters ? filteredUsers : users,
  });

  return (
    <Table>
      <Table.Header>
        <FilterSection setFilterValues={setFilterValues} filterValues={filterValues} />
      </Table.Header>
      <ScrollArea className='rounded-md border'>
        <Table.Content table={table} columnDefs={columnDefs}></Table.Content>
      </ScrollArea>
    </Table>
  );
};

export default UsersTable;
