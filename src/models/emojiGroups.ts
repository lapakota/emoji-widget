export enum Groups {
    Recent = 'Recent & Favourites',
    Emotion = 'Emotion & People',
    Nature = 'Animals & Nature',
    Food = 'Food & Drink',
    Activities = 'Activities',
    Travel = 'Travel & Places',
    Objects = 'Objects',
    Symbols = 'Symbols & Flags',
    Settings = 'Settings'
}

// @ts-ignore
export const emojiGroups: string[] = Object.keys(Groups).map(key => Groups[key]);