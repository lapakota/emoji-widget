import useContextMenu from '../../utils/useContextMenu';
import './ContextMenu.scss';
import React, { useContext } from 'react';
import { EmojiType } from '../../utils/emojisData';
import EmojiSearcher from '../../utils/emojiSearcher';
import { CurrentThemeContext } from '../../App';
import cn from 'classnames';
import { Groups } from '../../utils/emojiGroups';

const viewportWidth = document.documentElement.clientWidth;
const viewportHeight = document.documentElement.clientHeight;

const menuWidth = 100;
const menuHeight = 66;

type MenuPositionStyle = {
    top: number;
    left: number;
};

type ContextMenuProps = {
    currentGroupName: Groups;
    updateRecent: (emoji: EmojiType) => void;
    addFavourite: (emoji: EmojiType) => void;
    removeFavourite: (emoji: EmojiType) => void;
};

const ContextMenu: React.FC<ContextMenuProps> = ({ currentGroupName, updateRecent, addFavourite, removeFavourite }) => {
    const { anchorPoint, show } = useContextMenu();
    const isLightTheme = useContext(CurrentThemeContext);

    const getEmojiByMouseCoords = () => {
        const targetEmojiData = document.elementFromPoint(anchorPoint.x, anchorPoint.y);
        if (targetEmojiData?.classList.length === 0) return;

        if (targetEmojiData?.className === 'emoji-img')
            return (targetEmojiData as HTMLSpanElement).getAttribute('data-char');
        if (targetEmojiData?.className.startsWith('emoji-container')) {
            return (targetEmojiData.firstChild as HTMLSpanElement).getAttribute('data-char');
        }
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
        if (anchorPoint.x > viewportWidth / 2) positionStyle.left = anchorPoint.x - menuWidth - 1;
        else positionStyle.left = anchorPoint.x + 1;

        if (anchorPoint.y > viewportHeight - menuHeight) positionStyle.top = anchorPoint.y - menuHeight - 1;
        else positionStyle.top = anchorPoint.y + 1;

        return positionStyle;
    };

    const currentEmojiChar = getEmojiByMouseCoords();

    if (show && currentEmojiChar) {
        return (
            <ul
                className={cn('menu', isLightTheme ? 'light-menu' : 'dark-menu')}
                style={{ ...getRightPositionStyle(), width: menuWidth, height: menuHeight }}
            >
                <li className={'current-emoji_wrapper'}>
                    <span className={'current-emoji'}>{currentEmojiChar}</span>
                </li>
                {currentGroupName === Groups.Favourites ? (
                    <li>
                        <button className={'remove-from-favourites_button'} onClick={removeFromFavourites}>
                            <span className={'button_text'}>Del favourite</span>
                        </button>
                    </li>
                ) : (
                    <li>
                        <button className={'add-to-favourites_button'} onClick={addToFavourites}>
                            <span className={'button_text'}>Add favourite</span>
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