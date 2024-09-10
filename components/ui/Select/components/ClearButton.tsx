import { MouseEvent } from 'react';
import { X } from 'lucide-react';
import Button from '@/ui/Button';

type ClearButtonProps = {
  onClick: (e: MouseEvent<HTMLButtonElement>) => void;
};

const ClearButton = ({ onClick }: ClearButtonProps) => (
  <div className='flex justify-center items-center'>
    <Button className='w-full bg-slate-100' variant='ghost' onClick={onClick} icon={X}>
      Wyczyść
    </Button>
  </div>
);

export default ClearButton;
