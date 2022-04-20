import React, { useContext } from 'react';
import './SettingsGroup.scss';
import { CurrentThemeContext, ChangeThemeContext } from '../../../App';

const SettingsGroup = () => {
    const isLightTheme = useContext(CurrentThemeContext);

    return (
        <div className={'settings'}>
            <div className={'settings_menu'}>
                <div className={'settings_item'}>
                    <div>Dark theme</div>
                    <ChangeThemeContext.Consumer>
                        {dispatchChangeTheme => (
                            <input
                                type={'checkbox'}
                                className={'toggle'}
                                onClick={() => dispatchChangeTheme(!isLightTheme)}
                                defaultChecked={!isLightTheme}
                            />
                        )}
                    </ChangeThemeContext.Consumer>
                </div>
            </div>
        </div>
    );
};

export default SettingsGroup;