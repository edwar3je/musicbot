const axios = require('axios');
const { parse } = require('node-html-parser');

const characters = require('../../resources/smiteCharacters');

const smitebuild = {
    name: "smitebuild",
    description: "Returns links to three of the most recent builds for a given character on SmiteFire",
    example: "!smitebuild the-morrigan (must provide lowercase name of god with '-' to space out gaps if possible; see alias for god)",
    execute: async (message, character) => {
        if(!character) return message.channel.send("You must provide the name of a character from Smite (all lowercase, with '-' between each space).");

        let counter = 0;
        let validCharacter = null;

        while (validCharacter == null && counter < characters.length){
            let currentCharacter = characters[counter];
            if(currentCharacter.alias == character){
                validCharacter = currentCharacter;
            } else {
                counter++;
            }
        }

        if(validCharacter == null) return message.channel.send("Please provide a valid character from Smite (all lowercase, with '-' between each space).");

        const messageStringArr = [];

        const smiteGodPageResponse = await axios.get(`https://www.smitefire.com/smite/god/${validCharacter.alias}-${validCharacter.id}`);
        const smiteGodPageHTML = parse(smiteGodPageResponse.data);
        const smiteGodBuilds = smiteGodPageHTML.querySelectorAll('div#guideHolder a');
        for(let x=0; x<3; x++){
            const stringArr = smiteGodBuilds[x].rawAttrs.split(" ");
            const initLinkString = stringArr[0];
            const progLinkString = initLinkString.slice(6, (initLinkString.length - 1));
            const finalLinkString = `        https://www.smitefire.com${progLinkString}`;
            messageStringArr.push(finalLinkString);
        }
        messageStringArr.unshift(`Here are the most recent builds for ${validCharacter.name} on SmiteFire:`);
        const finalString = messageStringArr.join('\n\n');
        return message.channel.send(finalString);
    }
}

module.exports = smitebuild;