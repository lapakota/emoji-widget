import React from 'react';
import './SettingsGroup.scss';
import Auth from './Auth/Auth';
import ThemeToggle from './ThemeToggle';
import EmojiSchemePicker from './EmojiSchemePicker';

const SettingsGroup = () => {
    return (
        <div className={'settings'}>
            <div className={'settings_menu'}>
                <Auth />
                <div className={'settings_item'}>
                    <div className="separator_inner" />
                </div>
                <ThemeToggle />
                <EmojiSchemePicker />
            </div>
        </div>
    );
};

export default SettingsGroup;