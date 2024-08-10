const client = require('../index.js');

const play = {
    name: "play",
    description: "Adds a song (via YouTube video url) and plays in voice chat (only if you are in voice chat).",
    execute: (message, url) => {
        if (!url) return message.channel.send("Error: Please provide a YouTube video url");
        client.DisTube.play(message.member.voice.channel, url, {
            member: message.member,
            textChannel: message.channel,
            message
        });
    }
}

module.exports = play;