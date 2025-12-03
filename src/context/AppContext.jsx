import { createContext, useEffect, useState } from 'react';

export const MyContext = createContext();


export const AppContext = ({ children }) => {
    let [isDark, setIsDark] = useState(JSON.parse(localStorage.getItem("theme")) ?? false)

    useEffect(() => {
        localStorage.setItem("theme", JSON.stringify(isDark));
    }, [isDark])


    return (
        <MyContext.Provider value={{ isDark, setIsDark }}>
            {children}
        </MyContext.Provider>
    );
};