const characters = require("../resources/smiteCharacters");

const smite = {
    name: "smite",
    description: "Returns two random gods from Smite",
    execute: (message) => {
        let james = Math.floor(Math.random() * characters.length);
        let rolando = Math.floor(Math.random() * characters.length);
        while(james == rolando){
            james = Math.floor(Math.random() * characters.length);
            rolando = Math.floor(Math.random() * characters.length);
        }
        james = characters[james];
        rolando = characters[rolando];
        return message.channel.send(`James plays: ${james}\n Rolando plays: ${rolando}`);
    }
}

module.exports = smite;