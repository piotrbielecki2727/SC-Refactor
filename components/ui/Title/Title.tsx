'use client';
import { FC } from 'react';
import Separator from '../Separator';
import ChangingTheme from '../ChangingTheme';

type TitleProps = {
  title: string;
  subtitle?: string;
};

const Title: FC<TitleProps> = ({ title, subtitle }) => {
  return (
    <div>
      <div className='py-1 flex flex-row items-center justify-between'>
        <div className='flex flex-col'>
          <span className='text-2xl sm:text-3xl font-bold'>{title}</span>
          <span className='text-gray-400 mt-1'>{subtitle}</span>
        </div>
        <div>
          <ChangingTheme />
        </div>
      </div>
      <Separator className='my-1' />
    </div>
  );
};

export default Title;
