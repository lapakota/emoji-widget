import React from 'react';
import './EmojiGroup.scss';


const EmojiGroup: React.FC<EmojiGroupType> = ({groupName, groupEmojis}) => {
    return (
        <div className="Emoji-group">
            <h3 className="group-name">{groupName}</h3>
            <div className="emojis-wrapper">
                {groupEmojis.map((emojiInfo, index) =>
                    <div key={`${emojiInfo.name.en}${index}`}
                         className={`emoji-container ${emojiInfo.name.en}`}
                         onClick={() => {
                             navigator.clipboard.writeText(emojiInfo.char);
                         }}
                    >
                        {emojiInfo.char}
                    </div>)}
            </div>
        </div>
    );
}

export default EmojiGroup;