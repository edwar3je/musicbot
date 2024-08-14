const fs = require('fs');

const commands = {
    name: "listcommands",
    description: "Provides a list of commands.",
    execute: (message) => {
        fs.readdir(__dirname, (err, files) => {
            if (err) {
                return console.log('Unable to scan command files: ' + err);
            }
            const commandStrings = [];
            files.forEach((file) => {
                let fileObject = require(`./${file}`);
                commandStrings.push(`                  ${fileObject.name}: ${fileObject.description}`);
            });
            commandStrings.unshift('Here are the following commands:');
            const finalString = commandStrings.join("\n\n");
            return message.channel.send(finalString);
        });
    }
}

module.exports = commands;