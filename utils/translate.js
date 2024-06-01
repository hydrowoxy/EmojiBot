// Translate emoji to unicode
function getUnicode(text) {
    const regex = /(\p{Emoji_Presentation}|\p{Emoji}\uFE0F)/gu;
    const emojis = text.match(regex);
    if (emojis) {
        return emojis.map(emoji => `U+${emoji.codePointAt(0).toString(16).toUpperCase()}`).join(' ');
    }
    return null;
}

// Translate unicode to emoji (preserve order from message)
function getEmoji(unicode) {
    const codePoints = unicode.split('U+').slice(1).map(point => parseInt(point, 16));
    const emojis = codePoints.map(codePoint => String.fromCodePoint(codePoint));
    return emojis;
}

module.exports = { getUnicode, getEmoji };