import { useState, useEffect } from 'react';

const useDarkMode = () => {
  const isClient = typeof window === 'object';

  const getDarkMode = () => {
    if (!isClient) {
      return;
    }

    if (localStorage.getItem('theme') === 'dark') {
      return true;
    } else if (localStorage.getItem('theme') === 'light') {
      return false;
    }

    if (
      window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: dark)').matches
    ) {
      return true;
    } else {
      return false;
    }
  };

  const [darkMode, setDarkMode] = useState(getDarkMode);

  const handleChange = () => {
    setDarkMode(getDarkMode());
  };

  useEffect(() => {
    if (!isClient) {
      return;
    }

    window
      .matchMedia('(prefers-color-scheme: dark)')
      .addEventListener('change', handleChange);
    return () =>
      window
        .matchMedia('(prefers-color-scheme: dark)')
        .removeEventListener('change', handleChange);
  }, []);

  return darkMode;
};

export default useDarkMode;
