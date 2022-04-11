import useContextMenu from '../../utils/useContextMenu';
import './Menu.scss';
import React from 'react';
import { Emoji } from 'emoji-data-ts';
import EmojiSearcher from '../../utils/emojiSearcher';

//TODO исправить
const viewportWidth = 308;
const viewportHeight = 440;

const menuWidth = 120;
const menuHeight = 40;

type MenuStyle = {
    top: number;
    left: number;
};

type MenuProps = {
    updateRecent: (emoji: Emoji) => void;
    updateFavourites: (emoji: Emoji) => void;
};

const Menu: React.FC<MenuProps> = ({ updateRecent, updateFavourites }) => {
    const { anchorPoint, show } = useContextMenu();

    const getEmojiByCoords = () => {
        const targetEmojiData = document.elementFromPoint(anchorPoint.x, anchorPoint.y);

        if (targetEmojiData?.className === 'emoji-img') return (targetEmojiData as HTMLImageElement).alt;
        if (targetEmojiData?.className.startsWith('emoji-container')) {
            return (targetEmojiData.firstChild as HTMLImageElement).alt;
        }
    };

    const addFavourites = () => {
        const emojiChar = getEmojiByCoords();
        emojiChar && updateFavourites(EmojiSearcher.getEmojiDataByChar(emojiChar));
    };

    const copyEmoji = () => {
        const emojiChar = getEmojiByCoords();
        if (emojiChar) {
            updateRecent(EmojiSearcher.getEmojiDataByChar(emojiChar));
            navigator.clipboard.writeText(emojiChar).then(r => r);
        }
    };

    const getRightStyle = () => {
        const style: MenuStyle = { top: 0, left: 0 };

        // Доп сдвиг на 1 пиксель, чтобы не перекрывать контейнер со смайликом
        if (anchorPoint.x > viewportWidth / 2) style.left = anchorPoint.x - menuWidth - 1;
        else style.left = anchorPoint.x + 1;

        if (anchorPoint.y > viewportHeight / 2) style.top = anchorPoint.y - menuHeight - 1;
        else style.top = anchorPoint.y + 1;

        return style;
    };

    if (show) {
        return (
            <ul className="menu" style={getRightStyle()}>
                <li>
                    <button className={'add-to-favourites_button'} onClick={addFavourites}>
                        <span className={'button_text'}>Add to favourites</span>
                    </button>
                </li>
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

export default Menu;