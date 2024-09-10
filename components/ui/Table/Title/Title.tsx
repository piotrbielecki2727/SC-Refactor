import { FC } from 'react';
import Separator from '../../Separator/base';

type TitleProps = {
  title: string;
  subtitle?: string;
  action?: JSX.Element;
};

const Title: FC<TitleProps> = ({ title, subtitle, action }) => {
  return (
    <div>
      <div className='py-1 flex flex-col justify-start sm:grid sm:grid-cols-2'>
        <div className='flex flex-col'>
          <span className='text-2xl sm:text-3xl font-bold'>{title}</span>
          <span className='text-gray-600 mt-1'>{subtitle}</span>
        </div>
        <div className='mt-3 sm:mt-0 flex items-center align-middle sm sm:justify-end'>{action}</div>
      </div>
      <Separator className='my-1' />
    </div>
  );
};

export default Title;
