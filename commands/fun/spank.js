const { channelMention } = require("@discordjs/builders")
const Discord = require("discord.js")

module.exports = {
    name: "spank", 


    run: async(client, message, args) => {
        var list = [
           "https://c.tenor.com/Tj6GzyCetQwAAAAC/spank-rank.gif",
           "https://c.tenor.com/5ropePOLZV4AAAAC/bad-beat.gif",
           "https://c.tenor.com/qhdaIdgiV78AAAAC/anime-spank.gif",
           "https://c.tenor.com/gScnebhgJn4AAAAC/taritari-anime-spank.gif",
           "https://c.tenor.com/CAesvxP0KyEAAAAd/shinobu-kocho-giyuu-tomioka.gif",
           "https://c.tenor.com/NOFCf_X5Hx8AAAAC/anime-girl.gif",
           "https://c.tenor.com/w84L2QE6lMEAAAAC/onizuka-spank.gif",
           "https://c.tenor.com/IVOxJ3ZUtWgAAAAC/anime-ass-slap.gif",
        ]

        var randomchoice = list[Math.floor(Math.random() * list.length )]
        let pessoa = message.mentions.users.first() || client.users.cache.get(args[0])

        if(!pessoa) return message.channel.send(`:x: | ${message.author} Mencione alguèm para dar um tapa na bunda 😳`)

        let spankembed = new Discord.MessageEmbed()
        spankembed.setTitle(`🍑 spank`)
        spankembed.setDescription(`✋🍑 ${message.author} 😳 deu um tapa na bunda de  ${pessoa}`)
        spankembed.setColor("#7a297a")
        spankembed.setImage(randomchoice)
        spankembed.setThumbnail(message.author.displayAvatarURL({size:1024, format:"jpeg", dynamic: "true"}))
        message.channel.send({embeds: [spankembed]})
    }
}

