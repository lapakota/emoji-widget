import React, { useContext, useEffect, useState } from 'react';
import ChangeGroupButton from '../ChangeGroupButton/ChangeGroupButton';
import './Widget.scss';
import { CurrentThemeContext } from '../../App';
import FavoriteIcon from '../../assets/icons/FavoriteIcon';
import PeopleIcon from '../../assets/icons/PeopleIcon';
import SettingsIcon from '../../assets/icons/SettingsIcon';
import NatureIcon from '../../assets/icons/NatureIcon';
import FoodIcon from '../../assets/icons/FoodIcon';
import ActivitiesIcon from '../../assets/icons/ActivitiesIcon';
import TravelIcon from '../../assets/icons/TravelIcon';
import ObjectsIcon from '../../assets/icons/ObjectsIcon';
import SymbolsIcon from '../../assets/icons/SymbolsIcon';
import { Emoji } from 'emoji-data-ts';
import { emojiGroups, Groups } from '../../utils/emojiGroups';
import { emojisData } from '../../utils/emojisData';
import SettingsGroup from '../WidgetGroups/SettingsGroup/SettingsGroup';
import BasicGroup from '../WidgetGroups/BasicGroup';
import FavouritesGroup from '../WidgetGroups/FavouritesGroup/FavouritesGroup';
import Menu from '../ContextMenu/Menu';

const RECENT_COUNT = 18;

enum StatesKeys {
    CurrentGroupName = 'currentGroupName',
    RecentEmojis = 'recentEmojis',
    FavouritesEmojis = 'favouritesEmojis'
}

const Widget: React.FC = () => {
    const [currentGroupName, setCurrentGroupName] = useState<Groups>(
        loadState(StatesKeys.CurrentGroupName, Groups.Emotion)
    );
    const [currentGroupEmojis, setCurrentGroupEmojis] = useState<Emoji[]>(emojisData[currentGroupName]);

    const [isSearching, setIsSearching] = useState(false);
    const [searchedEmojis, setSearchedEmojis] = useState<Emoji[]>([]);

    const [recentEmojis, setRecentEmojis] = useState<Emoji[]>(loadState(StatesKeys.RecentEmojis, []));
    const [favouritesEmojis, setFavouritesEmojis] = useState<Emoji[]>(loadState(StatesKeys.FavouritesEmojis, []));

    const currentTheme = useContext(CurrentThemeContext);

    useEffect(() => {
        localStorage.setItem('recentEmojis', JSON.stringify(recentEmojis));
        localStorage.setItem('favouritesEmojis', JSON.stringify(favouritesEmojis));
        localStorage.setItem('currentGroupName', JSON.stringify(currentGroupName));
    }, [recentEmojis, favouritesEmojis, currentGroupName]);

    function loadState(key: string, defaultValue: any) {
        return JSON.parse(localStorage.getItem(key) as string) || defaultValue;
    }

    const getNewEmojisState = (prevState: Emoji[], emoji: Emoji) => {
        const newState: Emoji[] = JSON.parse(JSON.stringify(prevState));

        const emojiIndex = newState.findIndex(e => e.char === emoji.char);
        emojiIndex !== -1 && newState.splice(emojiIndex, 1);

        newState.unshift(emoji);

        return newState;
    };

    const updateRecentEmojis = (emoji: Emoji) => {
        setRecentEmojis(prevState => {
            const newState: Emoji[] = getNewEmojisState(prevState, emoji);
            newState.length > RECENT_COUNT && newState.pop();
            return newState;
        });
    };

    const updateFavouritesEmojis = (emoji: Emoji) => {
        setFavouritesEmojis(prevState => {
            return getNewEmojisState(prevState, emoji);
        });
    };

    const changeCurrentGroupData = (name: Groups) => () => {
        setIsSearching(false);
        setCurrentGroupEmojis(emojisData[name]);
        setCurrentGroupName(name);
    };

    const updateSearchedGroup = (emojis: Emoji[]) => {
        setSearchedEmojis(emojis);
    };

    const icons = [
        <FavoriteIcon color={currentTheme.text.color} />,
        <PeopleIcon color={currentTheme.text.color} />,
        <NatureIcon color={currentTheme.text.color} />,
        <FoodIcon color={currentTheme.text.color} />,
        <ActivitiesIcon color={currentTheme.text.color} />,
        <TravelIcon color={currentTheme.text.color} />,
        <ObjectsIcon color={currentTheme.text.color} />,
        <SymbolsIcon color={currentTheme.text.color} />,
        <SettingsIcon color={currentTheme.text.color} />
    ];

    return (
        <div className="widget" style={currentTheme.body}>
            <div className={'buttons-wrapper'}>
                {icons.map((icon, index) => (
                    <ChangeGroupButton
                        key={`ChangeGroupButton${index}`}
                        idGroup={index}
                        icon={icon}
                        onClick={changeCurrentGroupData(emojiGroups[index])}
                        isActive={emojiGroups[index] === currentGroupName}
                    />
                ))}
            </div>
            {currentGroupName === Groups.Favourites ? (
                <FavouritesGroup
                    recentEmojis={isSearching ? searchedEmojis : recentEmojis}
                    favouritesEmojis={favouritesEmojis}
                    updateSearchedGroup={updateSearchedGroup}
                    updateRecentEmojis={updateRecentEmojis}
                    isSearching={isSearching}
                    setIsSearching={setIsSearching}
                />
            ) : currentGroupName === Groups.Settings ? (
                <SettingsGroup />
            ) : (
                <BasicGroup
                    groupName={isSearching ? Groups.Searched : currentGroupName}
                    groupEmojis={isSearching ? searchedEmojis : currentGroupEmojis}
                    updateSearchedGroup={updateSearchedGroup}
                    updateRecentEmojis={updateRecentEmojis}
                    setIsSearching={setIsSearching}
                />
            )}
            <Menu updateFavourites={updateFavouritesEmojis} updateRecent={updateRecentEmojis} />
        </div>
    );
};

export default Widget;