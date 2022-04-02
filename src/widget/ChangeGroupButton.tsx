import React from 'react';
import './ChangeGroupButton.scss';
import './EmojiGroup.scss';

type ChangeGroupButtonProps = {
    idGroup: number;
    icon: JSX.Element;
    onClick: () => void;
    isActive: boolean;
};

const ChangeGroupButton: React.FC<ChangeGroupButtonProps> = ({ idGroup, icon, onClick, isActive }) => {
    return (
        <div className={`change-group_button-wrapper${isActive ? ' active-group' : ''}`}>
            <button
                id={`change-group_button ${idGroup}`}
                className={`emoji-container change-group_button`}
                onClick={onClick}
            >
                {icon}
            </button>
        </div>
    );
};

export default ChangeGroupButton;
