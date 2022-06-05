import React, { ReactElement, useContext } from 'react';

type Theme = `light` | `dark`;

let defaultTheme: Theme = `light`;

let ThemeContext = React.createContext(defaultTheme);

export function ThemeProvider(props: { theme: Theme; children: ReactElement }) {
    let provider = (
        // @ts-ignore
        <ThemeContext.Provider value={props.theme}>
            {props.children}
        </ThemeContext.Provider>
    );
    return provider;
}

export function useTheme(): Theme {
    return useContext(ThemeContext);
}
