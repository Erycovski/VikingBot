const { MessageEmbed } = require('discord.js');
const Discord = require("discord.js")

module.exports = {
    name: "botinfo",


    run: async (client, message, args) => {

        let servers = client.guilds.cache.size
        let users = client.users.cache.size
        let ping = client.ws.ping
        let dono_id = "293085621449129994"
        let dono = client.users.cache.get(dono_id)
        let prefix = "v!"
        let versiondiscord = "13.6.0"

        const botinfoembed = new MessageEmbed()
        botinfoembed.setAuthor({ name: client.user.username, iconURL: client.user.displayAvatarURL({ dynamic: true }) })
        botinfoembed.setFooter({ text: client.user.username, iconURL: client.user.displayAvatarURL({ dynamic: true }) })
        botinfoembed.setThumbnail(client.user.displayAvatarURL({ dynamic: true }))
        botinfoembed.setColor("#7a297a")
        botinfoembed.setTimestamp(new Date)
        botinfoembed.setDescription(`👋 Olá ${message.author}, eu sou o bot ${client.user.username}! Meu prefixo é ${prefix}  \n
        Estou em ${servers}, servidores Atendendo a ${users} usuarios
        \\📜 Veja meus comandos com ${prefix}ajuda  
        \\  ping do bot esta em ${ping}
        \\ criado pelo ${dono} na verção ${versiondiscord} do Discord.Js, utilizando JavaScript  ❤️ `)

        message.channel.send({ embeds: [botinfoembed] })



    }
}