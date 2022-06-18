const { MessageEmbed } = require('discord.js');
const Discord = require("discord.js")


module.exports = {
    name: "userinfo",


    run: async (client, message, args) => {

        let { guild } = message
        let user = message.mentions.users.first() || client.users.cache.get(args[0]) || message.author
        let member = guild.members.cache.get(user.id)

        let avatar = user.displayAvatarURL({ dynamic: "true" })

        let userinfoembed = new MessageEmbed()
        userinfoembed.setColor("#7a297a")
        userinfoembed.setThumbnail(avatar)
        userinfoembed.addFields(
            {
                name: "#️⃣ Tag",
                value: `${user.tag}`,
                inline: true
            },
            {
                name: "🆔 ID",
                value: `${user.id}`,
                inline: true
            },
            {
                name: "📆 Data de criação da conta",
                value: new Date(user.createdTimestamp).toLocaleDateString(),
                inline: true
            },
            {
                name: "👋 Data que entrou no server",
                value: new Date(member.joinedTimestamp).toLocaleDateString(),
                inline: true
            },

        )

        message.reply({ embeds: [userinfoembed] })

    }
}

