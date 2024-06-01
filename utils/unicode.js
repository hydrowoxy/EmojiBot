function getUnicode(text) {
    const regex = /(\p{Emoji_Presentation}|\p{Emoji}\uFE0F)/gu;
    const emojis = text.match(regex);
    if (emojis) {
        return emojis.map(emoji => `U+${emoji.codePointAt(0).toString(16).toUpperCase()}`).join('\n');
    }
    return null;
}

module.exports = { getUnicode };