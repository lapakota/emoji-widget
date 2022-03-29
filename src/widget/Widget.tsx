import React, {useContext, useEffect, useState} from 'react';
import EmojiGroup from './EmojiGroup';
import ChangeGroupButton from './ChangeGroupButton';
import './Widget.scss';
import emojis from '../assets/emojis.json';
import {NavLink} from "react-router-dom";
import {CurrentThemeContext} from "../App";

const recentEmojisCount = 16;

const Widget: React.FC = () => {
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

    const icons = ['❤️', '😀', '🐹', '🍉', '🎃', '🌍', '🧻', '🉐'];
    const gearWheelIcon = '⚙';

    const currentTheme = useContext(CurrentThemeContext);

    return (
        <div className="Widget" style={currentTheme.body}>
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
                <NavLink to='/settings'>{gearWheelIcon}</NavLink>
            </div>
            <div className={'search'}>
                <input className={'search-input'} placeholder={'Emoji Search'} />
            </div>
            {currentGroup}
        </div>
    );
};

export default Widget;