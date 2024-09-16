'use client';

import { useState, useCallback, useEffect, InputHTMLAttributes, ChangeEvent, ForwardedRef, forwardRef } from 'react';
import { Eye, EyeOff, X } from 'lucide-react';
import Button from '../Button';
import { InputShadcn } from './base';
import cn from '@/utils';
import { debounce } from 'lodash';

type TInputValue = string | number | readonly string[] | undefined;

 const DEFAULT_DEBOUNCE_TIME = 1000;


interface IInputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange'> {
  value: TInputValue;
  icon?: JSX.Element;
  showClearTextButton?: boolean;
  showPasswordVisibilityButton?: boolean;
  hideBorder?: boolean;
  onChange: (value: TInputValue) => void;
  debounced?: boolean;
}

const initialBorderClass =
  'relative flex h-14 w-72 justify-center rounded-md items-center  border bg-background px-1 py-1 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50';

const Input = forwardRef<HTMLInputElement, IInputProps>(
  (
    {
      value,
      onChange,
      icon,
      showClearTextButton,
      showPasswordVisibilityButton,
      hideBorder = false,
      type,
      className,
      debounced,
      ...props
    }: IInputProps,
    ref: ForwardedRef<HTMLInputElement>
  ) => {
    const [inputValue, setInputValue] = useState<TInputValue>(value);
    const [passwordVisibility, setPasswordVisibility] = useState(false);

    const borderClass = hideBorder ? '' : initialBorderClass;
    const inputType = showPasswordVisibilityButton && passwordVisibility ? 'text' : type;

    const debouncedSetInputValue = useCallback(
      debounce((value: TInputValue) => {
        onChange(value);
      }, DEFAULT_DEBOUNCE_TIME),
      [onChange]
    );

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
      const newValue = e.target.value;
      setInputValue(newValue);
      debounced ? debouncedSetInputValue(newValue) : onChange(newValue);
    };

    const handleClear = () => {
      onChange('');
      debouncedSetInputValue.cancel();
      setInputValue('');
    };

    const changePasswordVisibility = () => setPasswordVisibility((passwordVisibility) => !passwordVisibility);

    useEffect(() => {
      setInputValue(value);
    }, [value]);

    return (
      <div className={cn(borderClass, className)}>
        {icon && <>{icon}</>}
        <InputShadcn
          {...props}
          value={inputValue}
          onChange={handleChange}
          type={inputType}
          className='px-2 py-1 text-md ring-offset-background outline-none border-none border-input focus-visible:ring-transparent'
        />
        {showClearTextButton && inputValue && <Button variant='ghost' icon={X} size='icon' onClick={handleClear} />}
        {showPasswordVisibilityButton && (
          <Button
            type='button'
            variant='ghost'
            icon={passwordVisibility ? Eye : EyeOff}
            onClick={changePasswordVisibility}
            size='icon'
          />
        )}
      </div>
    );
  }
);
Input.displayName = 'Input';

export default Input;
export type { TInputValue };
