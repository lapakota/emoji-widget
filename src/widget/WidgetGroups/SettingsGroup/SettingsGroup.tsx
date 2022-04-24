import React, { useContext } from 'react';
import './SettingsGroup.scss';
import cn from 'classnames';
import Auth from '../../Auth/Auth';
import { CurrentSchemeContext, CurrentThemeContext } from '../../Widget/Widget';

const SettingsGroup = () => {
    const { isLightTheme, dispatchChangeTheme } = useContext(CurrentThemeContext);
    const { currentScheme, dispatchChangeScheme } = useContext(CurrentSchemeContext);

    return (
        <div className={'settings'}>
            <div className={'settings_menu'}>
                <Auth />
                <div className={'settings_item'}>
                    <div className='separator_inner' />
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
                <div className={'settings_item'}>
                    <div>Emoji scheme</div>
                    <div className='form_radio_btn'>
                        <input id='radio-1'
                               type='radio'
                               value='1'
                               checked={currentScheme === 1}
                               onClick={() => dispatchChangeScheme(1)}/>
                        <label htmlFor='radio-1'>
                            <img src={'/img/grinning-face_apple.png'} alt={'inning-face_apple'}/>
                        </label>
                    </div>
                    <div className='form_radio_btn'>
                        <input id='radio-2'
                               type='radio'
                               value='2'
                               checked={currentScheme === 2}
                               onClick={() => dispatchChangeScheme(2)}/>
                        <label htmlFor='radio-2'>
                            <img src={'/img/grinning-face_google.png'} alt={'inning-face_google'}/>
                        </label>
                    </div>
                    <div className='form_radio_btn'>
                        <input id='radio-3'
                               type='radio'
                               value='3'
                               checked={currentScheme === 3}
                               onClick={() => dispatchChangeScheme(3)}/>
                        <label htmlFor='radio-3'>
                            <img src={'/img/grinning-face_twitter.png'} alt={'inning-face_twitter'}/>
                        </label>
                    </div>
                    <div className='form_radio_btn'>
                        <input id='radio-4'
                               type='radio'
                               value='4'
                               checked={currentScheme === 4}
                               onClick={() => dispatchChangeScheme(4)}/>
                        <label htmlFor='radio-4'>
                            <img src={'/img/grinning-face_facebook.png'} alt={'inning-face_facebook'}/>
                        </label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SettingsGroup;