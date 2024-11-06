import { FilterValues } from './types';
import { Trash } from 'lucide-react';
import { filterUsers, resetFilterValues } from '@/store/usersSlice';
import { useDispatch } from 'react-redux';
import * as S from './styled';
import Button from '@/ui/Button';

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
    <S.FilterSectionContainer>
      <S.Search>
        <span>Search:</span>
      </S.Search>
      <S.GridDiv>
        {Object.entries(filterValues).map(([key, value]) => (
          <S.SearchBarContainer key={key}>
            <S.StyledSearchBar
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
          </S.SearchBarContainer>
        ))}

        {isFilterApplied && (
          <Button width='100%' onClick={handleResetFilterValues} color='theme' icon={Trash}>
            Reset filters
          </Button>
        )}
      </S.GridDiv>
    </S.FilterSectionContainer>
  );
};

export default FilterSection;
