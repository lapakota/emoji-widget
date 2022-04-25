import React from 'react';
import './index.scss';
import cn from 'classnames';
import RadioButton from './RadioButton';

const EmojiSchemePicker: React.FC = () => {
    const imagesPaths = [
        '/img/grinning-face_apple.png',
        '/img/grinning-face_google.png',
        '/img/grinning-face_twitter.png',
        '/img/grinning-face_facebook.png'
    ];

    return (
        <div className={cn('emoji-scheme_picker', 'settings_item')}>
            <div>Emoji scheme</div>
            {imagesPaths.map((path, index) => (
                <RadioButton key={path} scheme={index} imageSrc={path} />
            ))}
        </div>
    );
};

export default EmojiSchemePicker;