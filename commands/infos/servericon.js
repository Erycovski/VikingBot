const { MessageEmbed } = require('discord.js');
const Discord = require("discord.js")

module.exports = {
  name: "servericon",
  aliases: ["serveravatar"],

  run: async (client, message, args) => {
    let avatar2 = message.guild.iconURL({ format: "jpeg", size: 1024, dynamic: "true" })
    
    const avatar = new MessageEmbed()
      .setColor("#7a297a")
      .setImage(avatar2)


      if (avatar2 === null) {
         message.reply(":x: | Ops! parece que esse servidor não tem um icon 😕")
      } else {
         message.channel.send({ embeds: [avatar] })
      }
  }
}

 