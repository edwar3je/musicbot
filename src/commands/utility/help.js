const path = require('path');
const fs = require('fs');
const getFiles = require('../../getFiles.js');

const help = {
    name: "help",
    description: "Provides a description of a given function (requires a valid command).",
    example: "!help test",
    execute: async (message, command) => {
        if (!command) return message.channel.send("Error: Please provide a command to get further information.");

        const commandDirectory = path.join(__dirname, '/../../commands');

        const commandDirArr = await getFiles(commandDirectory);

        let found = false;
        let dirName = null;

        for(let directory of commandDirArr){
            for(let file of directory['files']){
                if (file == `${command}.js`){
                    found = true;
                    dirName = directory['directory'];
                    break;
                }
            }
            if(found) break;
        }

        if(!found){
            return message.channel.send(`Command ${command} is not a valid command. Please provide a valid command or use '!commands' to obtain a list of available commands.`);
        } else {
            let commandFile = dirName == "utility" ? require(`./${command}.js`) : require(`../${dirName}/${command}.js`);
            return message.channel.send(`${commandFile.name}: ${commandFile.description}\n Example: ${commandFile.example}`);
        }
    }
}

module.exports =  help;