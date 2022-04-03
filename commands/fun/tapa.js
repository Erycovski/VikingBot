const { channelMention } = require("@discordjs/builders")
const Discord = require("discord.js")

module.exports = {
    name: "slap", 
    aliases: ["tapa"], 

    run: async(client, message, args) => {
        var list = [
            "https://i.imgur.com/oOCq3Bt.gif",
            "https://i.imgur.com/Agwwaj6.gif",
            "https://i.imgur.com/kSLODXO.gif",
            "https://i.imgur.com/CwbYjBX.gif",
            "https://i.imgur.com/mT4VjD6.gif",
        ]

        var randomchoice = list[Math.floor(Math.random() * list.length )]
        let pessoa = message.mentions.users.first() || client.users.cache.get(args[0])

        if(!pessoa) return message.channel.send(`:x: | ${message.author} Mencione alguèm para dar um tapa!`)

        let tapaembed = new Discord.MessageEmbed()
        tapaembed.setTitle(`✋ Tapa!`)
        tapaembed.setDescription(`😡 ${message.author} deu um tapa em ${pessoa}`)
        tapaembed.setColor("#7a297a")
        tapaembed.setImage(randomchoice)
        tapaembed.setThumbnail(message.author.displayAvatarURL({format:"jpeg"}))
        message.channel.send({embeds: [tapaembed]})
    }
}