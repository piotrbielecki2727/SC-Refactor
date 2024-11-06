import Input, { TInputValue } from '@/ui/Input';
import styled from 'styled-components';

type SearchBarProps = {
  columnToFilter?: string;
  searchBarPlaceholder?: string;
  filterValue: TInputValue;
  setFilterValue: (value: TInputValue) => void;
  className?: string;
};

const StyledInput = styled(Input)`
  height: 3rem;
  border: 1px solid ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.text};
  border-radius: 6px;
  width: 100%;
`;

const SearchBar = ({ searchBarPlaceholder = 'Name', filterValue, setFilterValue, className }: SearchBarProps) => {
  return (
    <StyledInput
      placeholder={`${searchBarPlaceholder}...`}
      value={filterValue}
      onChange={setFilterValue}
      showClearTextButton
    />
  );
};

export default SearchBar;
