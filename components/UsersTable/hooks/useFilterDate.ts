import { useMemo } from 'react';
import { User } from '../types';
import { FilterValues } from '../components/FilterSection/types';
import { checkIfFilterIsApplied, filterUsers } from '../utils';

type useFilterDataProps = {
  data: User[];
  filterValues: FilterValues;
};

export const useFilterData = ({ data, filterValues }: useFilterDataProps) => {
  const isFilterApplied = checkIfFilterIsApplied(filterValues);
  const filteredUsers = filterUsers({ isFilterApplied, data, filterValues });
  return { filteredUsers };
};
