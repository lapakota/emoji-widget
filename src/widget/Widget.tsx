import React, { useState } from 'react';
import EmojiGroup from './EmojiGroup';
import ChangeGroupButton from './ChangeGroupButton';
import './Widget.scss';
import emojis from '../assets/emojis.json';

const recentEmojisCount = 16;

const Widget: React.FC = () => {
    const [recentEmojis] = useState([] as EmojiType[]);

    const updateRecentEmojis = (emoji: EmojiType) => {
        const emojiIndex = recentEmojis.findIndex(e => e.char === emoji.char);
        emojiIndex !== -1 && recentEmojis.splice(emojiIndex, 1);

        recentEmojis.unshift(emoji);
        recentEmojis.length > recentEmojisCount && recentEmojis.pop();
    };

    const emojiGroups = emojis.map(data => (
        <EmojiGroup
            key={data.groupName}
            groupName={data.groupName}
            groupEmojis={data.groupName !== 'Recent & Favourites' ? data.groupEmojis : recentEmojis}
            updateRecent={updateRecentEmojis}
        />
    ));

    const [currentGroupIndex, setCurrentGroupIndex] = useState(1);
    const [currentGroup, setCurrentGroup] = useState(emojiGroups[currentGroupIndex]);

    const changeCurrentGroup = (index: number) => {
        setCurrentGroup(emojiGroups[index]);
        setCurrentGroupIndex(index);
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
                        onClick={() => changeCurrentGroup(index)}
                        isActive={index === currentGroupIndex}
                    />
                ))}
            </div>
            <div className={'search'}>
                <input className={'search-input'} placeholder={'Emoji Search'} />
            </div>
            {currentGroup}
        </div>
    );
};

export default Widget;