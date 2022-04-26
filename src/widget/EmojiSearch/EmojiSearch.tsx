import React, { useContext } from 'react';
import EmojiSearcher from '../../utils/emojiSearcher';
import { EmojiType } from '../../utils/emojisData';
import './EmojiSearch.scss';
import cn from 'classnames';
import { CurrentThemeContext } from '../../contexts';

type EmojiSearchProps = {
    inputText: string;
    setInputText: (value: string) => void;
    setIsSearching: (value: boolean) => void;
    updateSearched: (emojis: EmojiType[]) => void;
};

const EmojiSearch: React.FC<EmojiSearchProps> = ({ inputText, setInputText, setIsSearching, updateSearched }) => {
    const { isLightTheme } = useContext(CurrentThemeContext);

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const text = e.target.value;
        setInputText(text);

        if (text === '') {
            setIsSearching(false);
        } else setIsSearching(true);

        updateSearched(EmojiSearcher.searchEmojis(text));
    };

    return (
        <div className={'search'}>
            <input
                className={cn('search-input', isLightTheme ? 'light-search-input' : 'dark-search-input')}
                placeholder={'Emoji Search'}
                value={inputText}
                onChange={onChange}
            />
        </div>
    );
};

export default EmojiSearch;