const Discord = require("discord.js")
const { MessageEmbed } = require('discord.js');

module.exports = {
  name: "serverinfo",

  run: async (client, message, args) => {

    let { guild } = message
    let id = message.guild.id
    let avatar = guild.iconURL()
    let users = message.guild.members.cache.size
    let owner_id = guild.ownerId
    let owner = guild.members.cache.get(owner_id)
    let createdAt = guild.createdAt
    let geral = message.guild.channels.cache.size
    let chats = message.guild.channels.cache.filter(a => a.type === "GUILD_TEXT").size
    let calls = message.guild.channels.cache.filter(a => a.type === "GUILD_VOICE").size

    let serverinfoembed = new MessageEmbed()
    serverinfoembed.setTitle(`${guild.name}`)
    serverinfoembed.setColor("#7a297a")
    serverinfoembed.setThumbnail(avatar)
    serverinfoembed.addFields(
      {
        name: "🆔 ID",
        value: `${id}`,
        inline: true
      },
      {
        name: ":busts_in_silhouette: Membros",
        value: `${users}`,
        inline: true
      },
      {
        name: "👑 Dono ",
        value: `${owner.toString()}`,
        inline: true
      },
      {
        name: "📅 Criado em",
        value: new Date(createdAt).toLocaleDateString('pt-BR'),
        inline: true
      },
      {
        name: `💬 Canais (${geral})`,
        value: `📝 Texto: ${chats} \n 🗣 Voz:    ${calls}`,
        inline: true
      }
    )

    message.reply({ embeds: [serverinfoembed] })
  }
}









