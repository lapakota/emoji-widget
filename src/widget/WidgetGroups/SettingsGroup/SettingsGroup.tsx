import React, { useContext } from 'react';
import './SettingsGroup.scss';
import cn from 'classnames';
import Auth from '../../Auth/Auth';
import { CurrentEmojiSchemeContext, CurrentThemeContext } from '../../Widget/Widget';

const SettingsGroup = () => {
    const { isLightTheme, dispatchChangeTheme } = useContext(CurrentThemeContext);
    const { currentEmojiScheme, dispatchChangeEmojiScheme } = useContext(CurrentEmojiSchemeContext);

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
                    <div className={'form_radio_btn'}>
                        <input id={'radio-1'}
                               type={'radio'}
                               value={'1'}
                               checked={currentEmojiScheme === 1}
                               onClick={() => dispatchChangeEmojiScheme(1)}/>
                        <label htmlFor={'radio-1'}>
                            <img src={'/img/grinning-face_apple.png'} alt={'inning-face_apple'}/>
                        </label>
                    </div>
                    <div className={'form_radio_btn'}>
                        <input id={'radio-2'}
                               type={'radio'}
                               value={'2'}
                               checked={currentEmojiScheme === 2}
                               onClick={() => dispatchChangeEmojiScheme(2)}/>
                        <label htmlFor={'radio-2'}>
                            <img src={'/img/grinning-face_google.png'} alt={'inning-face_google'}/>
                        </label>
                    </div>
                    <div className={'form_radio_btn'}>
                        <input id={'radio-3'}
                               type={'radio'}
                               value={'3'}
                               checked={currentEmojiScheme === 3}
                               onClick={() => dispatchChangeEmojiScheme(3)}/>
                        <label htmlFor={'radio-3'}>
                            <img src={'/img/grinning-face_twitter.png'} alt={'inning-face_twitter'}/>
                        </label>
                    </div>
                    <div className={'form_radio_btn'}>
                        <input id={'radio-4'}
                               type={'radio'}
                               value={'4'}
                               checked={currentEmojiScheme === 4}
                               onClick={() => dispatchChangeEmojiScheme(4)}/>
                        <label htmlFor={'radio-4'}>
                            <img src={'/img/grinning-face_facebook.png'} alt={'inning-face_facebook'}/>
                        </label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SettingsGroup;