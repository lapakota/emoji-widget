import React, { useContext } from 'react';
import EmojiSearcher from '../../utils/emojiSearcher';
import { EmojiType } from '../../utils/emojisData';
import './EmojiSearch.scss';
import { CurrentThemeContext } from '../../App';
import cn from 'classnames';

type EmojiSearchProps = {
    setIsSearching: (value: boolean) => void;
    updateSearched: (emojis: EmojiType[]) => void;
};

const EmojiSearch: React.FC<EmojiSearchProps> = ({ setIsSearching, updateSearched }) => {
    const isLightTheme = useContext(CurrentThemeContext);

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const inputText = e.target.value;

        if (inputText === '') {
            setIsSearching(false);
        } else setIsSearching(true);

        updateSearched(EmojiSearcher.searchEmojis(inputText));
    };

    return (
        <div className={'search'}>
            <input
                className={cn('search-input', isLightTheme ? 'light-search-input' : 'dark-search-input')}
                placeholder={'Emoji Search'}
                onChange={onChange}
            />
        </div>
    );
};

export default EmojiSearch;