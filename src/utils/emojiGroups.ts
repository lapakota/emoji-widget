export enum Groups {
    Favourites = 'Recent & Favourites',
    Emotion = 'Emotion & People',
    Nature = 'Animals & Nature',
    Food = 'Food & Drink',
    Activities = 'Activities',
    Travel = 'Travel & Places',
    Objects = 'Objects',
    Symbols = 'Symbols & Flags',
    Settings = 'Settings',
    Searched = 'Searched'
}

// @ts-ignore
export const emojiGroups: Groups[] = Object.keys(Groups).map(key => Groups[key]);