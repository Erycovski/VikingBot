const Discord = require("discord.js")
const { MessageActionRow, MessageButton } = require('discord.js')

module.exports = {
    name: "hug",
    aliases: ["abraço", "abraco"],

    run: async (client, message, args) => {
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

        var randomchoice = list[Math.floor(Math.random() * list.length)]
        var randomchoice2 = list[Math.floor(Math.random() * list.length)]
        let pessoa = message.mentions.users.first() || client.users.cache.get(args[0])

        if (!pessoa) return message.channel.send(`:x: | ${message.author} Mencione alguèm para dar um abraço!`)

        let hugembed = new Discord.MessageEmbed()
        hugembed.setTitle(`🤗 Abraço`)
        hugembed.setDescription(`**🤗 ${message.author} Abraçou ${pessoa}**`)
        hugembed.setColor("#7a297a")
        hugembed.setImage(randomchoice)
        hugembed.setThumbnail(message.author.displayAvatarURL({ size: 1024, format: "jpeg", dynamic: "true" }))

        if (message.mentions.users.first() === message.author) {
            message.reply(':x: | Tentando se abraçar? eu te entendo mas infelizmente não é tão bom')
        } else {
            const button = new Discord.MessageActionRow()
                .addComponents(
                    new Discord.MessageButton()
                        .setCustomId('1')
                        .setLabel('Retribuir')
                        .setStyle('PRIMARY')
                        .setDisabled(false)
                )

            const embedRet = new Discord.MessageEmbed()
                .setTitle(`✋ Tapa!`)
                .setDescription(`** 🤗  ${pessoa} Retribuiu o abraço de ${message.author}**`)
                .setColor('#7a297a')
                .setImage(randomchoice2)
                .setThumbnail(pessoa.displayAvatarURL({ size: 1024, format: "jpeg", dynamic: "true" }))

            const row = new MessageActionRow()
                .addComponents(
                    new MessageButton()
                        .setCustomId('1')
                        .setLabel('Retribuir')
                        .setStyle('PRIMARY')
                )

            const filter = i => i.customId === '1' && i.user.id === pessoa.id;

            const collector = message.channel.createMessageComponentCollector({ filter, time: 600000 });

            message.channel.send({ embeds: [hugembed], components: [row] })

            collector.on('collect', async i => {
                if (i.customId === '1') {

                    await i.update({ content: 'clicled', components: [] });
                    message.channel.send({ embeds: [embedRet] })


                }
            });
        }


    }
}