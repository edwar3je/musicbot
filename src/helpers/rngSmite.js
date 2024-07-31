const characters = require("./smite.js");

const rngSmite = () => {
    let rolando = Math.floor(Math.random() * characters.length);
    let james = Math.floor(Math.random() * characters.length);
    while(rolando == james){
        rolando = Math.floor(Math.random() * characters.length);
        james = Math.floor(Math.random() * characters.length);
    }
    return [characters[rolando], characters[james]];
}

module.exports = rngSmite;