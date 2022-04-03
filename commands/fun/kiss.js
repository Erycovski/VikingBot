const { channelMention } = require("@discordjs/builders")
const Discord = require("discord.js")

module.exports = {
    name: "beijo", 
    aliases: ["kiss"], 

    run: async(client, message, args) => {
        var list = [
           "https://i.imgur.com/WVSwvm6.gif",
           "https://i.imgur.com/q340AoA.gif",
           "https://i.imgur.com/LRPJt19.gif",
           "https://i.imgur.com/6nCt4eb.gif",
           "https://i.imgur.com/KAmjoLO.gif",
           "https://i.imgur.com/SS7sQpj.gif"
        ]

        var randomchoice = list[Math.floor(Math.random() * list.length )]
        let pessoa = message.mentions.users.first() || client.users.cache.get(args[0])

        if(!pessoa) return message.channel.send(`:x: | ${message.author} Mencione alguèm para beijar!`)

        let beijoembed = new Discord.MessageEmbed()
        beijoembed.setTitle(`💋 Beijo`)
        beijoembed.setDescription(`❤️ ${message.author} beijou ${pessoa}`)
        beijoembed.setColor("#7a297a")
        beijoembed.setImage(randomchoice)
        beijoembed.setThumbnail(message.author.displayAvatarURL({format:"jpeg"}))
        message.channel.send({embeds: [beijoembed]})
    }
}

