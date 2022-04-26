import EmojiSearch from '../EmojiSearch/EmojiSearch';
import EmojiGroup from '../EmojiGroup/EmojiGroup';
import React from 'react';
import { EmojiType } from '../../utils/emojisData';
import { Groups } from '../../utils/emojiGroups';

type BasicGroupProps = {
    groupName: Groups;
    groupEmojis: EmojiType[];
    inputText: string;
    setInputText: (value: string) => void;
    setIsSearching: (value: boolean) => void;
    updateSearchedGroup: (emojis: EmojiType[]) => void;
    updateRecentEmojis: (emoji: EmojiType) => void;
};

const BasicGroup: React.FC<BasicGroupProps> = ({
    groupName,
    groupEmojis,
    inputText,
    setInputText,
    setIsSearching,
    updateSearchedGroup,
    updateRecentEmojis
}) => {
    return (
        <>
            <EmojiSearch
                setIsSearching={setIsSearching}
                updateSearched={updateSearchedGroup}
                inputText={inputText}
                setInputText={setInputText}
            />
            <EmojiGroup groupName={groupName} groupEmojis={groupEmojis} updateRecent={updateRecentEmojis} />
        </>
    );
};

export default BasicGroup;