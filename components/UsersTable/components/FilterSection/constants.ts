import { SelectGroupType, SelectItemType } from '@/ui/Select/types';

const filters: SelectItemType[] = [
  {
    label: 'Username',
    value: 'username',
  },
  {
    label: 'Email',
    value: 'email',
  },
  {
    label: 'Phone',
    value: 'phone',
  },
];

export const filterGroup: SelectGroupType<SelectItemType> = {
  label: 'Filters',
  items: filters,
};
