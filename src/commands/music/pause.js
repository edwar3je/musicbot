const pause = {
    name: "pause",
    description: "Pauses the current song in queue (or resumes if a song is currently paused)",
    execute: async (message, client) => {
        const queue = client.DisTube.getQueue(message);
        if (!queue) return message.channel.send("There is nothing in the queue.");
        if (queue.paused) {
            queue.resume();
            return message.channel.send("Resumed the song.");
        }
        queue.pause();
        message.channel.send("Paused the song.");
    }
}

module.exports = pause;