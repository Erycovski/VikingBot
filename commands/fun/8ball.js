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

        let randomchoice = list[Math.floor(Math.random() * list.length )]
         

        let list2 = [
          "ela vai dizer sim pra mim? 😳",
          "vou ganhar aquele aumento?",
          "sou bom em esportes?",
          "o viking bot é o melhor de todos?",
          "devo estudar mais?",
          "gatos são seres superiores?",
          "eu devia parar de roubar dinheiro da minha vovozinha?"
        ]

        let randomchoice2 = list2[Math.floor(Math.random() * list2.length )]

        if(!args[0]) return message.reply(`:x: | Você precisa fazer uma pergunta aos deuses | EX: v!8ball ${randomchoice2}`)

        let question = args.slice().join((" "))

   

        message.channel.send(randomchoice)
        
    }
}