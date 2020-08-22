const Discord = require("discord.js");
const Config = require("../utils/config.json");
const Client = new Discord.Client();
const Fs = require("fs");

Client.Commands = new Discord.Collection();

// Commands Handler
Fs.readdir("./Commands/", (error, f) => {
    if (error) {
        return console.error(error);
    };

    let Commands = f.filter(f => f.split(".").pop() === "js");

    if (Commands.length === 0) {
        return console.warn("Aucune commande trouvée !");
    };

    
});

// Events Handler
Fs.readdir("./Events/", (error, f) => {
    if (error) {
        return console.error(error);
    };

    let Events = f.filter(f => f.split(".").pop() === "js");

    if (Events.length === 0) {
        return console.warn("Aucun event trouvée !");
    };
});

Client.login(Config.token);

module.exports = {
    Client
};