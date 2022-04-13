import React, { useContext, useState } from 'react';
import EmojiSearcher from '../../utils/emojiSearcher';
import { EmojiType } from '../../utils/emojisData';
import './EmojiSearch.scss';
import { CurrentThemeContext } from '../../App';
import styled from 'styled-components';
import * as themes from '../../themes';

type EmojiSearchProps = {
    setIsSearching: (value: boolean) => void;
    updateSearched: (emojis: EmojiType[]) => void;
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
    let Input = styled.input`
      &:focus {
        box-shadow: 0 0 0 2px #F5F5F5,
        0 0 0 3px #0090FF;
      }`;
    if (currentTheme === themes.dark) {
        Input = styled.input`
          &:focus {
            box-shadow: 0 0 0 2px #333336,
            0 0 0 3px #0090FF;
          }`;
    }
    return (
        <div className={'search'}>
            <Input style={currentTheme.input}
                   className={'search-input'}
                   placeholder={'Emoji Search'}
                   value={input}
                   onChange={onChange} />
        </div>
    );
};

export default EmojiSearch;