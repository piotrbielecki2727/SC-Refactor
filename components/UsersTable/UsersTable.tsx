'use client'
import Table from '@/ui/Table'
import { PaginationUsersTableType, User } from './types'
import { usersTableColumns } from './UsersTableColumns';
import useTable from './hooks/useTable';
import { useState } from 'react';
import { ScrollArea } from '@/ui/Scrollarea';
import SearchBar from './SearchBar';
import { TInputValue } from '@/ui/Input';

type UsersTableProps = {
users: User[];
}

const UsersTable = ({users}:UsersTableProps) => {

const [pagination, setPagination] = useState<PaginationUsersTableType>({
    pageIndex: 0,
    pageSize:10,
})

const [filterValue, setFilterValue] = useState<TInputValue>();

const columns = usersTableColumns;




const {columnDefs, table} = useTable<User>({
columns,
data:users,
documentCount: 1,
pagination,
setPagination,
});


  return (
    <Table>
        <Table.Title title='Users' subtitle='Manage users'/>
        <Table.Header>
          <SearchBar columnToFilter='name' filterValue={filterValue} setFilterValue={setFilterValue}/>
        </Table.Header>
        <ScrollArea className='rounded-md border'>
        <Table.Content table={table} columnDefs={columnDefs}></Table.Content>
        </ScrollArea>
        <Table.Footer table={table} setPagination={setPagination}/>
    </Table>
  )
}

export default UsersTable