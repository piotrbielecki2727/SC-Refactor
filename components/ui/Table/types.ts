import { ReactNode } from 'react';

export type Action<T> = {
  key: string;
  icon: JSX.Element;
  label: string;
  onClick: (row: T) => void;
};

export type Column<T> = {
  accessorKey: string;
  header: string;
  size: number;
  cell?: ReactNode;
};
