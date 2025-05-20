import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContextCore';

// Custom hook for easy access to the theme context
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
