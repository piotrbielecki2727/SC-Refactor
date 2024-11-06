'use client';

import { FC, forwardRef, ReactNode, useCallback } from 'react';
import { Loader2, LucideIcon } from 'lucide-react';
import { Url } from 'next/dist/shared/lib/router/router';
import Link from 'next/link';
import { ButtonProps, ShadcnButton } from './base';
import styled, { css, CSSProperties } from 'styled-components';

type ButtonColor = 'default' | 'success' | 'error' | 'warning' | 'info' | 'theme';

type Props = ButtonProps & {
  icon?: LucideIcon;
  isLoading?: boolean;
  href?: string | Url;
  reverseIcon?: boolean;
  children?: ReactNode;
  className?: string;
  color?: ButtonColor;
  variant?: 'outline' | 'secondary' | 'default' | 'link' | 'ghost';
  width?: string;
  isBorder?: boolean;
};

const buttonColors = {
  default: css``,
  success: css`
    background-color: #16a34a;
    &:hover {
      background-color: #15803d;
    }
  `,
  error: css`
    background-color: #dc2626;
    &:hover {
      background-color: #b91c1c;
    }
  `,
  warning: css`
    background-color: #f97316;
    &:hover {
      background-color: #ea580c;
    }
  `,
  info: css`
    background-color: #3b82f6;
    &:hover {
      background-color: #2563eb;
    }
  `,
  theme: css`
    background-color: ${({ theme }) => theme.text};
    color: ${({ theme }) => theme.body};
    &:hover {
      background-color: ${({ theme }) => theme.colors.hoverColor};
    }
  `,
};

const StyledButton = styled(ShadcnButton)<Props>`
  ${({ color = 'default' }) => buttonColors[color]};
  gap: 4px;
  ${({ width }) => width && `width: ${width};`}
  border-radius: 6px;
  ${({ isBorder, theme }) => (isBorder ? `border: 1px solid ${theme.colors.secondary};` : `border: none;`)}
`;

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
      isBorder,
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

    return (
      <StyledButton
        ref={ref}
        onClick={onClick}
        disabled={isLoading || disabled}
        size={size}
        color={color}
        variant={variant}
        asChild={asChild}
        isBorder={isBorder}
        {...buttonProps}
      >
        {renderContent()}
      </StyledButton>
    );
  }
);

Button.displayName = 'Button';
export default Button;
