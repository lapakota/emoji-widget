import React, {useState} from "react";
import EmojiGroup from "./EmojiGroup";
import ChangeGroupButton from "./ChangeGroupButton";
import "./Widget.scss";
import emojis from '../assets/emojis.json';

const Widget: React.FC = () => {
    const emojiGroups = emojis.map(data => <EmojiGroup key={data.groupName} groupName={data.groupName}
                                                       groupEmojis={data.groupEmojis}/>);
    const [currentGroupIndex, setCurrentGroupIndex] = useState(1);
    const [currentGroup, setCurrentGroup] = useState(emojiGroups[currentGroupIndex]);

    const icons = ['❤️', '😀', '🐹', '🍉', '🎃', '🌍', '🧻', '🉐'];

    const changeCurrentGroup = (index: number) => {
        setCurrentGroup(emojiGroups[index]);
        setCurrentGroupIndex(index);
    }

    return (
        <div className="Widget">
            <div className={'buttons-wrapper'}>
                {icons.map((icon, index) =>
                    <ChangeGroupButton key={`ChangeGroupButton${index}`} idGroup={index} icon={icon}
                                       onClick={() => changeCurrentGroup(index)}
                                       isActive={index === currentGroupIndex}/>
                )}
            </div>
            <div className={'search'}>
                <input className={'search-input'} placeholder={'Emoji Search'}/>
            </div>
            {currentGroup}
        </div>
    );
}

export default Widget;