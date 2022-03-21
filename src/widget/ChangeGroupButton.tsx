import React from 'react';
import "./ChangeGroupButton.scss";

type ChangeGroupButtonProps = {
    idGroup: number
    icon: string
    onClick: () => void
}

const ChangeGroupButton: React.FC<ChangeGroupButtonProps> = ( {idGroup, icon, onClick}) => {
  return (
    <div id={`Change-group-button ${idGroup}`} className={`Change-group-button`} onClick={onClick}>
        {icon}
    </div>
  );
}

export default ChangeGroupButton;
