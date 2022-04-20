import React, { useState } from 'react';
import Widget from './widget/Widget/Widget';
import './index.scss';

export const CurrentThemeContext = React.createContext<boolean>(true);
export const ChangeThemeContext = React.createContext<any>(() => {
});

const App = () => {
    const [isLightTheme, setIsLightTheme] = useState<boolean>(
        JSON.parse(localStorage.getItem('isLightTheme') as string)
    );

    const dispatchChangeTheme = (currentTheme: boolean) => {
        localStorage.setItem('isLightTheme', JSON.stringify(currentTheme));
        setIsLightTheme(currentTheme);
    };

    console.log(localStorage)
    return (
        <div className='app'>
            <ChangeThemeContext.Provider value={dispatchChangeTheme}>
                <CurrentThemeContext.Provider value={isLightTheme}>
                    <Widget />
                </CurrentThemeContext.Provider>
            </ChangeThemeContext.Provider>
        </div>
    );
};

export default App;
