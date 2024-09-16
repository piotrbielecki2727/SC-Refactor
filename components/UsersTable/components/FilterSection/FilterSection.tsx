import Button from '@/ui/Button';
import SearchBar from './SearchBar';
import { FilterValues } from './types';
import { Trash } from 'lucide-react';
import { filterUsers, resetFilterValues } from '@/store/usersSlice';
import { useDispatch } from 'react-redux';

type FilterSectionProps = {
  setFilterValues: (updater: (prevValues: FilterValues) => FilterValues) => void;
  filterValues: FilterValues;
};

const FilterSection = ({ setFilterValues, filterValues }: FilterSectionProps) => {
  const dispatch = useDispatch();

  const handleResetFilterValues = () => {
    dispatch(resetFilterValues());
    dispatch(filterUsers());
  };

  const isFilterApplied = Object.values(filterValues).some((value) => value);

  return (
    <div className='flex flex-col min-w-full gap-y-2'>
      <div className='flex flex-row justify-between items-end mt-2'>
        <span>Search:</span>
      </div>
      <div className=' grid grid-cols-1 gap-y-2  sm:grid-cols-2 md:grid-cols-5 md:gap-y-2 lg:grid-cols-5 gap-x-6 py-1 items-center'>
        {Object.entries(filterValues).map(([key, value]) => (
          <div key={key} className='flex items-center justify-start '>
            <SearchBar
              className='w-full'
              searchBarPlaceholder={`Filter by ${key}`}
              columnToFilter={key}
              filterValue={value}
              setFilterValue={(newValue) =>
                setFilterValues((prevValues) => ({
                  ...prevValues,
                  [key]: newValue,
                }))
              }
            />
          </div>
        ))}

        {isFilterApplied && (
          <Button
            className='col-span-1 sm:col-span-2 md:col-span-1 lg:col-span-1'
            onClick={handleResetFilterValues}
            icon={Trash}
          >
            Reset filters
          </Button>
        )}
      </div>
    </div>
  );
};

export default FilterSection;
