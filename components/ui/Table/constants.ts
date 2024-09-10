import { SelectGroupType, SelectItemType } from '../Select';

const pageSizes = ['10', '20', '30', '40', '50'];

export const pageSizeGroup: SelectGroupType<SelectItemType> = {
  items: pageSizes.map((pageSize) => ({ label: pageSize, value: pageSize })),
};
