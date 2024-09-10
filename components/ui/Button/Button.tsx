'use client';

import { FC, forwardRef, ReactNode, useCallback } from 'react';
import { twMerge } from 'tailwind-merge';
import { Loader2, LucideIcon } from 'lucide-react';
import { Url } from 'next/dist/shared/lib/router/router';
import Link from 'next/link';
import { ButtonProps, ShadcnButton } from './base';

type Props = ButtonProps & {
  icon?: LucideIcon;
  isLoading?: boolean;
  href?: string | Url;
  reverseIcon?: boolean;
  children?: ReactNode;
  className?: string;
  variant?: 'outline' | 'secondary' | 'default' | 'link' | 'ghost';
  color?: 'error' | 'warning' | 'info' | 'success' | 'default' | 'gray';
};

const buttonColors = {
  default: '',
  success: 'bg-green-600 hover:bg-green-700',
  error: 'bg-red-600 hover:bg-red-700',
  warning: 'bg-orange-600 hover:bg-orange-700',
  info: 'bg-blue-600 hover:bg-blue-700',
  gray: 'bg-gray-600 hover:bg-gray-700',
};

const Button: FC<Props> = forwardRef<HTMLButtonElement, Props>(
  (
    {
      onClick,
      color = 'default',
      variant,
      size,
      disabled,
      content,
      className,
      icon: Icon,
      isLoading,
      asChild,
      href,
      reverseIcon,
      children,
      ...buttonProps
    },
    ref
  ) => {
    const renderContent = useCallback(() => {
      const iconElem = Icon ? <Icon size={20} /> : null;
      const content = (
        <>
          {isLoading && <Loader2 className='animate-spin' />}
          {!reverseIcon && iconElem}
          {children}
          {reverseIcon && iconElem}
        </>
      );

      if (href && asChild) {
        return <Link href={href}>{content}</Link>;
      }

      return content;
    }, [asChild, children, href, Icon, isLoading, reverseIcon]);

    const buttonElement = (
      <ShadcnButton
        ref={ref}
        onClick={onClick}
        disabled={isLoading || disabled}
        size={size}
        className={twMerge('gap-x-1', className, buttonColors[color])}
        variant={variant}
        asChild={asChild}
        {...buttonProps}
      >
        {renderContent()}
      </ShadcnButton>
    );

    return buttonElement;
  }
);

Button.displayName = 'Button';
export default Button;
