'use client';
import { MoonIcon, SunIcon } from 'lucide-react';
import Button from '../Button';
import IconComponent, * as S from './IconComponent';
import { useTheme } from '@/hooks/useTheme';

const ChangingTheme = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <Button onClick={toggleTheme} variant='outline' size='icon' isBorder>
      <IconComponent icon={theme === 'light' ? SunIcon : MoonIcon} />
    </Button>
  );
};

export default ChangingTheme;
