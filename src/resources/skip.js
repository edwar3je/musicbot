const client = require('../index.js');

const skip = {
    name: "skip",
    description: "Skips the current song in queue.",
    execute: (message) => {
        const queue = client.DisTube.getQueue(message);
        if (!queue) return message.channel.send("There is nothing in the queue right now.");
        try {
            const song = queue.skip();
            message.channel.send(`Skipped song, now playing ${song.name}.`);
        } catch (e) {
            console.log(e);
            message.channel.send("Error, something went wrong.");
        }
    }
}

module.exports = skip;