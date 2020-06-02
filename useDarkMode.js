import { useState, useEffect } from 'react';

const useDarkMode = () => {
    const isClient = typeof window === 'object';

    const getDarkMode = () => {
        if (localStorage.getItem('theme') === 'dark') {
            return true;
        } else if (localStorage.getItem('theme') === 'light') {
            return false;
        }

        if (
            isClient &&
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
            return false;
        }

        const darkModeQuery = window.matchMedia('(prefers-color-scheme: dark)');

        try {
            // Handle Chrome & Firefox
            darkModeQuery.addEventListener('change', handleChange);
        } catch (addEventListenerError) {
            try {
                // Handle Safari
                darkModeQuery.addListener('change', handleChange);
            } catch (addListenerError) {
                console.error(addListenerError);
            }
        }
        return () =>
            window
                .matchMedia('(prefers-color-scheme: dark)')
                .removeEventListener('change', handleChange);
    }, []);

    return darkMode;
};

export default useDarkMode;
