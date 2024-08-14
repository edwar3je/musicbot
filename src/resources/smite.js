const characters = [
    "Achilles",
    "Agni",
    "Ah Muzen Cab",
    "Ah Puch",
    "Amaterasu",
    "Anhur",
    "Anubis",
    "Ao Kuang",
    "Apollo",
    "Arachne",
    "Ares",
    "Artemis",
    "Artio",
    "Athena",
    "Atlas",
    "Awilix",
    "Baba Yaga",
    "Bacchus",
    "Bakasura",
    "Bake Kujira",
    "Baron Samedi",
    "Bastet",
    "Bellona",
    "Cabrakan",
    "Camazotz",
    "Cerberus",
    "Cernunnos",
    "Chaac",
    "Change'e",
    "Charon",
    "Charybdis",
    "Chernobog",
    "Chiron",
    "Chronos",
    "Cliodhna",
    "Cthulhu",
    "Cu Chulainn",
    "Cupid",
    "Da Ji",
    "Danzaburou",
    "Discordia",
    "Erlang Shen",
    "Eset",
    "Fafnir",
    "Fenrir",
    "Freya",
    "Ganesha",
    "Geb",
    "Gilgamesh",
    "Guan Yu",
    "Hachiman",
    "Hades",
    "He Bo",
    "Heimdallr",
    "Hel",
    "Hera",
    "Hercules",
    "Horus",
    "Hou Yi",
    "Hun Batz",
    "Ishtar",
    "Ix Chel",
    "Izanami",
    "Janus",
    "Jing Wei",
    "Jormungandr",
    "Kali",
    "Khepri",
    "King Arthur",
    "Kukulkan",
    "Kumbhakarna",
    "Kuzenbo",
    "Lancelot",
    "Loki",
    "Maman Brigitte",
    "Martichoras",
    "Maui",
    "Medusa",
    "Mercury",
    "Merlin",
    "Morgan Le Fay",
    "Mulan",
    "Ne Zha",
    "Neith",
    "Nemesis",
    "Nike",
    "Nox",
    "Nu Wa",
    "Nut",
    "Odin",
    "Olorun",
    "Osiris",
    "Pele",
    "Persephone",
    "Poseidon",
    "Ra",
    "Raijin",
    "Rama",
    "Ratatoskr",
    "Ravana",
    "Scylla",
    "Serqet",
    "Set",
    "Shiva",
    "Skadi",
    "Sobek",
    "Sol",
    "Sun Wukong",
    "Surtr",
    "Susano",
    "Sylvanus",
    "Terra",
    "Thanatos",
    "The Morrigan",
    "Thor",
    "Thoth",
    "Tiamat",
    "Tsukuyomi",
    "Tyr",
    "Ullr",
    "Vamana",
    "Vulcan",
    "Xbalanque",
    "Xing Tian",
    "Yemoja",
    "Ymir",
    "Yu Huang",
    "Zeus",
    "Zhong Kui"
]

const smite = {
    name: "smite",
    description: "Returns two random gods from Smite",
    execute: (message) => {
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
}

module.exports = smite;