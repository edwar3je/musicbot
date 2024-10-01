const choices = {
    name: "choices",
    description: "Selects a random choice based on options provided (must provide at least two or more choices).",
    example: "!choices Rock Paper Scissors",
    execute: (message, ...choices) => {
        if(choices.length < 2) return message.channel.send("You must provide at least two or more choices (please space them out).");
        const randomValue = Math.floor(Math.random() * choices.length);
        return message.channel.send(`${choices[randomValue]}`);
    }
}

module.exports = choices;