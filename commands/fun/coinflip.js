const Discord = require("discord.js")

module.exports = {
    name: "coinflip",

    run: async(client, message, args) => {

         let caraoucoroa= [
            "https://media.discordapp.net/attachments/988563980320641125/988564710230224916/unknown.png?width=642&height=640",
            "https://media.discordapp.net/attachments/988563980320641125/988564746712277102/unknown.png?width=651&height=640"
         ]

         let randomchoice = caraoucoroa[Math.floor(Math.random() * caraoucoroa.length )]
         let cara  = "https://media.discordapp.net/attachments/988563980320641125/988564710230224916/unknown.png?width=642&height=640"
         let coroa = "https://media.discordapp.net/attachments/988563980320641125/988564746712277102/unknown.png?width=651&height=640"

         let embedtitle = ""

         if (randomchoice === cara) {
            embedtitle = "👨 CARA!"
         } else if (randomchoice === coroa) {
            embedtitle = "👑 COROA!"
         } else {
            embedtitle = "algo deu errado demais ai em meu mano xd"
         }


         let coinflipembed = new Discord.MessageEmbed()
         coinflipembed.setTitle(embedtitle)
         coinflipembed.setImage(randomchoice)
         coinflipembed.setColor("#7a297a")


         message.channel.send({embeds: [coinflipembed]})   
    }
}