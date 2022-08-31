import React, {useContext} from 'react';
import clsx from "clsx";
import useTheme from "../hooks/useTheme";


const Layout = ({children}) => {
  const {isDark} = useTheme()
  return (
    <div className={clsx('layout', {
      light: isDark ===false
    })}>
      {children}
    </div>
  );
};

export default Layout