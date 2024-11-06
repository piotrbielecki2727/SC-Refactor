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
import { filterUsers, setFilterValues } from '@/store/usersSlice';
import useTable from './hooks/useTable';
import styled from 'styled-components';

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

  const StyledScrollArea = styled(ScrollArea)`
    border-radius: 6px;
    border: 1px solid ${({ theme }) => theme.colors.secondary};
  `;

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
      <StyledScrollArea>
        <Table.Content table={table} columnDefs={columnDefs} />
      </StyledScrollArea>
    </Table>
  );
};

export default UsersTable;
