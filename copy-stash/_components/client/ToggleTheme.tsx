"use client";

import { useMemo, useState } from 'react';

import Button from './Button'

const saveThemeChoice = dark => {
  if(window && 'localStorage' in window) {
    try {
      if(dark)
        localStorage.setItem('theme', 'dark');
      else
        localStorage.setItem('theme', 'light');
    } catch(err) {
      console.warn(`Local storage error setting theme`, err);
    }
  }
};

const ToggleTheme = () => {
  const defaultDark = useMemo(() => {
    if(typeof document !== 'undefined' && 'documentElement' in document)
      return document.documentElement.classList.contains('dark-theme');
    return false;
  }, []);

  const [ curDark, setCurDark ] = useState(defaultDark);

  const handleToggle = () => {
    if(document) {
      if(curDark)
        document.documentElement.classList.remove('dark-theme');
      else
        document.documentElement.classList.add('dark-theme');

      saveThemeChoice(!curDark);
      setCurDark(!curDark);

      console.log('Toggled theme');
    }
  };

  return <Button onPress={handleToggle}>Toggle Theme</Button>
};
export default ToggleTheme;
