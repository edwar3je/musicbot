const { token } = require("./config.json");
const commandHandler = require('./commandHandler.js');
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

if (client.DisTube){
  console.log('DisTube is accessible from index.js');
}

client.on("ready", client => {
  console.log("KMart Bot is online");
});

client.on("messageCreate", async message => {
  await commandHandler(message, client);
});

client.DisTube.on("playSong", (queue, song) => {
  queue.textChannel.send("Now Playing:\n" + song.name);
});

client.login(token);