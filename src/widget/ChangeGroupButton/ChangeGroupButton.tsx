import React from 'react';
import './ChangeGroupButton.scss';
import '../EmojiGroup/EmojiGroup.scss';
import { Groups } from '../../utils/emojiGroups';

type ChangeGroupButtonProps = {
    groupName: Groups;
    icon: JSX.Element;
    onClick: () => void;
    isActive: boolean;
};

const ChangeGroupButton: React.FC<ChangeGroupButtonProps> = ({ groupName, icon, onClick, isActive }) => {
    return (
        <button
            id={groupName}
            name={`change group to ${groupName}`}
            className={`change-group_button${isActive ? ' active-group' : ''}`}
            onClick={onClick}
        >
            {icon}
        </button>
    );
};

export default ChangeGroupButton;
