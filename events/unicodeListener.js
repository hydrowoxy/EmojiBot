const { Events } = require('discord.js');
const { getEmoji } = require('../utils/translate'); 

module.exports = {
    name: Events.MessageCreate,
    async execute(message) {
        if (message.author.bot) return; 

        const emoji = getEmoji(message.content);
        if (emoji) {
            const response = `I think you meant, "${emoji}"`;
            await message.channel.send(response);
        }
    },
};
