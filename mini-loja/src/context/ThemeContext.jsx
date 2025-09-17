import { createContext, useContext, useMemo, useState, useEffect } from "react";

const ThemeContext = createContext(null);

export function ThemeProvider({children}){
    const [theme, setTheme] = useState('light');

    const toggleTheme = () => {
        setTheme((t) => (t === 'light' ? 'dark' : 'light'));
    }

    useEffect(() => {
        document.body.classList.remove("light", "dark");
        document.body.classList.add(theme);
    }, [theme]);

    const value = useMemo(() => ({theme, toggleTheme}), [theme, toggleTheme]);

    return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

export function useTheme(){
    const ctx = useContext(ThemeContext);
    if(!ctx) throw new Error("É necessário utilizar o hook dentro do Provedor correto.");
    return ctx;
}