import React, { useContext } from 'react';
import './SettingsGroup.scss';
import { CurrentThemeContext, ChangeThemeContext } from '../../../App';
import cn from 'classnames';

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
                                className={cn('toggle', isLightTheme ? 'light-toggle' : 'dark-toggle')}
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