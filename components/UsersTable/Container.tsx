import { getUsers } from '@/api/methods';
import UsersTable from './UsersTable';

const Container = async () => {
  const users = await getUsers();

  return <UsersTable users={users} />;
};

export default Container;
