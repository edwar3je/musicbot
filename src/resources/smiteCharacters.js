const characters = [
    {
        name: "Achilles",
        alias: "achilles",
        id: 94
    },
    {
        name: "Agni",
        alias: "agni",
        id: 18
    },
    {
        name: "Ah Muzen Cab",
        alias: "ah-muzen-cab",
        id: 45
    },
    {
        name: "Ah Puch",
        alias: "ah-puch",
        id: 65
    },
    {
        name: "Amaterasu",
        alias: "amaterasu",
        id: 72
    },
    {
        name: "Anhur",
        alias: "anhur",
        id: 5
    },
    {
        name: "Anubis",
        alias: "anubis",
        id: 6
    },
    {
        name: "Ao Kuang",
        alias: "ao-kuang",
        id: 60
    },
    {
        name: "Aphrodite",
        alias: "aphrodite",
        id: 32
    },
    {
        name: "Apollo",
        alias: "apollo",
        id: 33
    },
    {
        name: "Arachne",
        alias: "arachne",
        id: 2
    },
    {
        name: "Ares",
        alias: "ares",
        id: 23
    },
    {
        name: "Artemis",
        alias: "artemis",
        id: 1
    },
    {
        name: "Artio",
        alias: "artio",
        id: 90
    },
    {
        name: "Athena",
        alias: "athena",
        id: 37
    },
    {
        name: "Atlas",
        alias: "atlas",
        id: 118
    },
    {
        name: "Awilix",
        alias: "awilix",
        id: 61
    },
    {
        name: "Baba Yaga",
        alias: "baba-yaga",
        id: 109
    },
    {
        name: "Bacchus",
        alias: "bacchus",
        id: 26
    },
    {
        name: "Bakasura",
        alias: "bakasura",
        id: 19
    },
    {
        name: "Bake Kujira",
        alias: "bake-kujira",
        id: 219
    },
    {
        name: "Baron Samedi",
        alias: "baron-samedi",
        id: 96
    },
    {
        name: "Bastet",
        alias: "bastet",
        id: 7
    },
    {
        name: "Bellona",
        alias: "bellona",
        id: 63
    },
    {
        name: "Cabrakan",
        alias: "cabrakan",
        id: 57
    },
    {
        name: "Camazotz",
        alias: "camazotz",
        id: 81
    },
    {
        name: "Cerberus",
        alias: "cerberus",
        id: 93
    },
    {
        name: "Cernunnos",
        alias: "cernunnos",
        id: 86
    },
    {
        name: "Chaac",
        alias: "chaac",
        id: 47
    },
    {
        name: "Chang'e",
        alias: "change",
        id: 40
    },
    {
        name: "Charon",
        alias: "charon",
        id: 127
    },
    {
        name: "Charybdis",
        alias: "charybdis",
        id: 116
    },
    {
        name: "Chernobog",
        alias: "chernobog",
        id: 95
    },
    {
        name: "Chiron",
        alias: "chiron",
        id: 71
    },
    {
        name: "Cliodhna",
        alias: "cliodhna",
        id: 117
    },
    {
        name: "Cthulhu",
        alias: "cthulhu",
        id: 110
    },
    {
        name: "Cu Chulainn",
        alias: "cu-chulainn",
        id: 89
    },
    {
        name: "Cupid",
        alias: "cupid",
        id: 17
    },
    {
        name: "Da Ji",
        alias: "da-ji",
        id: 88
    },
    {
        name: "Danzaburou",
        alias: "danzaburou",
        id: 112
    },
    {
        name: "Discordia",
        alias: "discordia",
        id: 92
    },
    {
        name: "Erlang Shen",
        alias: "erlang-shen",
        id: 78
    },
    {
        name: "Eset",
        alias: "eset",
        id: 36
    },
    {
        name: "Fafnir",
        alias: "fafnir",
        id: 77
    },
    {
        name: "Fenrir",
        alias: "fenrir",
        id: 35
    },
    {
        name: "Freya",
        alias: "freya",
        id: 24
    },
    {
        name: "Ganesha",
        alias: "ganesha",
        id: 87
    },
    {
        name: "Geb",
        alias: "geb",
        id: 48
    },
    {
        name: "Gilgamesh",
        alias: "gilgamesh",
        id: 114
    },
    {
        name: "Guan Yu",
        alias: "guan-yu",
        id: 14
    },
    {
        name: "Hachiman",
        alias: "hachiman",
        id: 91
    },
    {
        name: "Hades",
        alias: "hades",
        id: 3
    },
    {
        name: "He Bo",
        alias: "he-bo",
        id: 15
    },
    {
        name: "Heimdallr",
        alias: "heimdallr",
        id: 107
    },
    {
        name: "Hel",
        alias: "hel",
        id: 10
    },
    {
        name: "Hera",
        alias: "hera",
        id: 98
    },
    {
        name: "Hercules",
        alias: "hercules",
        id: 28
    },
    {
        name: "Horus",
        alias: "horus",
        id: 103
    },
    {
        name: "Hou Yi",
        alias: "hou-yi",
        id: 62
    },
    {
        name: "Hun Batz",
        alias: "hun-batz",
        id: 38
    },
    {
        name: "Ishtar",
        alias: "ishtar",
        id: 122
    },
    {
        name: "Ix Chel",
        alias: "ix-chel",
        id: 126
    },
    {
        name: "Izanami",
        alias: "izanami",
        id: 80
    },
    {
        name: "Janus",
        alias: "janus",
        id: 54
    },
    {
        name: "Jing Wei",
        alias: "jing-wei",
        id: 75
    },
    {
        name: "Jormungandr",
        alias: "jormungandr",
        id: 101
    },
    {
        name: "Kali",
        alias: "kali",
        id: 20
    },
    {
        name: "Khepri",
        alias: "khepri",
        id: 68
    },
    {
        name: "King Arthur",
        alias: "king-arthur",
        id: 99
    },
    {
        name: "Kukulkan",
        alias: "kukulkan",
        id: 13
    },
    {
        name: "Kumbhakarna",
        alias: "kumbhakarna",
        id: 52
    },
    {
        name: "Kuzenbo",
        alias: "kuzenbo",
        id: 85
    },
    {
        name: "Lancelot",
        alias: "lancelot",
        id: 121
    },
    {
        name: "Loki",
        alias: "loki",
        id: 25
    },
    {
        name: "Maman Brigitte",
        alias: "maman-brigitte",
        id: 128
    },
    {
        name: "Martichoras",
        alias: "martichoras",
        id: 125
    },
    {
        name: "Maui",
        alias: "maui",
        id: 123
    },
    {
        name: "Medusa",
        alias: "medusa",
        id: 64
    },
    {
        name: "Mercury",
        alias: "mercury",
        id: 44
    },
    {
        name: "Merlin",
        alias: "merlin",
        id: 100
    },
    {
        name: "Morgan Le Fay",
        alias: "morgan-le-fay",
        id: 115
    },
    {
        name: "Mulan",
        alias: "mulan",
        id: 108
    },
    {
        name: "Ne Zha",
        alias: "ne-zha",
        id: 34
    },
    {
        name: "Neith",
        alias: "neith",
        id: 30
    },
    {
        name: "Nemesis",
        alias: "nemesis",
        id: 49
    },
    {
        name: "Nike",
        alias: "nike",
        id: 83
    },
    {
        name: "Nox",
        alias: "nox",
        id: 59
    },
    {
        name: "Nu Wa",
        alias: "nu-wa",
        id: 46
    },
    {
        name: "Nut",
        alias: "nut",
        id: 130
    },
    {
        name: "Odin",
        alias: "odin",
        id: 11
    },
    {
        name: "Olorun",
        alias: "olorun",
        id: 104
    },
    {
        name: "Osiris",
        alias: "osiris",
        id: 53
    },
    {
        name: "Pele",
        alias: "pele",
        id: 97
    },
    {
        name: "Persephone",
        alias: "persephone",
        id: 105
    },
    {
        name: "Poseidon",
        alias: "poseidon",
        id: 31
    },
    {
        name: "Ra",
        alias: "ra",
        id: 8
    },
    {
        name: "Raijin",
        alias: "raijin",
        id: 73
    },
    {
        name: "Rama",
        alias: "rama",
        id: 55
    },
    {
        name: "Ratatoskr",
        alias: "ratatoskr",
        id: 66
    },
    {
        name: "Ravana",
        alias: "ravana",
        id: 67
    },
    {
        name: "Scylla",
        alias: "scylla",
        id: 50
    },
    {
        name: "Serqet",
        alias: "serqet",
        id: 56
    },
    {
        name: "Set",
        alias: "set",
        id: 102
    },
    {
        name: "Shiva",
        alias: "shiva",
        id: 119
    },
    {
        name: "Skadi",
        alias: "skadi",
        id: 74
    },
    {
        name: "Sobek",
        alias: "sobek",
        id: 9
    },
    {
        name: "Sol",
        alias: "sol",
        id: 70
    },
    {
        name: "Sun Wukong",
        alias: "sun-wukong",
        id: 16
    },
    {
        name: "Surtr",
        alias: "surtr",
        id: 124
    },
    {
        name: "Susano",
        alias: "susano",
        id: 76
    },
    {
        name: "Sylvanus",
        alias: "sylvanus",
        id: 58
    },
    {
        name: "Terra",
        alias: "terra",
        id: 79
    },
    {
        name: "Thanatos",
        alias: "thanatos",
        id: 43
    },
    {
        name: "The Morrigan",
        alias: "the-morrigan",
        id: 84
    },
    {
        name: "Thor",
        alias: "thor",
        id: 22
    },
    {
        name: "Thoth",
        alias: "thoth",
        id: 82
    },
    {
        name: "Tiamat",
        alias: "tiamat",
        id: 113
    },
    {
        name: "Tsukuyomi",
        alias: "tsukuyomi",
        id: 111
    },
    {
        name: "Tyr",
        alias: "tyr",
        id: 41
    },
    {
        name: "Ullr",
        alias: "ullr",
        id: 51
    },
    {
        name: "Vamana",
        alias: "vamana",
        id: 21
    },
    {
        name: "Vulcan",
        alias: "vulcan",
        id: 29
    },
    {
        name: "Xbalanque",
        alias: "xbalanque",
        id: 27
    },
    {
        name: "Xing Tian",
        alias: "xing-tian",
        id: 69
    },
    {
        name: "Yemoja",
        alias: "yemoja",
        id: 106
    },
    {
        name: "Ymir",
        alias: "ymir",
        id: 12
    },
    {
        name: "Yu Huang",
        alias: "yu-huang",
        id: 120
    },
    {
        name: "Zeus",
        alias: "zeus",
        id: 4
    },
    {
        name: "Zhong Kui",
        alias: "zhong-kui",
        id: 42
    }
]

module.exports = characters;