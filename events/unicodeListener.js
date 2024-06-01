const { Events } = require('discord.js');
const { getEmoji } = require('../utils/translate');

module.exports = {
    name: Events.MessageCreate,
    async execute(message) {
        if (message.author.bot) return; 

        const emojis = getEmoji(message.content);
        if (emojis) {
            for (const emoji of emojis) {
                await message.react(emoji); 
            }
        }
    },
};
