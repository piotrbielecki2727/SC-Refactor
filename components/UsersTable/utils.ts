import { FilterValues } from './components/FilterSection/types';
import { User } from './types';

export function normalizeFilterValues(filterValues: FilterValues): FilterValues {
  return Object.entries(filterValues).reduce((acc, [key, value]) => {
    const typedKey = key as keyof FilterValues;
    acc[typedKey] = String(value).toLowerCase();
    return acc;
  }, {} as FilterValues);
}

export function normalizeUser(user: User): User {
  return {
    ...user,
    name: user.name.toLowerCase(),
    username: user.username.toLowerCase(),
    email: user.email.toLowerCase(),
    phone: user.phone,
  };
}

export function filterUsers(data: User[], normalizedFilterValues: FilterValues): User[] {
  return data.filter((user) => {
    const normalizedUser = normalizeUser(user);
    const { name, username, email, phone } = normalizedFilterValues;
    return (
      (name === '' || normalizedUser.name.includes(name)) &&
      (username === '' || normalizedUser.username.includes(username)) &&
      (email === '' || normalizedUser.email.includes(email)) &&
      (phone === '' || normalizedUser.phone.includes(phone))
    );
  });
}
