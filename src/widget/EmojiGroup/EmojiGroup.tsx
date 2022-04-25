import React, { useContext } from 'react';
import './EmojiGroup.scss';
import { EmojiType } from '../../utils/emojisData';
import sendEmojiMessage from '../../utils/messageSender';
import cn from 'classnames';
import { CurrentEmojiSchemeContext, CurrentThemeContext } from '../Widget/Widget';

type EmojiGroupProps = {
    groupName?: string;
    isFavouriteGroup?: boolean;
    groupEmojis: EmojiType[];
    updateRecent: (emoji: EmojiType) => void;
};

//const appleImgPath = '/img/sheet_apple_64_indexed_256.png';
//const googleImgPath = '/img/sheet_google_64_indexed_256.png';
//const twitterImgPath = '/img/sheet_twitter_64_indexed_256.png';
//const facebookImgPath = '/img/sheet_facebook_64_indexed_256.png';

const sheetColumns = 60;
const sheetRows = 60;
const multiplyX = 100 / (sheetColumns - 1);
const multiplyY = 100 / (sheetRows - 1);
const sheetSizeX = 100 * sheetColumns;
const sheetSizeY = 100 * sheetRows;

const EmojiGroup: React.FC<EmojiGroupProps> = ({ groupName, isFavouriteGroup = false, groupEmojis, updateRecent }) => {
    const { currentEmojiScheme } = useContext(CurrentEmojiSchemeContext);
    let ImgPath = '/img/sheet_apple_64_indexed_256.png';
    switch (currentEmojiScheme) {
        case 1:
            ImgPath = '/img/sheet_apple_64_indexed_256.png';
            break;
        case 2:
            ImgPath = '/img/sheet_google_64_indexed_256.png';
            break;
        case 3:
            ImgPath = '/img/sheet_twitter_64_indexed_256.png';
            break;
        case 4:
            ImgPath = '/img/sheet_facebook_64_indexed_256.png';
            break;
        default:
            ImgPath = '/img/sheet_apple_64_indexed_256.png';
            break;
    }

    const { isLightTheme } = useContext(CurrentThemeContext);

    const onClick = (emojiInfo: EmojiType) => {
        updateRecent(emojiInfo);
        sendEmojiMessage(emojiInfo.char);
    };

    const getImageStyles = (emojiInfo: EmojiType) => {
        return {
            backgroundImage: `url(${ImgPath})`,
            backgroundPosition: `${emojiInfo.sheet_x * multiplyX}% ${emojiInfo.sheet_y * multiplyY}%`,
            backgroundSize: `${sheetSizeX}% ${sheetSizeY}%`
        };
    };

    const getRightThemeClassname = (lightName: string, darkName: string) => {
        return isLightTheme ? lightName : darkName;
    };

    return (
        <div className='emoji-group'>
            {groupName && <h3 className='group-name'>{groupName}</h3>}
            <div className={cn('emojis-wrapper', getRightThemeClassname('light-wrapper', 'dark-wrapper'))}>
                {groupEmojis.map((emojiInfo, index) => (
                    <button
                        key={`${emojiInfo.short_name}${index}`}
                        className={cn('emoji-container', getRightThemeClassname('light-container', 'dark-container'))}
                        title={emojiInfo.short_name}
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