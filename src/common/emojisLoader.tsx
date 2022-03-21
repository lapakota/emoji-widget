import {GroupTypes, WidgetGroups} from "./groups";

type emojisLoaderType = () => EmojiGroupType[];

const emojisLoader: emojisLoaderType = () => {
    const emojis: EmojiType[] = require('../assets/emojis.json')['emojis'];

    const getFilteredEmojis = (...allowedGroups: string[]) => {
        return emojis.filter(data => allowedGroups.includes(data.group));
    }

    return [
        {
            groupName: WidgetGroups.FAVOURITES,
            groupEmojis: [] as EmojiType[]
        },
        {
            groupName: WidgetGroups.PEOPLE,
            groupEmojis: getFilteredEmojis(GroupTypes.SMILEYS, GroupTypes.PEOPLE)
        },
        {
            groupName: WidgetGroups.NATURE,
            groupEmojis: getFilteredEmojis(GroupTypes.NATURE)
        },
        {
            groupName: WidgetGroups.FOOD,
            groupEmojis: getFilteredEmojis(GroupTypes.FOOD)
        },
        {
            groupName: WidgetGroups.ACTIVITIES,
            groupEmojis: getFilteredEmojis(GroupTypes.ACTIVITIES)
        },
        {
            groupName: WidgetGroups.TRAVEL,
            groupEmojis: getFilteredEmojis(GroupTypes.TRAVEL)
        },
        {
            groupName: WidgetGroups.OBJECTS,
            groupEmojis: getFilteredEmojis(GroupTypes.OBJECTS)
        },
        {
            groupName: WidgetGroups.SYMBOLS,
            groupEmojis: getFilteredEmojis(GroupTypes.SYMBOLS, GroupTypes.FLAGS)
        },
    ]
}

export default emojisLoader;