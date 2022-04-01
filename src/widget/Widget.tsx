import React, { useEffect, useState } from 'react';
import EmojiGroup from './EmojiGroup';
import ChangeGroupButton from './ChangeGroupButton';
import './Widget.scss';
import emojisData from '../assets/emojis.json';
import EmojiSearch from './EmojiSearch';

const RECENT_COUNT = 16;

const Widget: React.FC = () => {
    const [currentGroupIndex, setCurrentGroupIndex] = useState<number>(loadCurrentGroupIndex());
    const [currentGroupData, setCurrentGroupData] = useState(emojisData[currentGroupIndex]);

    const [isSearching, setIsSearching] = useState(false);
    const [searchedEmojis, setSearchedEmojis] = useState([] as EmojiType[]);

    const [recentEmojis, setRecentEmojis] = useState<EmojiType[]>(
        JSON.parse(localStorage.getItem('recentEmojis') as string) || []
    );

    useEffect(() => {
        localStorage.setItem('recentEmojis', JSON.stringify(recentEmojis));
        localStorage.setItem('currentGroupIndex', JSON.stringify(currentGroupIndex));
    }, [recentEmojis, currentGroupIndex]);

    function loadCurrentGroupIndex() {
        const index = JSON.parse(localStorage.getItem('currentGroupIndex') as string);
        return index !== null ? index : 1;
    }

    const updateRecentEmojis = (emoji: EmojiType) => {
        setRecentEmojis(prevState => {
            const newState: EmojiType[] = JSON.parse(JSON.stringify(prevState));

            const emojiIndex = newState.findIndex(e => e.char === emoji.char);
            emojiIndex !== -1 && newState.splice(emojiIndex, 1);

            newState.unshift(emoji);
            newState.length > RECENT_COUNT && newState.pop();

            return newState;
        });
    };

    const changeCurrentGroupData = (index: number) => {
        setCurrentGroupData(emojisData[index]);
        setCurrentGroupIndex(index);
    };

    const updateSearchedGroup = (emojis: EmojiType[]) => {
        setSearchedEmojis(emojis);
    };

    const getRightEmojis = () => {
        if (isSearching) return searchedEmojis;
        if (currentGroupData.groupName === 'Recent & Favourites') return recentEmojis;
        return currentGroupData.groupEmojis;
    };

    const icons = ['❤️', '😀', '🐹', '🍉', '🎃', '🌍', '🧻', '🉐'];

    return (
        <div className="Widget">
            <div className={'buttons-wrapper'}>
                {icons.map((icon, index) => (
                    <ChangeGroupButton
                        key={`ChangeGroupButton${index}`}
                        idGroup={index}
                        icon={icon}
                        onClick={() => changeCurrentGroupData(index)}
                        isActive={index === currentGroupIndex}
                    />
                ))}
            </div>
            <EmojiSearch setIsSearching={setIsSearching} updateSearched={updateSearchedGroup} />
            <EmojiGroup
                groupName={isSearching ? 'Searched' : currentGroupData.groupName}
                groupEmojis={getRightEmojis()}
                updateRecent={updateRecentEmojis}
            />
        </div>
    );
};

export default Widget;