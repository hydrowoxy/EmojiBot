const { Events } = require('discord.js');
const { getUnicode } = require('../utils/translate');

module.exports = {
    name: Events.MessageCreate,
    async execute(message) {
        if (message.author.bot) return; 

        const unicode = getUnicode(message.content);
        if (unicode) {
            const response = `I think you meant, "${unicode}"`;
            await message.channel.send(response);
        }
    },
};