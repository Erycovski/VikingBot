const Discord = require("discord.js")

module.exports = {
    name: "8ball", 
    aliases: ["bola8"], 

    run: async(client, message, args) => {

      let list = [
        "Sim!",
        "Não!",
        "Talvez...",
        "Com certeza!",
        "Sem chance!",
        "Com toda certeza!",
        "Os Deuses precisam pensar mais!",
        "Talvez em outra vida!"
        
             
      ]

        var randomchoice = list[Math.floor(Math.random() * list.length )]

        message.channel.send(randomchoice)
        
    }
}