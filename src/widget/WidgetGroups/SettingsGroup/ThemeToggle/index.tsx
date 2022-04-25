import React, { useContext } from 'react';
import cn from 'classnames';
import './index.scss';
import { CurrentThemeContext } from "../../../../contexts";

const ThemeToggle: React.FC = () => {
    const { isLightTheme, dispatchChangeTheme } = useContext(CurrentThemeContext);

    return (
        <div className={cn('theme-toggle', 'settings_item')}>
            <div>Dark theme</div>
            <input
                type={'checkbox'}
                className={cn('toggle', isLightTheme ? 'light-toggle' : 'dark-toggle')}
                onClick={() => dispatchChangeTheme(!isLightTheme)}
                defaultChecked={!isLightTheme}
            />
        </div>
    );
};

export default ThemeToggle;