import React, { useContext } from 'react';
import { EmojiScheme } from '../../../../../utils/enums';
import './index.scss';
import { CurrentEmojiSchemeContext } from '../../../../../contexts';

type RadioButtonProps = {
    scheme: EmojiScheme;
    imageSrc: string;
};

const RadioButton: React.FC<RadioButtonProps> = ({ scheme, imageSrc }) => {
    const { emojiScheme, dispatchChangeEmojiScheme } = useContext(CurrentEmojiSchemeContext);
    const radioId = `radio-${scheme}`;

    return (
        <div className={'form_radio_btn'}>
            <input
                id={radioId}
                type={'radio'}
                value={scheme}
                checked={emojiScheme === scheme}
                onChange={() => dispatchChangeEmojiScheme(scheme)}
            />
            <label htmlFor={radioId}>
                <img src={imageSrc} alt={'inning-face'} />
            </label>
        </div>
    );
};

export default RadioButton;