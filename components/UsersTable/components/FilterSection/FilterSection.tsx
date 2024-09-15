import { TInputValue } from '@/ui/Input';
import SearchBar from './SearchBar';
import { FilterValues } from './types';

type FilterSectionProps = {
  setFilterValues: (updater: (prevValues: FilterValues) => FilterValues) => void;
  filterValues: FilterValues;
};

const FilterSection = ({ setFilterValues, filterValues }: FilterSectionProps) => {
  return (
    <div className='flex flex-col min-w-full'>
      <span>Search:</span>
      <div className='flex  items-center flex-row justify-between my-2'>
        {Object.entries(filterValues).map(([key, value]) => (
          <div key={key} className='flex flex-col gap-y-2 w-[330px]'>
            <SearchBar
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
      </div>
    </div>
  );
};

export default FilterSection;
