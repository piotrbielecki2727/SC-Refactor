import { ReactNode } from 'react';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import { twMerge } from 'tailwind-merge';

type TTableProps = {
  className?: string;
  children: ReactNode;
};

const Table = ({ children, className }: TTableProps) => {
  return <div className={twMerge(className, 'w-full')}>{children}</div>;
};

Table.Header = Header;
Table.Content = Content;
Table.Footer = Footer;

export default Table;
