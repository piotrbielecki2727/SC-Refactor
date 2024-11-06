import { ReactNode } from 'react';
import styled from 'styled-components';

type HeaderProps<T> = {
  children?: ReactNode;
};

const StyledHeader = styled.div`
  padding: 0.25rem;
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  justify-items: center;
`;

const Header = <T,>({ children }: HeaderProps<T>) => {
  return <StyledHeader>{children}</StyledHeader>;
};

export default Header;
