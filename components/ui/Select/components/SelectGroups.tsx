import { SelectGroup, SelectItem, SelectLabel, SelectSeparator } from '../base';
import { SelectGroupType, SelectItemType } from '../types';

type SelectGroupsProps<T> = {
  groups: SelectGroupType<T>[];
};

const SelectGroups = <T extends SelectItemType>({ groups }: SelectGroupsProps<T>) => {
  return (
    <>
      {groups.map(({ items, label }) => (
        <SelectGroup key={self.crypto.randomUUID()}>
          {label && (
            <>
              <SelectLabel className='pl-5'>{label}</SelectLabel>
              <SelectSeparator className='h-0.5 bg-gray-200' />
            </>
          )}
          {items.map(({ value, label }) => (
            <SelectItem key={label} value={value}>
              {label}
            </SelectItem>
          ))}
        </SelectGroup>
      ))}
    </>
  );
};

export default SelectGroups;
