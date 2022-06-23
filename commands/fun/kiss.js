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
           "https://i.imgur.com/SS7sQpj.gif",
           "https://c.tenor.com/TWbZjCy8iN4AAAAC/girl-anime.gif",
           "https://c.tenor.com/ErAPuiWY46QAAAAC/kiss-anime.gif",
           "https://c.tenor.com/3wE3JNW0fswAAAAC/anime-kiss-love.gif",
           "https://c.tenor.com/0mdCwkmGD1oAAAAC/kiss-love.gif",
           "https://c.tenor.com/dp6A2wF5EKYAAAAC/anime-love.gif",
           "https://c.tenor.com/O1-IX-P5ugQAAAAd/koi-to-uso-anime.gif",
           "https://c.tenor.com/5iiiF4A7KI0AAAAC/anime-cry-anime.gif",
           "https://c.tenor.com/UQwgkQbdp48AAAAC/kiss-anime.gif",
           "https://c.tenor.com/GGuBQ0Zb0FAAAAAM/anime-cute.gif",
        ]
        
        var randomchoice = list[Math.floor(Math.random() * list.length )]
        let pessoa = message.mentions.users.first() || client.users.cache.get(args[0])

        if(!pessoa) return message.channel.send(`:x: | ${message.author} Mencione alguèm para beijar!`)

        let beijoembed = new Discord.MessageEmbed()
        
        beijoembed.setTitle(`💋 Beijo`)
        beijoembed.setDescription(`❤️ ${message.author} beijou ${pessoa}`)
        beijoembed.setColor("#7a297a")
        beijoembed.setImage(randomchoice)
        beijoembed.setThumbnail(message.author.displayAvatarURL({size:1024,format:"jpeg", dynamic: "true"}))

        if (message.mentions.users.first() === message.author) {
            message.reply(':x: | O amor proprio é lindo! mas acho que nao é possivel se beijar 😞')
        } else {
            message.channel.send({embeds: [beijoembed]})
        }
        }



      
}

