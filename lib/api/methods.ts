import { User } from '@/UsersTable/types';
import { GET_USERS } from './constants';

export const getUsers = async (): Promise<User[]> => {
  try {
    const response = await fetch(GET_USERS);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const userData: User[] = await response.json();
    return userData;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error('Wystąpił błąd: ', error);
    } else {
      throw new Error('Wystąpił nieznany błąd');
    }
  }
};
