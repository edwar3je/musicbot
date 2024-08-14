const client = require('../index.js');

const leave = {
    name: "leave",
    description: "Kicks the bot out of voice chat, stopping the current song if playing.",
    execute: (message) => {
        try {
            client.DisTube.voices.leave(message.member.voice.channel);
            return message.channel.send("Sayonara!");
        } catch (err) {
            return message.channel.send("KMart Bot is not in a voice channel.")
        }
    }
}

module.exports = leave;