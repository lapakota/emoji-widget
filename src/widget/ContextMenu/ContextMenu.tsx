import useContextMenu from '../../utils/useContextMenu';
import './ContextMenu.scss';
import React, { useContext } from 'react';
import { EmojiType } from '../../utils/emojisData';
import EmojiSearcher from '../../utils/emojiSearcher';
import cn from 'classnames';
import { CurrentThemeContext } from '../../contexts';
import { MENU_HEIGHT, MENU_WIDTH } from '../../utils/constants';

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
        // ?????? ?????????? ???? 1 ??????????????, ?????????? ???? ?????????????????????? ?????????????????? ???? ??????????????????
        if (anchorPoint.x > widgetWidth / 2) positionStyle.left = anchorPoint.x - MENU_WIDTH - 1;
        else positionStyle.left = anchorPoint.x + 1;

        if (anchorPoint.y > widgetHeight - MENU_HEIGHT) positionStyle.top = anchorPoint.y - MENU_HEIGHT - 1;
        else positionStyle.top = anchorPoint.y + 1;

        return positionStyle;
    };

    const currentEmojiChar = getDataAttributeByMouseCoords('data-char');
    const isFavourites = isFavouritesEmojis();

    if (show && currentEmojiChar) {
        return (
            <ul
                className={cn('menu', isLightTheme ? 'light-menu' : 'dark-menu')}
                style={{ ...getRightPositionStyle(), width: MENU_WIDTH, height: MENU_HEIGHT }}
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