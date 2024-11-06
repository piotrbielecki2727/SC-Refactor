import { AppDispatch, RootState } from '@/store/store';
import { toggleTheme } from '@/store/themeSlice';
import { useDispatch, useSelector } from 'react-redux';

export const useTheme = () => {
  const dispatch = useDispatch<AppDispatch>();
  const theme = useSelector((state: RootState) => state.theme.mode);
  return {
    theme,
    toggleTheme: () => dispatch(toggleTheme()),
  };
};
