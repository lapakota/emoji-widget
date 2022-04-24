import React, { useContext } from 'react';
import './ChangeGroupButton.scss';
import '../EmojiGroup/EmojiGroup.scss';
import { Groups } from '../../utils/emojiGroups';
import cn from 'classnames';
import { CurrentThemeContext } from '../../App';

type ChangeGroupButtonProps = {
    groupName: Groups;
    icon: JSX.Element;
    onClick: () => void;
    isActive: boolean;
};

const ChangeGroupButton: React.FC<ChangeGroupButtonProps> = ({ groupName, icon, onClick, isActive }) => {
    const isLightTheme = useContext(CurrentThemeContext);
    const selectRightClass = () => {
        let active = '';
        let hover = isLightTheme ? 'light-change-group_button' : 'dark-change-group_button';
        if (isLightTheme && isActive) {
            active = 'light-active-group';
        }
        if (!isLightTheme && isActive) {
            active = 'dark-active-group';
        }
        return cn('change-group_button', active, hover);
    };

    return (
        <button
            id={groupName}
            name={`change group to ${groupName}`}
            className={selectRightClass()}
            onClick={onClick}
        >
            {icon}
        </button>
    );
};

export default ChangeGroupButton;
