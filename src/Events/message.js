const Discord = require("discord.js");
const Main = require(".././main.js");
const Config = require("../../utils/config.json");

let Prefix = Config.prefix

module.exports = async (Message) => {  
    if (Message.author.bot) {
        return;
    };  

    if (!Message.channel.permissionsFor(Main.Client.user).has("SEND_MESSAGES")) {
        return;
    };
 
    if (!Message.content.startsWith(Prefix)) {
        return;
    };

    let Args = Message.content.slice(Prefix.length).trim().split(/ +/g);
    let Command = Args.shift();
    let Cmd = Main.Client.Commands.get(Command);

    if (!Cmd) {
        return;
    }

    Cmd.run(Message, Args);
};