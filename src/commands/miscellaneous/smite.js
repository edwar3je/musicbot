const characters = require('../../resources/smiteCharacters');

const smite = {
    name: "smite",
    description: "Returns two random gods from Smite",
    example: "!smite Sam Jake (must provide at least one name)",
    execute: (message, ...players) => {

        if(players.length < 1) return message.channel.send("You must provide the names of each player that would like a random character selection.");

        const stringArr = [];

        const randomValuesSet = new Set();
        while (randomValuesSet.size < players.length){
            randomValuesSet.add(Math.floor(Math.random() * characters.length));
        }

        const randomValuesArray = Array.from(randomValuesSet);
        
        for (let i = 0; i < randomValuesArray.length; i++){
            let heroVal = randomValuesArray[i];
            stringArr.push(`           ${players[i]} plays: ${characters[heroVal].name} (${characters[heroVal].alias})`);
        }

        stringArr.unshift("The following have been selected:");
        let finalString = stringArr.join("\n\n");

        return message.channel.send(finalString);
    }
}

module.exports = smite;