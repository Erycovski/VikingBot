const Discord = require("discord.js")

module.exports = {
    name: "tapa", 
    aliases: ["slap"], 

    run: async(client, message, args, ) => {

        
        var list = [
            "https://i.imgur.com/oOCq3Bt.gif",
            "https://i.imgur.com/Agwwaj6.gif",
            "https://i.imgur.com/kSLODXO.gif",
            "https://i.imgur.com/CwbYjBX.gif",
            "https://i.imgur.com/mT4VjD6.gif",
            "https://c.tenor.com/LUJRVpYgy-8AAAAC/kiniro-kiniro-mosaic.gif",
            "https://c.tenor.com/blbrtpA-HTgAAAAM/tapa.gif",
            "https://c.tenor.com/LSPqvOHb3IcAAAAC/jujutsu-kaisen-anime.gif",
            "https://c.tenor.com/X-xCHJc5IqUAAAAM/boy-punish-mad.gif",
            "https://c.tenor.com/eStYuttoV7QAAAAd/osamake-anime.gif",
            "https://c.tenor.com/FaXcxpmU3PMAAAAC/anime-slap.gif",
            "https://c.tenor.com/Qpe8tbJURvgAAAAC/eromanga-slap.gif",
            "https://c.tenor.com/yJmrNruFNtEAAAAM/slap.gif",
            "https://c.tenor.com/xzOIJT7gJ88AAAAC/enojada-mad.gif",
            "https://i.imgur.com/mIg8erJ.gif", 
        ]

        var randomchoice = list[Math.floor(Math.random() * list.length )]
        let pessoa = message.mentions.users.first() || client.users.cache.get(args[0])

        if(!pessoa) return message.channel.send(`:x: | ${message.author} Mencione alguèm para dar um tapa!`)

        let tapaembed = new Discord.MessageEmbed()
        tapaembed.setTitle(`✋ Tapa!`)
        tapaembed.setDescription(`😡 ${message.author} deu um tapa em ${pessoa}`)
        tapaembed.setColor("#7a297a")
        tapaembed.setImage(randomchoice)
        tapaembed.setThumbnail(message.author.displayAvatarURL({size:1024, format:"jpeg", dynamic: "true"}))
        message.channel.send({embeds: [tapaembed]})

        
    }
}