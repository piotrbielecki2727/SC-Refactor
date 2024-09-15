import Input, { TInputValue } from '@/ui/Input';
import cn from '@/utils';

type SearchBarProps = {
  columnToFilter?: string;
  searchBarPlaceholder?: string;
  filterValue: TInputValue;
  setFilterValue: (value: TInputValue) => void;
  className?: string;
};

const SearchBar = ({ searchBarPlaceholder = 'Name', filterValue, setFilterValue, className }: SearchBarProps) => {
  return (
    <Input
      debounced
      placeholder={`${searchBarPlaceholder}...`}
      value={filterValue}
      onChange={setFilterValue}
      className={cn('h-12 ', className)}
    />
  );
};

export default SearchBar;
