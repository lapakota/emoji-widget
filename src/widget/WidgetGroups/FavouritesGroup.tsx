import EmojiSearch from '../EmojiSearch';
import EmojiGroup from '../EmojiGroup/EmojiGroup';
import React from 'react';
import { Emoji } from 'emoji-data-ts';
import { Groups } from '../../models/emojiGroups';

type FavouritesGroupProps = {
    recentEmojis: Emoji[];
    favouritesEmojis: Emoji[];
    setIsSearching: (value: boolean) => void;
    updateSearchedGroup: (emojis: Emoji[]) => void;
    updateRecentEmojis: (emoji: Emoji) => void;
};

const FavouritesGroup: React.FC<FavouritesGroupProps> = ({
    recentEmojis,
    favouritesEmojis,
    setIsSearching,
    updateSearchedGroup,
    updateRecentEmojis
}) => {
    return (
        <>
            <EmojiSearch setIsSearching={setIsSearching} updateSearched={updateSearchedGroup} />
            <EmojiGroup groupName={Groups.Favourites} groupEmojis={recentEmojis} updateRecent={updateRecentEmojis} />
            <div className={'emoji-groups_separator'} />
            <EmojiGroup groupEmojis={favouritesEmojis} updateRecent={updateRecentEmojis} />
        </>
    );
};

export default FavouritesGroup;