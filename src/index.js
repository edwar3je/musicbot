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

  const directoryPath = path.join(__dirname, 'commands');

  let fileName = null;

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
      let commandFile = require(`./commands/${fileName}`);
      args.unshift(message);
      commandFile.execute(...args);
    }
  });
})

client.DisTube.on("playSong", (queue, song) => {
  queue.textChannel.send("Now Playing:\n" + song.name);
});

client.login(token);

module.exports = client;