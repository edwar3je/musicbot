const fs = require('fs');

const help = {
    name: "help",
    description: "Provides a description of a given function (requires a valid command).",
    execute: (message, command) => {
        if (!command) return message.channel.send("Error: Please provide a command to get further information.");
        fs.readdir(__dirname, (err, files) => {
            if (err) {
                return console.log('Unable to scan commands file: ' + err);
            }
            for(let file of files){
                if(`${command}.js` == file){
                    let fileObject = require(`./${command}.js`);
                    return message.channel.send(`${fileObject.name}: ${fileObject.description}`);
                }
            }
            return message.channel.send(`Command ${command} is not a valid command. Please provide a valid command or use '!commands' to obtain a list of available commands.`);
        });
    }
}

module.exports =  help;