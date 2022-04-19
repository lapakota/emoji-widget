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
import { emojiGroups, Groups } from '../../utils/emojiGroups';
import { emojisData, EmojiType } from '../../utils/emojisData';
import SettingsGroup from '../WidgetGroups/SettingsGroup/SettingsGroup';
import BasicGroup from '../WidgetGroups/BasicGroup';
import FavouritesGroup from '../WidgetGroups/FavouritesGroup/FavouritesGroup';
import ContextMenu from '../ContextMenu/ContextMenu';
import cn from 'classnames';

const EMOJIS_IN_ROW = 9;

const RECENT_COUNT = EMOJIS_IN_ROW;
const FAVOURITES_COUNT = EMOJIS_IN_ROW * 7;

enum StatesKeys {
    CurrentGroupName = 'currentGroupName',
    RecentEmojis = 'recentEmojis',
    FavouritesEmojis = 'favouritesEmojis'
}

const Widget: React.FC = () => {
    const [currentGroupName, setCurrentGroupName] = useState<Groups>(
        loadState(StatesKeys.CurrentGroupName, Groups.Emotion)
    );
    const [currentGroupEmojis, setCurrentGroupEmojis] = useState<EmojiType[]>(emojisData[currentGroupName]);

    const [isSearching, setIsSearching] = useState(false);
    const [searchedEmojis, setSearchedEmojis] = useState<EmojiType[]>([]);

    const [recentEmojis, setRecentEmojis] = useState<EmojiType[]>(loadState(StatesKeys.RecentEmojis, []));
    const [favouritesEmojis, setFavouritesEmojis] = useState<EmojiType[]>(loadState(StatesKeys.FavouritesEmojis, []));

    const isLightTheme = useContext(CurrentThemeContext);

    useEffect(() => {
        localStorage.setItem('recentEmojis', JSON.stringify(recentEmojis));
        localStorage.setItem('favouritesEmojis', JSON.stringify(favouritesEmojis));
        localStorage.setItem('currentGroupName', JSON.stringify(currentGroupName));
    }, [recentEmojis, favouritesEmojis, currentGroupName]);

    function loadState(key: string, defaultValue: any) {
        return JSON.parse(localStorage.getItem(key) as string) || defaultValue;
    }

    const getNewEmojisStateAfterAdding = (prevState: EmojiType[], emoji: EmojiType, limit: number) => {
        const newState: EmojiType[] = JSON.parse(JSON.stringify(prevState));

        const emojiIndex = newState.findIndex(e => e.char === emoji.char);
        emojiIndex !== -1 && newState.splice(emojiIndex, 1);

        newState.unshift(emoji);

        newState.length > limit && newState.pop();
        return newState;
    };

    const updateRecentEmojis = (emoji: EmojiType) => {
        setRecentEmojis(prevState => getNewEmojisStateAfterAdding(prevState, emoji, RECENT_COUNT));
    };

    const addFavouriteEmoji = (emoji: EmojiType) => {
        setFavouritesEmojis(prevState => getNewEmojisStateAfterAdding(prevState, emoji, FAVOURITES_COUNT));
    };

    const removeFavouriteEmoji = (emoji: EmojiType) => {
        setFavouritesEmojis(prevState => prevState.filter(x => x.char !== emoji.char));
    };

    const changeCurrentGroupData = (name: Groups) => () => {
        setIsSearching(false);
        setCurrentGroupEmojis(emojisData[name]);
        setCurrentGroupName(name);
    };

    const updateSearchedGroup = (emojis: EmojiType[]) => {
        setSearchedEmojis(emojis);
    };

    function setCurrentIconColor() {
        return isLightTheme ? '#000000' : '#dbdbdb';
    }

    const icons = [
        <FavoriteIcon color={setCurrentIconColor()} />,
        <PeopleIcon color={setCurrentIconColor()} />,
        <NatureIcon color={setCurrentIconColor()} />,
        <FoodIcon color={setCurrentIconColor()} />,
        <ActivitiesIcon color={setCurrentIconColor()} />,
        <TravelIcon color={setCurrentIconColor()} />,
        <ObjectsIcon color={setCurrentIconColor()} />,
        <SymbolsIcon color={setCurrentIconColor()} />,
        <SettingsIcon color={setCurrentIconColor()} />
    ];

    return (
        <div className={cn('widget', isLightTheme ? 'light-widget' : 'dark-widget')}>
            <div className={'buttons-wrapper'}>
                {icons.map((icon, index) => (
                    <ChangeGroupButton
                        key={`ChangeGroupButton${index}`}
                        groupName={emojiGroups[index]}
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
            <ContextMenu
                addFavourite={addFavouriteEmoji}
                removeFavourite={removeFavouriteEmoji}
                updateRecent={updateRecentEmojis}
            />
        </div>
    );
};

export default Widget;