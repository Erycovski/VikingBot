const Discord = require("discord.js")

module.exports = {
    name: "help",
    aliases: ["ajuda"],

    run: async (client, message, args) => {
        message.channel.send("veja todos os comandos disponiveis em https://erycovski.github.io/meusitepoggers/viking-bot-pag/comandos.html")
    }
}



