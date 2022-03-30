import React, { useContext, useEffect, useState } from 'react';
import EmojiGroup from './EmojiGroup';
import ChangeGroupButton from './ChangeGroupButton';
import './Widget.scss';
import emojis from '../assets/emojis.json';
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

const recentEmojisCount = 16;

const Widget: React.FC = () => {
    const currentTheme = useContext(CurrentThemeContext);
    const [recentEmojis, setRecentEmojis] = useState<EmojiType[]>(
        JSON.parse(localStorage.getItem('recentEmojis') as string) || []
    );

    const updateRecentEmojis = (emoji: EmojiType) => {
        setRecentEmojis(prevState => {
            const newState: EmojiType[] = JSON.parse(JSON.stringify(prevState));

            const emojiIndex = newState.findIndex(e => e.char === emoji.char);
            emojiIndex !== -1 && newState.splice(emojiIndex, 1);

            newState.unshift(emoji);
            newState.length > recentEmojisCount && newState.pop();

            return newState;
        });
    };

    const emojiGroups = emojis.map(data => (
        <EmojiGroup
            key={data.groupName}
            groupName={data.groupName}
            groupEmojis={data.groupName !== 'Recent & Favourites' ? data.groupEmojis : recentEmojis}
            updateRecent={updateRecentEmojis}
        />
    ));

    const loadCurrentGroupIndex = () => {
        const index = JSON.parse(localStorage.getItem('currentGroupIndex') as string);
        return index !== null ? index : 1;
    };

    const [currentGroupIndex, setCurrentGroupIndex] = useState<number>(loadCurrentGroupIndex());
    const [currentGroup, setCurrentGroup] = useState(emojiGroups[currentGroupIndex]);

    const changeCurrentGroup = (index: number) => {
        setCurrentGroup(emojiGroups[index]);
        setCurrentGroupIndex(index);
    };

    useEffect(() => {
        localStorage.setItem('recentEmojis', JSON.stringify(recentEmojis));
        localStorage.setItem('currentGroupIndex', JSON.stringify(currentGroupIndex));
    }, [recentEmojis, currentGroupIndex]);

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
                        onClick={() => changeCurrentGroup(index)}
                        isActive={index === currentGroupIndex}
                    />
                ))}
                <NavLink to='/settings'>{settingsIcon}</NavLink>
            </div>
            <div className={'search'}>
                <input className={'search-input'} placeholder={'Emoji Search'} />
            </div>
            {currentGroup}
        </div>
    );
};

export default Widget;