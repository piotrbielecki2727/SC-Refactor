import { ReactNode } from 'react';

type HeaderProps<T> = {
  children?: ReactNode;
};

const Header = <T,>({ children }: HeaderProps<T>) => {
  return <div className='pb-1 flex flex-wrap gap-4 items-center'>{children}</div>;
};

export default Header;
