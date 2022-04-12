import React, { useContext } from 'react';
import './EmojiGroup.scss';
import { CurrentThemeContext } from '../App';
import { Emoji } from 'emoji-data-ts';
import styled from 'styled-components';
import * as themes from '../themes';

type EmojiGroupProps = {
    groupName: string;
    groupEmojis: Emoji[];
    updateRecent: (emoji: Emoji) => void;
};

const EmojiGroup: React.FC<EmojiGroupProps> = ({ groupName, groupEmojis, updateRecent }) => {
    const currentTheme = useContext(CurrentThemeContext);
    let Div1 = styled.div`
      &::-webkit-scrollbar-thumb {
        box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
      }`;
    let Div2 = styled.div`
      &:hover {
        background-color: #E8E8E8;
      }`;
    if (currentTheme === themes.dark) {
        Div1 = styled.div`
          &::-webkit-scrollbar-thumb {
            box-shadow: inset 0 0 6px #5e5e5e;
          }`;
        Div2 = styled.div`
          &:hover {
            background-color: #5e5e5e;
          }`;
    }
    return (
        <div className='Emoji-group'>
            <h3 className='group-name' style={currentTheme.text}>
                {groupName}
            </h3>
            <Div1 className='emojis-wrapper'>
                {groupEmojis.map((emojiInfo, index) => (
                    <Div2
                        key={`${emojiInfo.short_name}${index}`}
                        className={`emoji-container ${emojiInfo.short_name}`}
                        title={emojiInfo.char + emojiInfo.short_name}
                        onClick={() => {
                            updateRecent(emojiInfo);
                            navigator.clipboard.writeText(emojiInfo.char);
                        }}
                    >
                        <img
                            className={'emoji-img'}
                            src={`/img/apple/64/${emojiInfo.image_url}`}
                            alt={'emoji'}
                        />
                    </Div2>
                ))}
            </Div1>
        </div>
    );
};

export default EmojiGroup;