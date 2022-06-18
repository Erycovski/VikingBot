const { MessageEmbed } = require('discord.js');
const Discord = require("discord.js")

module.exports = {
  name: "avatar",
  aliases: ["a"],

  run: async (client, message, args) => {
    const member = message.mentions.users.first() || message.author
    const avatar = new MessageEmbed()
      .setColor("#7a297a")
      .setImage(member.displayAvatarURL({ format: "jpeg", size: 1024, dynamic: "true" }))
    message.channel.send({ embeds: [avatar] })
  }
}