import EmojiSearch from '../EmojiSearch/EmojiSearch';
import EmojiGroup from '../EmojiGroup/EmojiGroup';
import React from 'react';
import { Emoji } from 'emoji-data-ts';
import { Groups } from '../../utils/emojiGroups';

type BasicGroupProps = {
    groupName: Groups;
    groupEmojis: Emoji[];
    setIsSearching: (value: boolean) => void;
    updateSearchedGroup: (emojis: Emoji[]) => void;
    updateRecentEmojis: (emoji: Emoji) => void;
};

const BasicGroup: React.FC<BasicGroupProps> = ({
    groupName,
    groupEmojis,
    setIsSearching,
    updateSearchedGroup,
    updateRecentEmojis
}) => {
    return (
        <>
            <EmojiSearch setIsSearching={setIsSearching} updateSearched={updateSearchedGroup} />
            <EmojiGroup groupName={groupName} groupEmojis={groupEmojis} updateRecent={updateRecentEmojis} />
        </>
    );
};

export default BasicGroup;