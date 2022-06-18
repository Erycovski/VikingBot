const Discord = require("discord.js")

module.exports = {
    name: "ping",

    run: async (client, message, args) => {
        message.channel.send(`Pong! O ping do bot é \`${client.ws.ping}\`ms`)
    }
}