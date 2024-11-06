import { ReactNode } from 'react';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import { twMerge } from 'tailwind-merge';
import styled from 'styled-components';

type TTableProps = {
  className?: string;
  children: ReactNode;
};

const StyledTable = styled.div`
  width: 100%;
`;

const Table = ({ children, className }: TTableProps) => {
  return <StyledTable>{children}</StyledTable>;
};

Table.Header = Header;
Table.Content = Content;
Table.Footer = Footer;

export default Table;
