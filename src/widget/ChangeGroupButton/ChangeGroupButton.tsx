import React from 'react';
import './ChangeGroupButton.scss';
import '../EmojiGroup/EmojiGroup.scss';

type ChangeGroupButtonProps = {
    idGroup: number;
    icon: JSX.Element;
    onClick: () => void;
    isActive: boolean;
};

const ChangeGroupButton: React.FC<ChangeGroupButtonProps> = ({ idGroup, icon, onClick, isActive }) => {
    return (
            <button
                id={`change-group_button ${idGroup}`}
                className={`change-group_button${isActive ? ' active-group' : ''}`}
                onClick={onClick}
            >
                {icon}
            </button>
    );
};

export default ChangeGroupButton;
