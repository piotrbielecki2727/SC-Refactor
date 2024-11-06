import { ReactNode } from 'react';
import styled from 'styled-components';

type HeaderProps<T> = {
  children?: ReactNode;
};

const StyledHeader = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  padding-top: 0.25rem;
  padding-bottom: 0.25rem;
  justify-items: center;
`;

const Header = <T,>({ children }: HeaderProps<T>) => {
  return <StyledHeader>{children}</StyledHeader>;
};

export default Header;
