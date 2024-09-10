import { FC, useMemo } from 'react';
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from './base';


interface PaginationProps {
  currentPage: number;
  onPageChange: (page: number) => void;
  totalPages: number;
  alwaysShowPagination?: boolean;
}

const generatePagination = (totalPages: number, currentPage: number): (number | 'ellipsis')[] => {
  const range = (start: number, end: number): number[] => Array.from({ length: end - start + 1 }, (_, i) => start + i);
  const addEllipsis = (condition: boolean): ('ellipsis' | number)[] => (condition ? ['ellipsis'] : []);

  if (totalPages <= 5) {
    return range(1, totalPages);
  }

  const pages: (number | 'ellipsis')[] = [1];

  const paginationStrategies: Record<string, () => (number | 'ellipsis')[]> = {
    start: () => [...range(2, 3), ...addEllipsis(true), totalPages],
    end: () => [...addEllipsis(true), ...range(totalPages - 2, totalPages)],
    middle: () => [...addEllipsis(true), ...range(currentPage - 1, currentPage + 1), ...addEllipsis(true), totalPages],
  };

  const strategy = currentPage <= 3 ? 'start' : currentPage >= totalPages - 2 ? 'end' : 'middle';

  return pages.concat(paginationStrategies[strategy]());
};

const ReusablePagination: FC<PaginationProps> = ({ currentPage, onPageChange, totalPages, alwaysShowPagination }) => {
  const pageNumbers = useMemo(() => generatePagination(totalPages, currentPage), [totalPages, currentPage]);
  if (totalPages <= 1 && !alwaysShowPagination) return;

  if(totalPages <= 1 && !alwaysShowPagination) return;

  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            onClick={() => onPageChange(Math.max(1, currentPage - 1))}
            aria-disabled={currentPage === 1}
            style={{ cursor: currentPage === 1 ? 'not-allowed' : 'pointer' }}
          />
        </PaginationItem>

        {pageNumbers.map((page, i) => (
          <PaginationItem key={i}>
            {page === 'ellipsis' ? (
              <span className='px-2'>...</span>
            ) : (
              <PaginationLink
                onClick={() => onPageChange(page as number)}
                className={`${currentPage === page ? 'active border border-gray-500' : ''} hover:bg-gray-100`}
                style={{ cursor: 'pointer' }}
              >
                {page}
              </PaginationLink>
            )}
          </PaginationItem>
        ))}

        <PaginationItem>
          <PaginationNext
            onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
            aria-disabled={currentPage === totalPages}
            style={{ cursor: currentPage === totalPages ? 'not-allowed ' : 'pointer' }}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};

export default ReusablePagination;
