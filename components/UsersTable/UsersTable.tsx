'use client';
import { useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Table from '@/ui/Table';
import { ScrollArea } from '@/ui/Scrollarea';
import FilterSection from './components/FilterSection';
import { User } from './types';
import { FilterValues } from './components/FilterSection/types';
import { usersTableColumns } from './UsersTableColumns';
import { RootState } from '@/store/store';
import { filterUsers, resetFilterValues, setFilterValues } from '@/store/usersSlice';
import useTable from './hooks/useTable';

type UsersTableProps = {
  users: User[];
};

const UsersTable = ({ users }: UsersTableProps) => {
  const dispatch = useDispatch();

  useMemo(() => {
    dispatch({ type: 'users/setUsers', payload: users });
  }, [users, dispatch]);

  const { filteredUsers, filterValues } = useSelector((state: RootState) => state.users);

  const columns = useMemo(() => usersTableColumns, []);

  const handleFilterChange = (newFilterValues: FilterValues) => {
    dispatch(setFilterValues(newFilterValues));
    dispatch(filterUsers());
  };

  const { columnDefs, table } = useTable<User>({
    columns,
    data: filteredUsers,
  });

  return (
    <Table>
      <Table.Header>
        <FilterSection
          setFilterValues={(updater) => {
            const newFilterValues = updater(filterValues);
            handleFilterChange(newFilterValues);
          }}
          filterValues={filterValues}
        />
      </Table.Header>
      <ScrollArea className='rounded-md border'>
        <Table.Content table={table} columnDefs={columnDefs} />
      </ScrollArea>
    </Table>
  );
};

export default UsersTable;
