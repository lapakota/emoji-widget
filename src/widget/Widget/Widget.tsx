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
import { emojiGroups, Groups } from '../../models/emojiGroups';
import { emojisData } from '../../models/emojisData';
import SettingsGroup from '../WidgetGroups/SettingsGroup';
import BasicGroup from '../WidgetGroups/BasicGroup';
import FavouritesGroup from '../WidgetGroups/FavouritesGroup';

const RECENT_COUNT = 18;

const Widget: React.FC = () => {
    const [currentGroupName, setCurrentGroupName] = useState<Groups>(loadCurrentGroupName());
    const [currentGroupEmojis, setCurrentGroupEmojis] = useState<Emoji[]>(emojisData[currentGroupName]);

    const [isSearching, setIsSearching] = useState(false);
    const [searchedEmojis, setSearchedEmojis] = useState<Emoji[]>([]);

    const [recentEmojis, setRecentEmojis] = useState<Emoji[]>(
        JSON.parse(localStorage.getItem('recentEmojis') as string) || []
    );
    const [favouritesEmojis, setFavouritesEmojis] = useState<Emoji[]>(
        JSON.parse(localStorage.getItem('favouritesEmojis') as string) || []
    );

    const currentTheme = useContext(CurrentThemeContext);

    useEffect(() => {
        localStorage.setItem('recentEmojis', JSON.stringify(recentEmojis));
        localStorage.setItem('currentGroupName', JSON.stringify(currentGroupName));
    }, [recentEmojis, currentGroupName]);

    function loadCurrentGroupName() {
        const name = JSON.parse(localStorage.getItem('currentGroupName') as string);
        return name !== null ? name : Groups.Emotion;
    }

    const updateRecentEmojis = (emoji: Emoji) => {
        setRecentEmojis(prevState => {
            const newState: Emoji[] = JSON.parse(JSON.stringify(prevState));

            const emojiIndex = newState.findIndex(e => e.char === emoji.char);
            emojiIndex !== -1 && newState.splice(emojiIndex, 1);

            newState.unshift(emoji);
            newState.length > RECENT_COUNT && newState.pop();

            return newState;
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
                    favouritesEmojis={isSearching ? [] : favouritesEmojis}
                    updateSearchedGroup={updateSearchedGroup}
                    updateRecentEmojis={updateRecentEmojis}
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
        </div>
    );
};

export default Widget;