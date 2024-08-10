const client = require('../index.js');

const leave = {
    name: "leave",
    description: "Kicks the bot out of voice chat, stopping the current song if playing.",
    execute: (message) => {
        client.DisTube.voices.leave(message.member.voice.channel);
        message.channel.send("Sayonara!");
    }
}

module.exports = leave;