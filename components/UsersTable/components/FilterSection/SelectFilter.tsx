import { SelectItemType } from '@/ui/Select/types';
import { filterGroup } from './constants';
import Select from '@/ui/Select';

type SelectFilterProps = {
  selectValue?: SelectItemType;
  setSelectValue: (item: SelectItemType) => void;
  placeholder: string;
};

const SelectFilter = ({ selectValue, setSelectValue, placeholder }: SelectFilterProps) => {
  return (
    <Select
      triggerClassName='h-[48px] w-full md:w-[200px] hover:bg-accent hover:text-accent-foreground'
      value={selectValue?.value}
      onChange={(value) => {
        const selectedItem = filterGroup.items.find((item) => item.value === value);
        {
          selectedItem && setSelectValue(selectedItem);
        }
      }}
      placeholder={placeholder}
      groups={[filterGroup]}
      onReset={() => {
        setSelectValue({ label: 'Name', value: '' });
      }}
    />
  );
};

export default SelectFilter;
