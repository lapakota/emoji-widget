import useContextMenu from '../../utils/useContextMenu';
import './Menu.scss';
import React from 'react';
import { Emoji } from 'emoji-data-ts';
import EmojiSearcher from '../../utils/emojiSearcher';

const viewportWidth = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
const viewportHeight = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);

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
        const targetEmojiData = document.elementFromPoint(anchorPoint.x, anchorPoint.y) as HTMLImageElement;
        console.log(targetEmojiData);
        if (targetEmojiData?.className === 'emoji-img') {
            return targetEmojiData.alt;
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
                        Add to favourites
                    </button>
                </li>
                <li>
                    <button className={'copy_button'} onClick={copyEmoji}>
                        Copy emoji
                    </button>
                </li>
            </ul>
        );
    }
    return <></>;
};

export default Menu;