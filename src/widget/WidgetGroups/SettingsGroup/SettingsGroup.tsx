import React, { useContext } from 'react';
import './SettingsGroup.scss';
import { CurrentThemeContext, ChangeThemeContext } from '../../../App';
import * as themes from '../../../themes';

const SettingsGroup = () => {
    const currentTheme = useContext(CurrentThemeContext);

    return (
        <div className={'settings'} style={currentTheme.body}>
            <div className={'settings_menu'}>
                <div className={'settings_item'}>
                    <div style={currentTheme.text}>Dark theme</div>
                    <ChangeThemeContext.Consumer>
                        {dispatchChangeTheme => (
                            <input
                                type={'checkbox'}
                                className={'toggle'}
                                onClick={() => dispatchChangeTheme()}
                                defaultChecked={currentTheme === themes.dark}
                            />
                        )}
                    </ChangeThemeContext.Consumer>
                </div>
            </div>
        </div>
    );
};

export default SettingsGroup;