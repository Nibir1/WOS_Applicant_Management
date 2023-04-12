"use client"

import { useEffect } from 'react';

const ThemeApplier = () => {
  useEffect(() => {
    if(window && 'localStorage' in window) {
      try {
        const theme = localStorage.getItem('theme') ?? 'light';
        if(theme && theme === 'dark')
          document.documentElement.classList.add('dark-theme');
      } catch(err) {
        console.warn(`Failure to load and apply theme preference`, err);
      }

      console.log('Applied theme from local storage');
    }
  }, []);

  return <></>;
}
export default ThemeApplier;