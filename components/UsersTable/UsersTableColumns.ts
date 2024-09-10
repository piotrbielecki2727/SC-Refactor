import { ColumnDef } from '@tanstack/react-table';
import { User } from './types';
import truncateText from '@/truncateText';

const usersTableColumns: ColumnDef<User>[] = [
  {
    accessorKey: 'name',
    header: 'Imię',
    size: 200,
    cell: ({ row }) => truncateText(row.original.name, 20),
  },
  {
    accessorKey: 'surname',
    header: 'Nazwisko',
    size: 200,
    cell: ({ row }) => truncateText(row.original.username, 20),
  },
  {
    accessorKey: 'email',
    header: 'E-mail',
    size: 350,
  },
  {
    accessorKey: 'phone',
    header: 'Phone no.',
    size: 350,
  },
];


export { usersTableColumns };
