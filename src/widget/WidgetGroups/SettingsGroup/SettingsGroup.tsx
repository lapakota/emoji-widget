import React, { useContext } from 'react';
import './SettingsGroup.scss';
import cn from 'classnames';
import Auth from '../../Auth/Auth';
import { CurrentThemeContext } from "../../Widget/Widget";

const SettingsGroup = () => {
    const { isLightTheme, dispatchChangeTheme } = useContext(CurrentThemeContext);

    return (
        <div className={'settings'}>
            <div className={'settings_menu'}>
                <Auth />
                <div className={'settings_item'}>
                    <div className="separator_inner" />
                </div>
                <div className={'settings_item'}>
                    <div>Dark theme</div>
                    <input
                        type={'checkbox'}
                        className={cn('toggle', isLightTheme ? 'light-toggle' : 'dark-toggle')}
                        onClick={() => dispatchChangeTheme(!isLightTheme)}
                        defaultChecked={!isLightTheme}
                    />
                </div>
            </div>
        </div>
    );
};

export default SettingsGroup;