import React from 'react';
import "./ChangeGroupButton.scss";
import './EmojiGroup.scss';

type ChangeGroupButtonProps = {
    idGroup: number
    icon: string
    onClick: () => void
    isActive: boolean
}

const ChangeGroupButton: React.FC<ChangeGroupButtonProps> = ({idGroup, icon, onClick, isActive}) => {
    return (
        <div id={`Change-group-button ${idGroup}`}
             className={`emoji-container Change-group-button${isActive ? ' active-group' : ''}`} onClick={onClick}>
            {icon}
        </div>
    );
}

export default ChangeGroupButton;
