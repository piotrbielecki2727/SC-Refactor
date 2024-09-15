import { Skeleton } from '@/ui/Skeleton';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/ui/Table/base';

export default function Component() {
  return (
    <div className='border rounded-lg'>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className='w-[100px]'>
              <Skeleton className='h-4 w-full' />
            </TableHead>
            <TableHead>
              <Skeleton className='h-4 w-full' />
            </TableHead>
            <TableHead className='hidden md:table-cell'>
              <Skeleton className='h-4 w-full' />
            </TableHead>
            <TableHead className='hidden md:table-cell'>
              <Skeleton className='h-4 w-full' />
            </TableHead>
            <TableHead className='hidden md:table-cell'>
              <Skeleton className='h-4 w-full' />
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>
              <Skeleton className='h-12 w-full rounded-md' />
            </TableCell>
            <TableCell>
              <Skeleton className='h-4 w-full' />
            </TableCell>
            <TableCell className='hidden md:table-cell'>
              <Skeleton className='h-4 w-full' />
            </TableCell>
            <TableCell className='hidden md:table-cell'>
              <Skeleton className='h-4 w-full' />
            </TableCell>
            <TableCell className='hidden md:table-cell'>
              <Skeleton className='h-4 w-full' />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <Skeleton className='h-12 w-full rounded-md' />
            </TableCell>
            <TableCell>
              <Skeleton className='h-4 w-full' />
            </TableCell>
            <TableCell className='hidden md:table-cell'>
              <Skeleton className='h-4 w-full' />
            </TableCell>
            <TableCell className='hidden md:table-cell'>
              <Skeleton className='h-4 w-full' />
            </TableCell>
            <TableCell className='hidden md:table-cell'>
              <Skeleton className='h-4 w-full' />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <Skeleton className='h-12 w-full rounded-md' />
            </TableCell>
            <TableCell>
              <Skeleton className='h-4 w-full' />
            </TableCell>
            <TableCell className='hidden md:table-cell'>
              <Skeleton className='h-4 w-full' />
            </TableCell>
            <TableCell className='hidden md:table-cell'>
              <Skeleton className='h-4 w-full' />
            </TableCell>
            <TableCell className='hidden md:table-cell'>
              <Skeleton className='h-4 w-full' />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <Skeleton className='h-12 w-full rounded-md' />
            </TableCell>
            <TableCell>
              <Skeleton className='h-4 w-full' />
            </TableCell>
            <TableCell className='hidden md:table-cell'>
              <Skeleton className='h-4 w-full' />
            </TableCell>
            <TableCell className='hidden md:table-cell'>
              <Skeleton className='h-4 w-full' />
            </TableCell>
            <TableCell className='hidden md:table-cell'>
              <Skeleton className='h-4 w-full' />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <Skeleton className='h-12 w-full rounded-md' />
            </TableCell>
            <TableCell>
              <Skeleton className='h-4 w-full' />
            </TableCell>
            <TableCell className='hidden md:table-cell'>
              <Skeleton className='h-4 w-full' />
            </TableCell>
            <TableCell className='hidden md:table-cell'>
              <Skeleton className='h-4 w-full' />
            </TableCell>
            <TableCell className='hidden md:table-cell'>
              <Skeleton className='h-4 w-full' />
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
}
