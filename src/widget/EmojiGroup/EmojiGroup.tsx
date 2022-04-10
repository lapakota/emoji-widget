import React, { useContext } from 'react';
import './EmojiGroup.scss';
import { CurrentThemeContext } from '../../App';
import { Emoji } from 'emoji-data-ts';
import sendMessage from '../../messageSender';

type EmojiGroupProps = {
    groupName?: string;
    groupEmojis: Emoji[];
    updateRecent: (emoji: Emoji) => void;
};

const EmojiGroup: React.FC<EmojiGroupProps> = ({ groupName, groupEmojis, updateRecent }) => {
    const currentTheme = useContext(CurrentThemeContext);

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
                        className={`emoji-container ${emojiInfo.short_name}`}
                        title={emojiInfo.char + emojiInfo.short_name}
                        onClick={() => {
                            updateRecent(emojiInfo);
                            // navigator.clipboard.writeText(emojiInfo.char);
                            sendMessage(emojiInfo.char);
                        }}
                    >
                        <img className={'emoji-img'} src={`/img/apple/64/${emojiInfo.image_url}`} alt={'emoji'} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default EmojiGroup;