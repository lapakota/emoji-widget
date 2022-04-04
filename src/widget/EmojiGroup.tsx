import React, { useContext } from 'react';
import './EmojiGroup.scss';
import { CurrentThemeContext } from '../App';

type EmojiGroupProps = {
    groupName: string;
    groupEmojis: EmojiType[];
    updateRecent: (emoji: EmojiType) => void;
};

const EmojiGroup: React.FC<EmojiGroupProps> = ({ groupName, groupEmojis, updateRecent }) => {
    const currentTheme = useContext(CurrentThemeContext);

    return (
        <div className="Emoji-group">
            <h3 className="group-name" style={currentTheme.text}>
                {groupName}
            </h3>
            <div className="emojis-wrapper">
                {groupEmojis.map((emojiInfo, index) => (
                    <div
                        key={`${emojiInfo.name.en}${index}`}
                        className={`emoji-container ${emojiInfo.name.en}`}
                        title={emojiInfo.name.en}
                        onClick={() => {
                            updateRecent(emojiInfo);
                            navigator.clipboard.writeText(emojiInfo.char);
                        }}
                    >
                        {emojiInfo.char}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default EmojiGroup;