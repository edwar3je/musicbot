const { token } = require("./config.json");
const characters = require("./resources/smite");
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
  console.log("KMart Bot is online")
});

client.on("messageCreate", message => {
  if (message.author.bot || !message.guild) return;
  const prefix = "!";
  const args = message.content.slice(prefix.length).trim().split(/ +/g);

  if (!message.content.toLowerCase().startsWith("!")) return;
  
  const command = args.shift().toLowerCase();

  if (command == "test"){
    return message.channel.send("This ensures the bot works");
  }

  if (command == "smite"){
    let james = Math.floor(Math.random() * characters.length);
    let rolando = Math.floor(Math.random() * characters.length);
    while(james == rolando){
      james = Math.floor(Math.random() * characters.length);
      rolando = Math.floor(Math.random() * characters.length); 
    }
    james = characters[james];
    rolando = characters[rolando];
    return message.channel.send(`James plays: ${james}\n Rolando plays: ${rolando}`);
  }

  if (command == "play") {
    const searchString = args.join(" ");
    if(!searchString) return message.channel.send("Error: Please provide a YouTube link.");
    client.DisTube.play(message.member.voice.channel, searchString, {
      member: message.member,
      textChannel: message.channel,
      message
    });
  }

  if (command == "nowplaying") {
    const queue = client.DisTube.getQueue(message.member.voice.channel);
    if(!queue) return message.channel.send("There are no songs currently playing");
    const song = queue.songs[0]
    message.channel.send(`Currently playing: ${song.name}`);
  }

  if (command == "leave") {
    client.DisTube.voices.leave(message.member.voice.channel);
  }
});

client.DisTube.on("playSong", (queue, song) => {
  queue.textChannel.send("Now Playing:\n" + song.name);
});

client.login(token);