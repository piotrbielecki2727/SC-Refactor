import { User } from './types';
import UsersTable from './UsersTable';

const Container = async () => {
    const users: User[] = await new Promise((resolve) =>
        setTimeout(async () => {
          const data = await fetch('https://jsonplaceholder.typicode.com/users')
            .then((response) => response.json());
          resolve(data);
        }, 3000) 
      );

return (
    <UsersTable users={users}/>
)

  
}

export default Container