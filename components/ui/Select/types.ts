export type SelectItemType = {
    label: string;
    value: string;
  };
  
  export type SelectGroupType<T> = {
    label?: string;
    items: T[];
  };
  