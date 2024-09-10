import cn from '@/utils';
import { PackageOpen } from 'lucide-react';

interface EmptyState {
  title: string;
  className?: string;
}

const EmptyState = ({ title, className }: EmptyState) => (
  <div className={cn('flex flex-col items-center justify-center p-8 text-center gap-y-2', className)}>
    <PackageOpen size={70} />
    <span className='text-xl font-semibold text-gray-800 mb-2'>{title}</span>
  </div>
);

export default EmptyState;
