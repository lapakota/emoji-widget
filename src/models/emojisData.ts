import { Emoji, EmojiData } from 'emoji-data-ts';

type EmojisDataType = { [name: string]: Emoji[] };

const getRightGroupName = (name: string) => {
    if (name === 'Smileys & Emotion' || name === 'People & Body') return 'Emotion & People';
    if (name === 'Symbols' || name === 'Flags') return 'Symbols & Flags';
    return name;
};

const initEmojisData = () => {
    const emojisData: EmojisDataType = Object.fromEntries(new EmojiData().emojiCategoryLookUp);
    const processedEmojisData: EmojisDataType = {};

    for (let name in emojisData) {
        const targetGroup = getRightGroupName(name);
        const emojis = emojisData[name];

        if (!processedEmojisData.hasOwnProperty(targetGroup)) {
            processedEmojisData[targetGroup] = emojis;
        } else {
            processedEmojisData[targetGroup].push(...emojis);
        }
    }

    return processedEmojisData;
};

export const emojisData = initEmojisData();