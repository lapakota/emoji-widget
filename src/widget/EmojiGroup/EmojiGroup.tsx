import React, { useContext } from 'react';
import './EmojiGroup.scss';
import { CurrentThemeContext } from '../../App';
import { EmojiType } from '../../utils/emojisData';
import sendMessage from '../../utils/messageSender';

type EmojiGroupProps = {
    groupName?: string;
    groupEmojis: EmojiType[];
    updateRecent: (emoji: EmojiType) => void;
};

const EmojiGroup: React.FC<EmojiGroupProps> = ({ groupName, groupEmojis, updateRecent }) => {
    const currentTheme = useContext(CurrentThemeContext);

    const onClick = (emojiInfo: EmojiType) => {
        updateRecent(emojiInfo);
        sendMessage(emojiInfo.char);
    };

    return (
        <div className="Emoji-group">
            {groupName && (
                <h3 className="group-name" style={currentTheme.text}>
                    {groupName}
                </h3>
            )}
            <div className="emojis-wrapper">
                {groupEmojis.map((emojiInfo, index) => (
                    <div
                        key={`${emojiInfo.short_name}${index}`}
                        className={`emoji-container ${emojiInfo.name}`}
                        title={`${emojiInfo.char} ${emojiInfo.name}`}
                        onClick={() => onClick(emojiInfo)}
                    >
                        <img
                            className={'emoji-img'}
                            src={`/img/apple/64/${emojiInfo.image_url}`}
                            alt={emojiInfo.char}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default EmojiGroup;