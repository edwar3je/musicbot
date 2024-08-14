const nowplaying = {
    name: "nowplaying",
    description: "Lists the current song that is playing in the queue (if applicable).",
    execute: (message, client) => {
        const queue = client.DisTube.getQueue(message.member.voice.channel);
        if (!queue) return message.channel.send("There are no songs currently playing");
        const song = queue.songs[0];
        message.channel.send(`Currently playing: ${song.name}`);
    }
}

module.exports = nowplaying;