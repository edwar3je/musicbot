const hello = {
    name: "hello",
    description: "Says hello",
    example: "!hello",
    execute: message => {
        return message.channel.send('Hello there.');
    }
}

module.exports = hello;