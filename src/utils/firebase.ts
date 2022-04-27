import { EmojiType } from './emojisData';
import { EmojiScheme, StatesKeys } from './enums';
import { doc, getDoc, setDoc } from 'firebase/firestore';

export const saveToFirebase = async (
    firestore: any,
    user: any,
    recentEmojis: EmojiType[],
    favouritesEmojis: EmojiType[],
    emojiScheme: EmojiScheme,
    isLightTheme: boolean
) => {
    return await setDoc(doc(firestore, 'users', user.uid), {
        [StatesKeys.RecentEmojis]: recentEmojis,
        [StatesKeys.FavouritesEmojis]: favouritesEmojis,
        [StatesKeys.EmojiScheme]: emojiScheme,
        [StatesKeys.IsLightTheme]: isLightTheme
    });
};

export const getFromFirebase = async (firestore: any, user: any) => {
    return await getDoc(doc(firestore, 'users', user.uid));
};