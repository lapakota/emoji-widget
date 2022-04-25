import { EmojiScheme, StatesKeys } from './enums';
import { EmojiType } from './emojisData';

export const saveToLocalStorage = (
    currentGroupName: string,
    recentEmojis: EmojiType[],
    favouritesEmojis: EmojiType[],
    isLightTheme: boolean,
    emojiScheme: EmojiScheme
) => {
    localStorage.setItem(StatesKeys.CurrentGroupName, JSON.stringify(currentGroupName));
    localStorage.setItem(StatesKeys.RecentEmojis, JSON.stringify(recentEmojis));
    localStorage.setItem(StatesKeys.FavouritesEmojis, JSON.stringify(favouritesEmojis));
    localStorage.setItem(StatesKeys.IsLightTheme, JSON.stringify(isLightTheme));
    localStorage.setItem(StatesKeys.EmojiScheme, JSON.stringify(emojiScheme));
};