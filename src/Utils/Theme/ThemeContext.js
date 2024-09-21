import React, {createContext, useState, useEffect, ReactNode} from 'react';
import {useColorScheme} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Create a ThemeContext with default value 'light'
export const ThemeContext = createContext({
  theme: 'light',
  toggleTheme: () => {},
});

export const ThemeProvider = ({children}) => {
  const systemTheme = useColorScheme(); // Gets system theme ('light' or 'dark')
  const [theme, setTheme] = useState('light'); // Default theme is 'light'

  useEffect(() => {
    const loadTheme = async () => {
      try {
        const storedTheme = await AsyncStorage.getItem('theme');
        if (storedTheme !== null) {
          setTheme(storedTheme);
        } else {
          setTheme(systemTheme || 'light'); // Use system theme or default to 'light'
        }
      } catch (error) {
        console.error('Error loading theme from AsyncStorage:', error);
      }
    };
    loadTheme();
  }, [systemTheme]);

  const toggleTheme = newTheme => {
    setTheme(newTheme);
    AsyncStorage.setItem('theme', newTheme).catch(error =>
      console.error('Error saving theme to AsyncStorage:', error),
    );
  };

  return (
    <ThemeContext.Provider value={{theme, toggleTheme}}>
      {children}
    </ThemeContext.Provider>
  );
};
