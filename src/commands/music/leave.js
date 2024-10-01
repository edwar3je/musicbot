const leave = {
    name: "leave",
    description: "Kicks the bot out of voice chat, stopping the current song if playing.",
    example: "!leave (must be in a voice channel to work)",
    execute: (message, client) => {
        client.DisTube.voices.leave(message.member.voice.channel);
        message.channel.send("Sayonara!");
    }
}

module.exports = leave;