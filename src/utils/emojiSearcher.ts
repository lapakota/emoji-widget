import { EmojiType } from './emojisData';
import { emojisData } from './emojisData';

export default class EmojiSearcher {
    private static allEmojis = this._getAllEmojis();

    static searchEmojis(query: string) {
        const queryTokens = this._splitIntoTokens(query, ' ');
        const foundEmojis: EmojiType[] = [];

        for (let emojiData of this.allEmojis) {
            const nameTokens = [
                ...this._splitIntoTokens(emojiData.name, '_')
                // TODO сделать словарь с переводами названий
            ];

            const queryOccurrences: string[] = [];
            const nameOccurrences: string[] = [];

            for (let queryToken of queryTokens) {
                for (let nameToken of nameTokens) {
                    if (this._isQueryTokenSuitable(queryToken, nameToken, queryOccurrences, nameOccurrences)) {
                        queryOccurrences.push(queryToken);
                        nameOccurrences.push(nameToken);
                    }
                }
            }
            if (queryOccurrences.length === queryTokens.length) foundEmojis.push(emojiData);
        }
        return foundEmojis;
    }

    static getEmojiDataByChar(char: string) {
        return this.allEmojis.filter(x => x.char === char)[0];
    }

    private static _isQueryTokenSuitable(
        queryToken: string,
        nameToken: string,
        queryOccurrences: string[],
        nameOccurrences: string[]
    ) {
        return (
            nameToken.indexOf(queryToken) === 0 &&
            !queryOccurrences.includes(queryToken) &&
            !nameOccurrences.includes(nameToken)
        );
    }

    private static _splitIntoTokens(query: string, sep: ' ' | '_'): string[] {
        return query
            .toLowerCase()
            .split(sep)
            .filter(x => x !== '');
    }

    private static _getAllEmojis() {
        const allEmojis: EmojiType[] = [];
        for (let name in emojisData) allEmojis.push(...emojisData[name]);
        return allEmojis;
    }
}
