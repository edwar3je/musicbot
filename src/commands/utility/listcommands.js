const path = require('path');
const fs = require('fs');

const commands = {
    name: "listcommands",
    description: "Provides a list of commands.",
    execute: async (message) => {

        let commandStrings = [];
        
        commandDirArr = await new Promise((resolve, reject) => {

            const commandDirectory = path.join(__dirname, '/../../commands');

            fs.readdir(commandDirectory, async (err, directories) => {
                if (err) {
                    reject (new Error("Unable to access commands folder."));
                }
                const promiseArray = [];
                directories.forEach(directory => {
                    promiseArray.push(
                        new Promise((resolve, reject) => {
                            let subDirectoryPath = path.join(commandDirectory, directory);
                            fs.readdir(subDirectoryPath, (err, files) => {
                                if(err){
                                    reject(err)
                                }
                                resolve({
                                    directory: directory,
                                    files: files
                                });
                            })
                        })
                    );
                });
                let results = await Promise.all(promiseArray);
                resolve(results);
            });
        });

        for(let directory of commandDirArr){
            for(let file of directory['files']){
                let fileObject = directory['directory'] == "utility" ? require(`./${file}`) : require(`../${directory['directory']}/${file}`);
                commandStrings.push(`                  ${fileObject.name}: ${fileObject.description}`);
            }
        }
        commandStrings.unshift('Here are the following commands:');
        const finalString = commandStrings.join("\n\n");
        return message.channel.send(finalString);
    }
}

module.exports = commands;