import Input, { TInputValue } from "@/ui/Input";
import cn from "@/utils";

type SearchBarProps<T> = {
  columnToFilter: string;
  filterValue: TInputValue;
  setFilterValue: (value: TInputValue) => void;
  className?: string;
};

const SearchBar = <T,>({ columnToFilter, filterValue, setFilterValue, className }: SearchBarProps<T>) => {
  return (
    <Input
      debounced
      placeholder={`${columnToFilter} ...`}
      value={filterValue}
      onChange={setFilterValue}
      className={cn('h-12 ', className)}
    />
  );
};

export default SearchBar;
