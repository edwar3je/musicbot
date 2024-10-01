const axios = require("axios");

const doggo = {
    name: "doggo",
    description: "Posts a random image of a dog using the open source Dog API.",
    example: "!doggo",
    execute: async (message) => {
        const dogInfo = await axios.get("https://dog.ceo/api/breeds/image/random");
        const dogPicture = dogInfo.data.message;
        return message.channel.send(`${dogPicture}`);
    }
}

module.exports = doggo;