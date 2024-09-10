import { SelectContent, SelectTrigger, SelectValue, ShadcnSelect } from './base';
import { ClearButton, SelectGroups } from './components';
import { SelectGroupType, SelectItemType } from './types';

type CustomSelectProps<T> = {
  placeholder: string;
  value: string | undefined;
  triggerClassName?: string;
  groups: SelectGroupType<T>[];
  disabled?: boolean;
  onChange: (value: string) => void;
  onReset?: () => void;
};

const Select = <T extends SelectItemType>({
  placeholder,
  groups,
  value,
  triggerClassName = 'w-[180px]',
  onReset,
  onChange,
  disabled,
}: CustomSelectProps<T>) => (
  <ShadcnSelect value={value} onValueChange={onChange} disabled={disabled}>
    <SelectTrigger className={triggerClassName}>
      <SelectValue placeholder={placeholder} />
    </SelectTrigger>
    <SelectContent>
      {value && onReset && <ClearButton onClick={onReset} />}
      <SelectGroups groups={groups} />
    </SelectContent>
  </ShadcnSelect>
);

export default Select;
