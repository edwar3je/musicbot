const client = require('../index.js');

const playskip = {
    name: "playskip",
    description: "Skips the current song in queue and plays a new song (YouTube url must be provided).",
    execute: (message, url) => {
        if (!url) return message.channel.send("Error: Please provide a YouTube video url");
        client.DisTube.play(message.member.voice.channel, url, {
            member: message.member,
            textChannel: message.channel,
            message,
            skip: true
        });
    }
}

module.exports = playskip;