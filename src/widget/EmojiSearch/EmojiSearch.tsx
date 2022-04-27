import React, { useContext } from 'react';
import EmojiSearcher from '../../utils/emojiSearcher';
import { EmojiType } from '../../utils/emojisData';
import './EmojiSearch.scss';
import cn from 'classnames';
import { CurrentThemeContext } from '../../contexts';
import { MAX_QUERY_LENGTH } from '../../utils/constants';

type EmojiSearchProps = {
    inputText: string;
    setInputText: (value: string) => void;
    setIsSearching: (value: boolean) => void;
    updateSearched: (emojis: EmojiType[]) => void;
};

const EmojiSearch: React.FC<EmojiSearchProps> = ({ inputText, setInputText, setIsSearching, updateSearched }) => {
    const { isLightTheme } = useContext(CurrentThemeContext);

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        let text = e.target.value;

        if (text.length > MAX_QUERY_LENGTH) text = text.slice(0, MAX_QUERY_LENGTH);

        setInputText(text);

        if (text.trim() === '') {
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