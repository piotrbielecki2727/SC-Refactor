import styled from 'styled-components';
import { Table, TableCell, TableHeader, TableRow } from '../base';
import { ScrollArea } from '@/ui/Scrollarea';
import { Loader } from 'lucide-react';
import EmptyState from '@/ui/EmptyState/EmptyState';

const StyledCell1 = styled(TableCell)`
  padding: 0.75rem;
`;

const StyledCell2 = styled(TableCell)`
  text-align: center;
  background-color: ${({ theme }) => theme.body};
  &:hover {
    background-color: ${({ theme }) => theme.body};
  }
`;

const StyledEmptyState = styled(EmptyState)`
  height: auto;
  background-color: ${({ theme }) => theme.body};
  &:hover {
    background-color: ${({ theme }) => theme.body};
  }
`;

const StyledLoaderCell = styled(TableCell)`
  height: 6rem;
  text-align: center;
`;

const StyledLoaderDiv = styled.div`
  display: flex;
  justify-content: center;
  justify-items: center;
  height: 16rem;
`;

const StyledLoader = styled(Loader)`
  animation: spin 1s linear infinite;
  margin-right: 0.5rem;
`;

const StyledScrollArea = styled(ScrollArea)`
  width: 100%;
  min-height: 30rem;
`;
const StyledTable = styled(Table)`
  position: relative;
`;

const StyledTableHeader = styled(TableHeader)`
  position: sticky;
  top: 0;
  box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
`;

const StyledTableRow = styled(TableRow)`
  border-color: ${({ theme }) => theme.colors.secondary};
  &:hover {
    background-color: ${({ theme }) => theme.body};
  }
`;

const StyledTableBodyRow = styled(TableRow)`
  border-color: ${({ theme }) => theme.colors.secondary};
  &:hover {
    background-color: ${({ theme }) => theme.colors.secondary};
  }
`;

export {
  StyledCell1,
  StyledCell2,
  StyledEmptyState,
  StyledLoader,
  StyledLoaderCell,
  StyledLoaderDiv,
  StyledScrollArea,
  StyledTable,
  StyledTableBodyRow,
  StyledTableHeader,
  StyledTableRow,
};
