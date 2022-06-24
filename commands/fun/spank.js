const Discord = require("discord.js")
const { MessageActionRow, MessageButton } = require('discord.js')

module.exports = {
    name: "spank",


    run: async (client, message, args) => {
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

        var randomchoice = list[Math.floor(Math.random() * list.length)]
        var randomchoice2 = list[Math.floor(Math.random() * list.length)]
        let pessoa = message.mentions.users.first() || client.users.cache.get(args[0])

        if (!pessoa) return message.channel.send(`:x: | ${message.author} Mencione alguèm para dar um tapa na bunda 😳`)

        let spankembed = new Discord.MessageEmbed()
        spankembed.setTitle(`🍑 spank`)
        spankembed.setDescription(`✋🍑 ${message.author} 😳 deu um tapa na bunda de  ${pessoa}`)
        spankembed.setColor("#7a297a")
        spankembed.setImage(randomchoice)
        spankembed.setThumbnail(message.author.displayAvatarURL({ size: 1024, format: "jpeg", dynamic: "true" }))

        if (message.mentions.users.first() === message.author) {
            message.reply(':x: | Um tapa na propria bunda?... 🤔')
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
                .setTitle(`🍑 spank`)
                .setDescription(`**${pessoa} Retribuiu o tapa na bunda de ${message.author}**`)
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

            message.channel.send({ embeds: [spankembed], components: [row] })

            collector.on('collect', async i => {
                if (i.customId === '1') {

                    await i.update({ content: 'clicled', components: [] });
                    message.channel.send({ embeds: [embedRet] })


                }
            });




        }


    }
}

