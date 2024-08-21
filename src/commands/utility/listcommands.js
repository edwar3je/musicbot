const path = require('path');
const fs = require('fs');
const getFiles = require('../../getFiles.js');

const commands = {
    name: "listcommands",
    description: "Provides a list of commands.",
    execute: async (message) => {

        let commandStrings = [];

        const commandDirectory = path.join(__dirname, '/../../commands');

        const commandDirArr = await getFiles(commandDirectory);

        for(let directory of commandDirArr){
            if(directory['directory'] != "eastereggs"){
                for(let file of directory['files']){
                    let fileObject = directory['directory'] == "utility" ? require(`./${file}`) : require(`../${directory['directory']}/${file}`);
                    commandStrings.push(`                  ${fileObject.name}: ${fileObject.description}`);
                }
            }
        }
        commandStrings.unshift('Here are the following commands:');
        const finalString = commandStrings.join("\n\n");
        return message.channel.send(finalString);
    }
}

module.exports = commands;