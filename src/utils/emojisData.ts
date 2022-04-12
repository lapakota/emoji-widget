import { Emoji, EmojiData } from 'emoji-data-ts';

export interface EmojiType extends Emoji {
    name: string;
}

type EmojiGroupType = { [name: string]: EmojiType[] };

const getRightGroupName = (name: string) => {
    if (name === 'Smileys & Emotion' || name === 'People & Body') return 'Emotion & People';
    if (name === 'Symbols' || name === 'Flags') return 'Symbols & Flags';
    return name;
};

const normalizeEmojiName = (name: string) => {
    return name
        .toLowerCase()
        .split(/[-:. ]/)
        .filter(x => x.length > 0)
        .map(x => x.trim())
        .join('_');
};

const initEmojisData = () => {
    const emojisData = Object.fromEntries(new EmojiData().emojiCategoryLookUp);
    const processedEmojisData: EmojiGroupType = {};

    for (let groupName in emojisData) {
        const targetGroup = getRightGroupName(groupName);
        const emojis = emojisData[groupName] as unknown as EmojiType[];
        emojis.map(x => (x.name = normalizeEmojiName(x.name)));

        if (!processedEmojisData.hasOwnProperty(targetGroup)) {
            processedEmojisData[targetGroup] = emojis;
        } else {
            processedEmojisData[targetGroup].push(...emojis);
        }
    }

    return processedEmojisData;
};

export const emojisData = initEmojisData();