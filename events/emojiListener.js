const { Events } = require('discord.js');
const { getUnicode } = require('../utils/unicode');

module.exports = {
    name: Events.MessageCreate,
    async execute(message) {
        if (message.author.bot) return; // Ignore bot messages

        const emojiUnicode = getUnicode(message.content);
        if (emojiUnicode) {
            await message.channel.send(emojiUnicode);
        }
    },
};