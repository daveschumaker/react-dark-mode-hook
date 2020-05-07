## React Dark Mode Hook

## Determine if user's device has dark mode enabled

### About

This is a simple hook for React to automatically detect a device's dark mode preference (as well as any changes to it) and style your web app accordingly, using something like `ThemeProvider` from `styled-components`.

It was developed as part of a side project I was hacking around on using my personal [React Starter Kit](https://github.com/daveschumaker/react-starter), which is my own React project for quickly getting prototypes and side projects up and running.

I've released this as a standard GitHub repo instead of an NPM module due to the simplicity of this hook, especially in light of [one-line packages breaking the Internet](https://news.ycombinator.com/item?id=22979245). To use it, just copy it into your project where needed.

I've released this under an [MIT license]. Feel free to use as-is, fork, copy, tear apart, profit, and share as you wish.

### Instructions

1. Copy `useDarkMode.js` into a relevant part of your web app. i.e., `app/hooks/useDarkMode.js`
2. Import `useDarkMode` into your web app's entry point and use it inside your functional component. Will return `true` or `false` based on your device's system-wide dark mode setting.

Alternatively:

You can also force a particular theme using localStorage. This has important implications for allowing a user to override system settings or for testing your themes.

`localStorage.setItem('theme', 'dark')`
`localStorage.setItem('theme', 'light')`

### Example

If you're using a library such as `styled-components`, you can do the following.

```
import React from 'react'
import { ThemeProvider } from 'styled-components'

import useDarkMode from 'app/hooks/useDarkMode'
import { lightTheme, darkTheme } from 'app/styles/theme'

const App = () => {
    const darkModeEnabled = useDarkMode()

    <ThemeProvider theme={darkModeEnabled ? darkTheme : lightTheme}>
        <VariousAppComponents />
    </ThemeProvider>
}

```
