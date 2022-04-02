import React, { useContext } from 'react';
import './Settings.scss';
import { NavLink } from 'react-router-dom';
import { CurrentThemeContext, ChangeThemeContext } from '../App';
import ArrowLeftIcon from '../assets/icons/ArrowLeftIcon';
import * as themes from '../themes';

const Settings = () => {
    const currentTheme = useContext(CurrentThemeContext);

    return (
        <div className={'settings'} style={currentTheme.body}>
            <div className={'header'}>
                <NavLink to={'/widget'}>
                    <span className={'link'}>
                        <ArrowLeftIcon color={currentTheme.arrow.color} />
                        <span style={currentTheme.text}>Go back</span>
                    </span>
                </NavLink>
            </div>
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

export default Settings;