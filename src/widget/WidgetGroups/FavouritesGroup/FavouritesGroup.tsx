import EmojiSearch from '../../EmojiSearch/EmojiSearch';
import EmojiGroup from '../../EmojiGroup/EmojiGroup';
import React from 'react';
import { EmojiType } from '../../../utils/emojisData';
import { Groups } from '../../../utils/emojiGroups';
import './FavouritesGroup.scss';

type FavouritesGroupProps = {
    recentEmojis: EmojiType[];
    favouritesEmojis: EmojiType[];
    isSearching: boolean;
    setIsSearching: (value: boolean) => void;
    updateSearchedGroup: (emojis: EmojiType[]) => void;
    updateRecentEmojis: (emoji: EmojiType) => void;
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
                    <EmojiGroup
                        groupEmojis={favouritesEmojis}
                        isFavouriteGroup={true}
                        updateRecent={updateRecentEmojis}
                    />
                </>
            )}
        </>
    );
};

export default FavouritesGroup;