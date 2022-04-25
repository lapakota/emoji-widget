import useContextMenu from '../../utils/useContextMenu';
import './ContextMenu.scss';
import React, { useContext } from 'react';
import { EmojiType } from '../../utils/emojisData';
import EmojiSearcher from '../../utils/emojiSearcher';
import cn from 'classnames';
import { CurrentThemeContext } from "../../contexts";

type MenuPositionStyle = {
    top: number;
    left: number;
};

type ContextMenuProps = {
    updateRecent: (emoji: EmojiType) => void;
    addFavourite: (emoji: EmojiType) => void;
    removeFavourite: (emoji: EmojiType) => void;
};

const ContextMenu: React.FC<ContextMenuProps> = ({ updateRecent, addFavourite, removeFavourite }) => {
    const { anchorPoint, show } = useContextMenu();

    const { isLightTheme } = useContext(CurrentThemeContext);

    const menuWidth = 100;
    const menuHeight = 70;

    const widgetWidth = document.documentElement.clientWidth;
    const widgetHeight = document.documentElement.clientHeight;

    const getDataAttributeByMouseCoords = (attr: string) => {
        const targetElement = document.elementFromPoint(anchorPoint.x, anchorPoint.y);
        if (targetElement?.classList.length === 0) return;

        if (targetElement?.className === 'emoji-img') return (targetElement as HTMLSpanElement).getAttribute(attr);
        if (targetElement?.className.startsWith('emoji-container')) {
            return (targetElement.firstChild as HTMLSpanElement).getAttribute(attr);
        }
    };

    const getEmojiByMouseCoords = () => {
        return getDataAttributeByMouseCoords('data-char');
    };

    const isFavouritesEmojis = () => {
        return String(getDataAttributeByMouseCoords('data-is-favourite')).toLowerCase() === 'true';
    };

    const addToFavourites = () => {
        const emojiChar = getEmojiByMouseCoords();
        emojiChar && addFavourite(EmojiSearcher.getEmojiDataByChar(emojiChar));
    };

    const removeFromFavourites = () => {
        const emojiChar = getEmojiByMouseCoords();
        emojiChar && removeFavourite(EmojiSearcher.getEmojiDataByChar(emojiChar));
    };

    const copyEmoji = () => {
        const emojiChar = getEmojiByMouseCoords();
        if (emojiChar) {
            updateRecent(EmojiSearcher.getEmojiDataByChar(emojiChar));
            navigator.clipboard.writeText(emojiChar).then(r => r);
        }
    };

    const getRightPositionStyle = () => {
        const positionStyle: MenuPositionStyle = { top: 0, left: 0 };
        // Доп сдвиг на 1 пиксель, чтобы не перекрывать контейнер со смайликом
        if (anchorPoint.x > widgetWidth / 2) positionStyle.left = anchorPoint.x - menuWidth - 1;
        else positionStyle.left = anchorPoint.x + 1;

        if (anchorPoint.y > widgetHeight - menuHeight) positionStyle.top = anchorPoint.y - menuHeight - 1;
        else positionStyle.top = anchorPoint.y + 1;

        return positionStyle;
    };

    const currentEmojiChar = getDataAttributeByMouseCoords('data-char');
    const isFavourites = isFavouritesEmojis();

    if (show && currentEmojiChar) {
        return (
            <ul
                className={cn('menu', isLightTheme ? 'light-menu' : 'dark-menu')}
                style={{ ...getRightPositionStyle(), width: menuWidth, height: menuHeight }}
            >
                <li className={'current-emoji_wrapper'}>
                    <span className={'current-emoji'}>{currentEmojiChar}</span>
                </li>
                {!isFavourites ? (
                    <li>
                        <button className={'add-to-favourites_button'} onClick={addToFavourites}>
                            <span className={'button_text'}>Add favourite</span>
                        </button>
                    </li>
                ) : (
                    <li>
                        <button className={'remove-from-favourites_button'} onClick={removeFromFavourites}>
                            <span className={'button_text'}>Del favourite</span>
                        </button>
                    </li>
                )}
                <li>
                    <button className={'copy_button'} onClick={copyEmoji}>
                        <span className={'button_text'}>Copy emoji</span>
                    </button>
                </li>
            </ul>
        );
    }
    return <></>;
};

export default ContextMenu;