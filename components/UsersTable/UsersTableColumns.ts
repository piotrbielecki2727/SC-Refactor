import { ColumnDef } from '@tanstack/react-table';
import { User } from './types';

const usersTableColumns: ColumnDef<User>[] = [
  {
    accessorKey: 'name',
    header: 'Name',
    size: 300,
    cell: ({ row }) => row.original.name,
  },
  {
    accessorKey: 'username',
    header: 'Username',
    size: 300,
    cell: ({ row }) => row.original.username,
  },
  {
    accessorKey: 'email',
    header: 'Email',
    size: 300,
  },
  {
    accessorKey: 'phone',
    header: 'Phone no.',
    size: 300,
  },
];

export { usersTableColumns };
