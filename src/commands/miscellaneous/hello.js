const hello = {
    name: "hello",
    description: "says hello",
    execute: message => {
        return message.channel.send('Hello there.');
    }
}

module.exports = hello;