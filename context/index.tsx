import {
  useState, useContext, createContext, ReactNode, useCallback, useMemo, useEffect,
} from 'react';

import { LIGHT, DARK } from '../styles/themes';
import { Theme } from '../types/thme.types';

interface AppContexProps {
  toggleTheme: () => void
  theme: Theme
}

const INITIAL_VALUES = {
  toggleTheme: () => {},
  theme: LIGHT,
};

const AppContex = createContext<AppContexProps>(INITIAL_VALUES);

export const AppContexProvider = (props: { children: ReactNode }) => {
  const [theme, setTheme] = useState(LIGHT);
  const { children } = props;

  const toggleTheme = useCallback(() => {
    setTheme(theme.title === 'LIGHT' ? DARK : LIGHT);
    window.localStorage.setItem('THEME', theme.title === 'LIGHT' ? 'DARK' : 'LIGHT');
  }, [theme]);

  useEffect(() => {
    const THEME_PERSISTED = window.localStorage.getItem('THEME');
    if (THEME_PERSISTED) {
      setTheme(THEME_PERSISTED === 'DARK' ? DARK : LIGHT);
    }
  }, []);

  const value = useMemo(() => ({
    theme,
    toggleTheme,
  }), [theme]);

  return (
    <AppContex.Provider value={value}>
      { children }
    </AppContex.Provider>
  );
};

export const useAppContex = () => useContext(AppContex);
