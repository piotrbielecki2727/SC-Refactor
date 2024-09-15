import { FC } from 'react';
import Separator from '../Separator';

type TitleProps = {
  title: string;
  subtitle?: string;
};

const Title: FC<TitleProps> = ({ title, subtitle }) => {
  return (
    <div>
      <div className='py-1 flex flex-col justify-start sm:grid sm:grid-cols-2'>
        <div className='flex flex-col'>
          <span className='text-2xl sm:text-3xl font-bold'>{title}</span>
          <span className='text-gray-600 mt-1'>{subtitle}</span>
        </div>
      </div>
      <Separator className='my-1' />
    </div>
  );
};

export default Title;
