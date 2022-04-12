const backgroundColorLight = '#f5f5f5';
const fontColourLight = '#000000';
const inputBackgroundColorLight = '#ffffff';

const backgroundColorDark = '#333336';
const fontColourDark = '#dbdbdb';
const inputBackgroundColorDark = '#444446';

export const light = {
    body: {
        backgroundColor: backgroundColorLight
    },
    text: {
        color: fontColourLight
    },
    input: {
        color: fontColourLight,
        backgroundColor: inputBackgroundColorLight
    }
};

export const dark = {
    body: {
        backgroundColor: backgroundColorDark
    },
    text: {
        color: fontColourDark
    },
    input: {
        color: fontColourDark,
        backgroundColor: inputBackgroundColorDark
    }
};

export type Theme = typeof light | typeof dark