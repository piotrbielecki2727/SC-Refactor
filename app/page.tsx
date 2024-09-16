import Title from '@/ui/Title/Title';
import UsersTable from '@/UsersTable';
import TableSkeleton from '@/UsersTable/components/TableSkeleton';
import { Suspense } from 'react';

export default function Home() {
  return (
    <div className='container py-4'>
      <Title title='Users' subtitle='Manage users' />
      <Suspense fallback={<TableSkeleton />}>
        <UsersTable />
      </Suspense>
    </div>
  );
}
