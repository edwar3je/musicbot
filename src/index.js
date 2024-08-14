const { token } = require("./config.json");
const path = require('path');
const fs = require('fs');
const discord = require("discord.js");
const client = new discord.Client({
  intents: [
    "Guilds",
    "GuildMessages",
    "GuildVoiceStates",
    "MessageContent"
  ]
});

const { YtDlpPlugin } = require('@distube/yt-dlp');

const { DisTube } = require("distube");

client.DisTube = new DisTube(client, {
  emitNewSongOnly: true,
  emitAddSongWhenCreatingQueue: false,
  emitAddListWhenCreatingQueue: false,
  plugins: [
    new YtDlpPlugin()
  ]
});

client.on("ready", client => {
  console.log("KMart Bot is online");
});

client.on("messageCreate", message => {
  if (message.author.bot || !message.guild) return;
  const prefix = "!";
  const args = message.content.slice(prefix.length).trim().split(/ +/g);

  if (!message.content.toLowerCase().startsWith("!")) return;

  const command = args.shift().toLowerCase();

  const directoryPath = path.join(__dirname, 'resources');

  let fileName = null;

  /*const mainDirectoryPath = path.join(__dirname, 'commands');

  let foundDirectory = null;

  let searching = true;

  fs.readdir(mainDirectoryPath, async (err, directories) => {
    
    if (err) {
      return console.log('Unable to scan directory: ' + err);
    }

    for (let directory of directories) {
      let subDirectoryPath = path.join(mainDirectoryPath, directory);
      fs.readdir(subDirectoryPath, (err, files) => {
        if (err) {
          return console.log('Unable to scan directory: ' + err);
        }
        for (let file of files) {
          if(file == `${command}.js`){
            console.log(`${command} is a file`);
            foundDirectory = directory;
            searching = false;
            break;
          }
        }
      });
      if(!searching && foundDirectory != null){
        break;
      }
    }

    while (directories.length && searching) {
      let currentDirectory = directories.pop();
      console.log(currentDirectory);

      if(currentDirectory == command) {
        console.log(`${command} is a directory`);
        foundDirectory = currentDirectory;
        searching = false;
      }

      let subDirectoryPath = path.join(mainDirectoryPath, currentDirectory);
      
      fs.readdir(subDirectoryPath, (err, files) => {
        if (err) {
          return console.log('Unable to scan directory: ' + err);
        }

        while (files.length && searching) {
          let currentFile = files.pop();
          console.log(currentFile);

          if(currentFile == `${command}.js`) {
            console.log(`${command} is a file`);
            foundDirectory = currentDirectory;
            searching = false;
          }
        }
      });

    }

    if(!searching && foundDirectory != null){
      console.log('Found');
    }

    console.log('This should occur last');
  });*/

  /*fs.readdir(mainDirectoryPath,  async (err, directories) => {
    
    if (err) {
      return console.log('Unable to scan directory: ' + err);
    }

    directories.forEach((directory) => {
      console.log(directory);
    });

    while(directories.length && searching){
      let currentDirectory = directories.pop();

      console.log(currentDirectory);
      if(!directories.length) console.log("End of the line");

      let subDirectoryPath = path.join(mainDirectoryPath, currentDirectory);
      await fs.readdir(subDirectoryPath, (err, files) => {

        if (err) {
          return console.log('Unable to scan directory: ' + err);
        }

        while(files.length && searching){
          let currentFile = files.pop();
          console.log(currentFile);
          if(`${command}.js` == currentFile){
            console.log("found it");
            foundDirectory = currentDirectory;
            console.log(foundDirectory);
            searching = false;
            break;
          }
        }
      });
    }
    console.log(foundDirectory);
    console.log(searching);
    console.log("This should happen last");
    if(foundDirectory == null){
      return message.channel.send("Error: not a command. For a list of commands, please type '!help'.");
    } else {
      let commandFile = require(`./commands/${foundDirectory}/${command}.js`);
      if(foundDirectory == 'music'){
        args.unshift(client);
      }
      args.unshift(message);
      commandFile.execute(...args);
    }
  });*/

  fs.readdir(directoryPath, (err, files) => {
    if (err) {
      return console.log('Unable to scan directory: ' + err);
    }
    for (let file of files){
      if(`${command}.js` == file){
        fileName = file;
        break;
      }
    }
    if(fileName == null){
      return message.channel.send("Error: not a command. For a list of commands, please type '!help'.");
    } else {
      let commandFile = require(`./resources/${fileName}`);
      //let commandFile = require(`./commands/${fileName}`);
      args.unshift(message);
      commandFile.execute(...args);
    }
  });
});

client.DisTube.on("playSong", (queue, song) => {
  queue.textChannel.send("Now Playing:\n" + song.name);
});

client.login(token);

module.exports = client;