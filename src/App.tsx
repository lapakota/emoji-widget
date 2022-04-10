import React, { useState } from 'react';
import Widget from './widget/Widget/Widget';
import './index.scss';
import * as themes from './themes';

export const CurrentThemeContext = React.createContext<typeof themes.light | typeof themes.dark>(themes.light);
export const ChangeThemeContext = React.createContext<any>(() => {});

const App = () => {
    const [theme, setTheme] = useState<typeof themes.light | typeof themes.dark>(themes.light);
    const dispatchChangeTheme = () => {
        let newTheme: typeof themes.light | typeof themes.dark = themes.light;
        switch (theme) {
            case themes.light:
                newTheme = themes.dark;
                break;
            case themes.dark:
                newTheme = themes.light;
                break;
        }
        setTheme(newTheme);
    };

    return (
        <div className="app">
            <ChangeThemeContext.Provider value={dispatchChangeTheme}>
                <CurrentThemeContext.Provider value={theme}>
                    <Widget />
                </CurrentThemeContext.Provider>
            </ChangeThemeContext.Provider>
        </div>
    );
};

export default App;
