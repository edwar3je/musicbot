const test = {
    name: "test",
    description: "A filler function that proves a bot is functioning.",
    example: "!test",
    execute: (message) => {
        return message.channel.send("This proves the bot and command handler works");
    }
}

module.exports = test