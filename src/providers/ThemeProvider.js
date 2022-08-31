import React, {createContext, useMemo, useState} from 'react';

export const ThemeContext = createContext({isDark: true})
const ThemeProvider = ({children}) => {
  const [isDark, setIsDark] = useState(true)
  const value = useMemo(()=>({isDark, setIsDark}), [isDark])
  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;