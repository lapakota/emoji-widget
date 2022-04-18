import React, { useContext } from 'react';
import './SettingsGroup.scss';
import { CurrentThemeContext, ChangeThemeContext } from '../../../App';
import Auth from '../../Auth/Auth';

const SettingsGroup = () => {
    const isLightTheme = useContext(CurrentThemeContext);
    const dispatchChangeTheme = useContext(ChangeThemeContext);

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
                        className={'toggle'}
                        onClick={() => dispatchChangeTheme()}
                        defaultChecked={!isLightTheme}
                    />
                </div>
            </div>
        </div>
    );
};

export default SettingsGroup;