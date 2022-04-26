import EmojiSearch from '../../EmojiSearch/EmojiSearch';
import EmojiGroup from '../../EmojiGroup/EmojiGroup';
import React, { useState } from 'react';
import { EmojiType } from '../../../utils/emojisData';
import { Groups } from '../../../utils/emojiGroups';
import './FavouritesGroup.scss';

type FavouritesGroupProps = {
    recentEmojis: EmojiType[];
    favouritesEmojis: EmojiType[];
    searchedEmojis: EmojiType[];
    inputText: string;
    setInputText: (value: string) => void;
    isSearching: boolean;
    setIsSearching: (value: boolean) => void;
    updateSearchedGroup: (emojis: EmojiType[]) => void;
    updateRecentEmojis: (emoji: EmojiType) => void;
};

const FavouritesGroup: React.FC<FavouritesGroupProps> = ({
    recentEmojis,
    favouritesEmojis,
    searchedEmojis,
    inputText,
    setInputText,
    isSearching,
    setIsSearching,
    updateSearchedGroup,
    updateRecentEmojis
}) => {
    const [recentEmojisCopy] = useState([...recentEmojis]);

    return (
        <>
            <EmojiSearch
                setIsSearching={setIsSearching}
                updateSearched={updateSearchedGroup}
                inputText={inputText}
                setInputText={setInputText}
            />
            <EmojiGroup
                groupName={isSearching ? Groups.Searched : Groups.Favourites}
                groupEmojis={isSearching ? searchedEmojis : recentEmojisCopy}
                updateRecent={updateRecentEmojis}
            />
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