const path = require('path');
const getFiles = require('./getFiles');
const client = require('./index.js');

const commandHandler = async message => {
    if (message.author.bot || !message.guild) return;
    const prefix = "!";
    const args = message.content.slice(prefix.length).trim().split(/ +/g);

    if(!message.content.toLowerCase().startsWith("!")) return;

    const command = args.shift().toLowerCase();

    const commandsDirectory = path.join(__dirname, 'commands');

    let dirArr = await getFiles(commandsDirectory);

    let found = false;

    let dirName = null;

    for(let directory of dirArr){
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
        console.log("Not found in commands folder");
    } else {
        let commandFile = require(`./commands/${dirName}/${command}.js`);
        if(dirName == "music"){
            args.unshift(client);
        }
        args.unshift(message);
        await commandFile.execute(...args);
    }
}

module.exports = commandHandler;