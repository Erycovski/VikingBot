const { channelMention } = require("@discordjs/builders")
const Discord = require("discord.js")

module.exports = {
    name: "ping", 
    aliases: ["p"], 

    run: async(client, message, args) => {
       message.channel.send(`Pong! O ping do bot é \`${client.ws.ping}\`ms`)    
    }
}