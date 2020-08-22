const Discord = require("discord.js");
const Main = require("../main.js");
const Config = require("../../utils/config.json");

module.exports.run = (Message, Args) => {
    if (Message.author.bot) {
        return;
    };

    let embed = new Discord.MessageEmbed()
        .setTitle("Help")
        .setFooter(Main.Client.Commands.size + " commandes")
        .setTimestamp()
        .setColor("GREEN")
    Main.Client.Commands.forEach(c => {
        embed.addField("**Nom: **" + c.help.name, "**Description: **" + c.help.description + "\n" + "**Usage: **" + c.help.usage);
    });

    Message.channel.send(embed);
};

module.exports.help = {
    name: "help",
    description: "Affiche l'aide",
    usage: Config.prefix + "help"
};