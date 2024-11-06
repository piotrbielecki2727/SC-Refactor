import Title from '@/ui/Title/Title';
import UsersTable from '@/UsersTable';
import TableSkeleton from '@/UsersTable/components/TableSkeleton';
import { Suspense } from 'react';
import { AppContainer } from './styled';

export default function Home() {
  return (
    <AppContainer>
      <Title title='Users' subtitle='Manage users' />
      <Suspense fallback={<TableSkeleton />}>
        <UsersTable />
      </Suspense>
    </AppContainer>
  );
}
