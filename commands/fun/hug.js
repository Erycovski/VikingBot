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
            "https://c.tenor.com/4n3T2I239q8AAAAC/anime-cute.gif",
            "https://c.tenor.com/mB_y2KUsyuoAAAAd/cuddle-anime-hug.gif",
            "https://c.tenor.com/wUQH5CF2DJ4AAAAC/horimiya-hug-anime.gif",
            "https://c.tenor.com/d3WOzHpBjEwAAAAC/besos.gif",
            "https://c.tenor.com/_BspICsnrcYAAAAM/anime-couple-hug.gif",
            "https://c.tenor.com/8NnSbNaqB_0AAAAC/anime-hug.gif",
            "https://c.tenor.com/z2QaiBZCLCQAAAAC/hug-anime.gif",
            "https://c.tenor.com/qF7mO4nnL0sAAAAM/abra%C3%A7o-hug.gif",
            "https://c.tenor.com/sBFE3GeNpJ4AAAAC/tackle-hug-couple.gif",
            "https://c.tenor.com/wGbmNu-xwCsAAAAC/hug-anime.gif",
            "https://c.tenor.com/l0AcbwYY50sAAAAC/anime-hug.gif",
            "https://c.tenor.com/UZR5Z1cxTM0AAAAM/ojamajo-doremi-ojamajo-doremi-naisho.gif",
            "https://c.tenor.com/_ACTAjo1sZ4AAAAC/anime-friends.gif",
        ]

        var randomchoice = list[Math.floor(Math.random() * list.length )]
        let pessoa = message.mentions.users.first() || client.users.cache.get(args[0])

        if(!pessoa) return message.channel.send(`:x: | ${message.author} Mencione alguèm para dar um abraço!`)

        let hugembed = new Discord.MessageEmbed()
        hugembed.setTitle(`🤗 Abraço`)
        hugembed.setDescription(`🤗 ${message.author} Abraçou ${pessoa}`)
        hugembed.setColor("#7a297a")
        hugembed.setImage(randomchoice)
        hugembed.setThumbnail(message.author.displayAvatarURL({size:1024,format:"jpeg", dynamic: "true"}))
       
        if (message.mentions.users.first() === message.author) {
            message.reply(':x: | Tentando se abraçar? eu te entendo mas infelizmente não é tão bom')
        } else {
            message.channel.send({embeds: [hugembed]})
        }

        
    }
}