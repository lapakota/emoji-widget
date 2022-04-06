import React, { useContext, useState } from 'react';
import EmojiSearcher from '../models/emojiSearcher';
import { Emoji } from 'emoji-data-ts';
import { CurrentThemeContext } from '../App';

type EmojiSearchProps = {
    setIsSearching: (value: boolean) => void;
    updateSearched: (emojis: Emoji[]) => void;
};

const EmojiSearch: React.FC<EmojiSearchProps> = ({ setIsSearching, updateSearched }) => {
    const currentTheme = useContext(CurrentThemeContext);
    const [input, setInput] = useState('');

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const inputText = e.target.value;
        setInput(inputText);

        if (inputText === '') {
            setIsSearching(false);
        } else setIsSearching(true);

        updateSearched(EmojiSearcher.searchEmojis(inputText));
    };

    return (
        <div className={'search'}>
            <input style={currentTheme.input} className={'search-input'} placeholder={'Emoji Search'} value={input} onChange={onChange} />
        </div>
    );
};

export default EmojiSearch;