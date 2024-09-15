import { useMemo } from 'react';
import { User } from '../types';
import { FilterValues } from '../components/FilterSection/types';
import { filterUsers, normalizeFilterValues } from '../utils';

type useFilterDataProps = {
  data?: User[];
  filterValues: FilterValues;
};

function useFilterData({ data, filterValues }: useFilterDataProps) {
  const filteredUsers = useMemo(() => {
    if (!data) return [];

    const normalizedFilterValues = normalizeFilterValues(filterValues);
    return filterUsers(data, normalizedFilterValues);
  }, [data, filterValues]);

  return { filteredUsers };
}

export default useFilterData;
