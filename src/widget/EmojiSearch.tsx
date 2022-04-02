import React, { useState } from 'react';
import EmojiSearcher from '../models/emojiSearcher';

type EmojiSearchProps = {
    setIsSearching: (value: boolean) => void;
    updateSearched: (emojis: EmojiType[]) => void;
};

const EmojiSearch: React.FC<EmojiSearchProps> = ({ setIsSearching, updateSearched }) => {
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
            <input className={'search-input'} placeholder={'Emoji Search'} value={input} onChange={onChange} />
        </div>
    );
};

export default EmojiSearch;