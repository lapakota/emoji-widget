import React, {useState} from "react";
import emojisLoader from "../common/emojisLoader";
import EmojiGroup from "./EmojiGroup";
import ChangeGroupButton from "./ChangeGroupButton";
import "./Widget.scss";

const emojis = emojisLoader();

const Widget: React.FC = () => {
    const emojiGroups = emojis.map(data => <EmojiGroup key={data.groupName} groupName={data.groupName}
                                                       groupEmojis={data.groupEmojis}/>);
    const [currentGroup, setCurrentGroup] = useState(emojiGroups[1]);
    const icons = ['❤️', '😀', '🐹', '🍉', '🎃', '🌍', '🧻', '🉐'];

    const changeCurrentGroup = (index: number) => {
        setCurrentGroup(emojiGroups[index]);
    }

    return (
        <div className="Widget">
            <div className={'buttons-wrapper'}>
                {icons.map((icon, index) =>
                    <ChangeGroupButton key={`ChangeGroupButton${index}`} idGroup={index} icon={icon}
                                       onClick={() => changeCurrentGroup(index)}/>
                )}
            </div>
            <div className={'search'}>
                <input className={'search-input'}/>
            </div>
            {currentGroup}
        </div>
    );
}

export default Widget;