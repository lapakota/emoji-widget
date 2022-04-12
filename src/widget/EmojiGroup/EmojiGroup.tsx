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

const appleImgPath = '/img/sheet_apple_64_clean.png';
// const googleImgPath = '/img/sheet_google_64_clean.png';
// const twitterImgPath = '/img/sheet_twitter_64_clean.png';
// const facebookImgPath = '/img/sheet_facebook_64_clean.png';

const sheetColumns = 60;
const sheetRows = 60;
const multiplyX = 100 / (sheetColumns - 1);
const multiplyY = 100 / (sheetRows - 1);
const sheetSizeX = 100 * sheetColumns;
const sheetSizeY = 100 * sheetRows;

const EmojiGroup: React.FC<EmojiGroupProps> = ({ groupName, groupEmojis, updateRecent }) => {
    const currentTheme = useContext(CurrentThemeContext);

    const onClick = (emojiInfo: EmojiType) => {
        updateRecent(emojiInfo);
        sendMessage(emojiInfo.char);
    };

    const getImageStyles = (emojiInfo: EmojiType) => {
        return {
            backgroundImage: `url(${appleImgPath})`,
            backgroundPosition: `${emojiInfo.sheet_x * multiplyX}% ${emojiInfo.sheet_y * multiplyY}%`,
            backgroundSize: `${sheetSizeX}% ${sheetSizeY}%`
        };
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
                        <span className={'emoji-img'} data-char={emojiInfo.char} style={getImageStyles(emojiInfo)} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default EmojiGroup;