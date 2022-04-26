import React, { useContext } from 'react';
import './EmojiGroup.scss';
import { EmojiType } from '../../utils/emojisData';
import sendEmojiMessage from '../../utils/messageSender';
import cn from 'classnames';
import { EmojiScheme } from '../../utils/enums';
import { multiplyX, multiplyY, sheetSizeX, sheetSizeY } from '../../utils/constants';
import { CurrentEmojiSchemeContext, CurrentThemeContext } from '../../contexts';

type EmojiGroupProps = {
    groupName?: string;
    isFavouriteGroup?: boolean;
    groupEmojis: EmojiType[];
    updateRecent: (emoji: EmojiType) => void;
};

const SchemeToImagePath = {
    [EmojiScheme.Apple]: '/img/sheet_apple_64_indexed_256.png',
    [EmojiScheme.Google]: '/img/sheet_google_64_indexed_256.png',
    [EmojiScheme.Twitter]: '/img/sheet_twitter_64_indexed_256.png',
    [EmojiScheme.Facebook]: '/img/sheet_facebook_64_indexed_256.png'
};

const EmojiGroup: React.FC<EmojiGroupProps> = ({ groupName, isFavouriteGroup = false, groupEmojis, updateRecent }) => {
    const { isLightTheme } = useContext(CurrentThemeContext);
    const { emojiScheme } = useContext(CurrentEmojiSchemeContext);

    let imagePath = SchemeToImagePath[emojiScheme];

    const onClick = (emojiInfo: EmojiType) => {
        updateRecent(emojiInfo);
        sendEmojiMessage(emojiInfo.char);
    };

    const getImageStyles = (emojiInfo: EmojiType) => {
        return {
            backgroundImage: `url(${imagePath})`,
            backgroundPosition: `${emojiInfo.sheet_x * multiplyX}% ${emojiInfo.sheet_y * multiplyY}%`,
            backgroundSize: `${sheetSizeX}% ${sheetSizeY}%`
        };
    };

    const getRightThemeClassname = (lightName: string, darkName: string) => {
        return isLightTheme ? lightName : darkName;
    };

    return (
        <div className="emoji-group">
            {groupName && <h3 className="group-name">{groupName}</h3>}
            <div className={cn('emojis-wrapper', getRightThemeClassname('light-wrapper', 'dark-wrapper'))}>
                {groupEmojis.map((emojiInfo, index) => (
                    <button
                        key={`${emojiInfo.short_name}${index}`}
                        className={cn('emoji-container', getRightThemeClassname('light-container', 'dark-container'))}
                        title={emojiInfo.name}
                        onClick={() => onClick(emojiInfo)}
                    >
                        <span
                            className={'emoji-img'}
                            data-char={emojiInfo.char}
                            data-is-favourite={isFavouriteGroup}
                            style={getImageStyles(emojiInfo)}
                        />
                    </button>
                ))}
            </div>
        </div>
    );
};

export default EmojiGroup;