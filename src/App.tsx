import React, { useState } from "react";
import { MemoryRouter, Routes, Route, Navigate } from 'react-router-dom';
import Widget from './widget/Widget';
import Settings from './settings/Settings';
import './index.scss';
import * as themes from './themes';
import { Theme } from './themes';

export const CurrentThemeContext = React.createContext<Theme>(themes.light);
export const ChangeThemeContext = React.createContext<any>(() => {});

const App = () => {
    const [theme, setTheme] = useState<Theme>(themes.light);
    const dispatchChangeTheme = () => {
        let newTheme: Theme = themes.light;
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
        <MemoryRouter>
            <div className="app">
                <ChangeThemeContext.Provider value={dispatchChangeTheme}>
                    <CurrentThemeContext.Provider value={theme}>
                        <Routes>
                            <Route path="/widget" element={<Widget />} />
                            <Route path="/settings" element={<Settings />} />
                            <Route path="/" element={<Navigate replace to="/widget" />} />
                        </Routes>
                    </CurrentThemeContext.Provider>
                </ChangeThemeContext.Provider>
            </div>
        </MemoryRouter>
    );
};

export default App;
