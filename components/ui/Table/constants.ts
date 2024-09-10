import { SelectGroupType, SelectItemType } from "../Select/types";

const pageSizes = ['1', '3', '5', '10'];

export const pageSizeGroup: SelectGroupType<SelectItemType> = {
  items: pageSizes.map((pageSize) => ({ label: pageSize, value: pageSize })),
};
