type EmojiType = {
    char: string,
    name: {
        ru: string,
        en: string
    },
    group: string
}

type EmojiGroupType = {
    groupName: string
    groupEmojis: EmojiType[]
}