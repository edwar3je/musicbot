const path = require('path');
const fs = require('fs');

const help = {
    name: "help",
    description: "Provides a description of a given function (requires a valid command).",
    execute: async (message, command) => {
        if (!command) return message.channel.send("Error: Please provide a command to get further information.");

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
            return message.channel.send(`${commandFile.name}: ${commandFile.description}`);
        }
    }
}

module.exports =  help;