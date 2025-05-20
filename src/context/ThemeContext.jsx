import { useState, useEffect } from 'react';
import { ThemeContext } from './ThemeContextCore';
import { themeConfig } from '../theme/themeConfig';

// ThemeProvider component to wrap the application
const ThemeProvider = ({ children }) => {
  // Default to the approved theme from the mockup
  const [currentTheme, setCurrentTheme] = useState('cci');
  
  // Get theme classes based on the current theme
  const themeClasses = themeConfig[currentTheme];
  
  // Function to change the theme
  const changeTheme = (themeName) => {
    if (themeConfig[themeName]) {
      setCurrentTheme(themeName);
      localStorage.setItem('app-theme', themeName);
    }
  };
  
  // Load theme from localStorage on initial mount
  useEffect(() => {
    const savedTheme = localStorage.getItem('app-theme');
    if (savedTheme && themeConfig[savedTheme]) {
      setCurrentTheme(savedTheme);
    }
  }, []);
  
  // Provide theme context to children
  return (
    <ThemeContext.Provider value={{ 
      currentTheme, 
      themeClasses, 
      changeTheme,
      colors: themeConfig[currentTheme].colors
    }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
