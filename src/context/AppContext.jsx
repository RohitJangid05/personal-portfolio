import { createContext, useEffect, useState } from 'react';

export const MyContext = createContext();


export const AppContext = ({ children }) => {
    let [isDark, setIsDark] = useState(JSON.parse(localStorage.getItem("theme")) ?? false)
    const [sliderValue, setSliderValue] = useState(0);

    useEffect(() => {
        localStorage.setItem("theme", JSON.stringify(isDark));
    }, [isDark])


    return (
        <MyContext.Provider value={{ isDark, setIsDark, sliderValue, setSliderValue }}>
            {children}
        </MyContext.Provider>
    );
};