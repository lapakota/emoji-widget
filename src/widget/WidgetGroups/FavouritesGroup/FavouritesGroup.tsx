import EmojiSearch from '../../EmojiSearch/EmojiSearch';
import EmojiGroup from '../../EmojiGroup/EmojiGroup';
import React from 'react';
import { Emoji } from 'emoji-data-ts';
import { Groups } from '../../../utils/emojiGroups';
import './FavouritesGroup.scss';

type FavouritesGroupProps = {
    recentEmojis: Emoji[];
    favouritesEmojis: Emoji[];
    isSearching: boolean;
    setIsSearching: (value: boolean) => void;
    updateSearchedGroup: (emojis: Emoji[]) => void;
    updateRecentEmojis: (emoji: Emoji) => void;
};

const FavouritesGroup: React.FC<FavouritesGroupProps> = ({
    recentEmojis,
    favouritesEmojis,
    isSearching,
    setIsSearching,
    updateSearchedGroup,
    updateRecentEmojis
}) => {
    return (
        <>
            <EmojiSearch setIsSearching={setIsSearching} updateSearched={updateSearchedGroup} />
            <EmojiGroup groupName={Groups.Favourites} groupEmojis={recentEmojis} updateRecent={updateRecentEmojis} />
            {!isSearching && (
                <>
                    <div className={'emoji-groups_separator'}>
                        <div className="separator_inner" />
                    </div>
                    <EmojiGroup groupEmojis={favouritesEmojis} updateRecent={updateRecentEmojis} />
                </>
            )}
        </>
    );
};

export default FavouritesGroup;