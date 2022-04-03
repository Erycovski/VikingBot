const { channelMention } = require("@discordjs/builders")
const Discord = require("discord.js")

module.exports = {
    name: "hug", 
    aliases: ["abraço", "abraco"], 

    run: async(client, message, args) => {
        var list = [
            "https://i.imgur.com/VgP2ONn.gif",
            "https://i.imgur.com/RPYNm9o.gif",
            "https://i.imgur.com/TYkINci.gif",
            "https://i.imgur.com/gGQxvp2.gif",
            "https://i.imgur.com/r31RPmY.gif",
            "https://i.imgur.com/bPJu4xL.gif",
            "https://i.imgur.com/hM0GKmI.gif",
           
        ]

        var randomchoice = list[Math.floor(Math.random() * list.length )]
        let pessoa = message.mentions.users.first() || client.users.cache.get(args[0])

        if(!pessoa) return message.channel.send(`:x: | ${message.author} Mencione alguèm para dar um abraço!`)

        let hugembed = new Discord.MessageEmbed()
        hugembed.setTitle(`🤗 Abraço`)
        hugembed.setDescription(`🤗 ${message.author} Abraçou ${pessoa}`)
        hugembed.setColor("#7a297a")
        hugembed.setImage(randomchoice)
        hugembed.setThumbnail(message.author.displayAvatarURL({format:"jpeg"}))
        message.channel.send({embeds: [hugembed]})
    }
}