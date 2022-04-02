import React, { useContext, useEffect, useState } from 'react';
import EmojiGroup from './EmojiGroup';
import ChangeGroupButton from './ChangeGroupButton';
import './Widget.scss';
import emojisData from '../assets/emojis.json';
import EmojiSearch from './EmojiSearch';
import { NavLink } from 'react-router-dom';
import { CurrentThemeContext } from '../App';
import FavoriteIcon from '../icons/FavoriteIcon';
import PeopleIcon from '../icons/PeopleIcon';
import SettingsIcon from '../icons/SettingsIcon';
import NatureIcon from '../icons/NatureIcon';
import FoodIcon from '../icons/FoodIcon';
import ActivitiesIcon from '../icons/ActivitiesIcon';
import TravelIcon from '../icons/TravelIcon';
import ObjectsIcon from '../icons/ObjectsIcon';
import SymbolsIcon from '../icons/SymbolsIcon';

const RECENT_COUNT = 16;

const Widget: React.FC = () => {
    const currentTheme = useContext(CurrentThemeContext);
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

    const icons = [
        <FavoriteIcon color={currentTheme.text.color} />,
        <PeopleIcon color={currentTheme.text.color} />,
        <NatureIcon color={currentTheme.text.color} />,
        <FoodIcon color={currentTheme.text.color} />,
        <ActivitiesIcon color={currentTheme.text.color} />,
        <TravelIcon color={currentTheme.text.color} />,
        <ObjectsIcon color={currentTheme.text.color} />,
        <SymbolsIcon color={currentTheme.text.color} />
    ];
    const settingsIcon = <SettingsIcon color={currentTheme.text.color} />;

    return (
        <div className='Widget' style={currentTheme.body}>
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
                <NavLink to='/settings'>{settingsIcon}</NavLink>
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