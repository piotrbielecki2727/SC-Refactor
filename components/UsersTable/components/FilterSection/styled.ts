import styled from 'styled-components';
import SearchBar from './SearchBar';
import Button from '@/ui/Button';

const FilterSectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 100%;
  gap: 0.5 rem;
`;

const Search = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  justify-items: end;
  margin-top: 2px;
`;

const GridDiv = styled.div`
  display: grid;
  justify-content: start;
  grid-template-columns: repeat(1, minmax(0, 1fr));
  gap: 0.5rem 1.5rem;
  padding: 0.25rem 0;
  justify-items: start;
  align-items: center;
  @media (min-width: 640px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (min-width: 768px) {
    grid-template-columns: repeat(5, minmax(0, 1fr));
  }
`;

const SearchBarContainer = styled.div`
  display: flex;
  width: 100%;
  justify-items: center;
`;

const StyledSearchBar = styled(SearchBar)`
  width: 100%;
`;

export { FilterSectionContainer, GridDiv, Search, SearchBarContainer, StyledSearchBar };
