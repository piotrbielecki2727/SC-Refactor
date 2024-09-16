import { useMemo } from 'react';
import { FilterValues } from './components/FilterSection/types';
import { User } from './types';

export const checkIfFilterIsApplied = (filterValues: FilterValues) => {
  const isFilterApplied = Object.values(filterValues).some((value) => value);
  return isFilterApplied;
};

type filterUsers = {
  isFilterApplied: boolean;
  filterValues: FilterValues;
  data: User[];
};

export const filterUsers = ({ isFilterApplied, filterValues, data }: filterUsers): User[] => {
  return useMemo(() => {
    if (!isFilterApplied) return data;
    return data.filter((user) =>
      Object.entries(filterValues).every(([key, value]) => {
        if (value) {
          const userValue = user[key as keyof User];
          return userValue && userValue.toLowerCase().includes(value.toLowerCase());
        }
        return true;
      })
    );
  }, [data, filterValues]);
};
