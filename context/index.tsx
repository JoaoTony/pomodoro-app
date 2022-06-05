import {
  useState, useContext, createContext, ReactNode, useCallback, useMemo, useEffect,
} from 'react';

import { LIGHT, DARK } from '@/styles/themes';

const INITIAL_VALUES = {
  toggleTheme: () => {},
  theme: LIGHT,
};

const AppContext = createContext<typeof INITIAL_VALUES>(INITIAL_VALUES);

export const AppContextProvider = (props: { children: ReactNode }) => {
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
    <AppContext.Provider value={value}>
      { children }
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
