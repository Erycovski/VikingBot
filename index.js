const { Client, Collection, Intents } = require('discord.js');
const config = require('./config.json')
const { token } = require('./config.json');
const client = new Client({
    partials: ["MESSAGE", "CHANNEL", "REACTION", "USER", "REACTION"],
    intents: 32767,
})

const fs = require("fs");

client.commands = new Collection();
client.aliases = new Collection();
client.categories = fs.readdirSync(`./commands/`);

fs.readdirSync('./commands/').forEach(local => {
    const comandos = fs.readdirSync(`./commands/${local}`).filter(arquivo => arquivo.endsWith('.js'))

    for(let file of comandos) {
        let puxar= require(`./commands/${local}/${file}`)

        if(puxar.name) {
            client.commands.set(puxar.name, puxar)
        } 
        if(puxar.aliases && Array.isArray(puxar.aliases))
        puxar.aliases.forEach(x => client.aliases.set(x, puxar.name))
    } 
});



client.on("messageCreate", async (message) => {

    let prefix = config.prefix;
  
      if (message.author.bot) return;
      if (message.channel.type == 'dm') return;     
  
      if (!message.content.toLowerCase().startsWith(prefix.toLowerCase())) return;
  
      if(!message.content.startsWith(prefix)) return;
      const args = message.content.slice(prefix.length).trim().split(/ +/g);
  
      let cmd = args.shift().toLowerCase()
      if(cmd.length === 0) return;
      let command = client.commands.get(cmd)
      if(!command) command = client.commands.get(client.aliases.get(cmd)) 
    
  try {
      command.run(client, message, args)
  } catch (err) { 
 
     console.error('Erro:' + err); 
  }
      });


      client.on("ready", () => {
    
        console.log(`Bot iniciado, com ${client.users.cache.size} usuarios, em ${client.channels.cache.size} canais, em ${client.guilds.cache.size} servidores`)
        client.user.setActivity(`v!ajuda - Estou em ${client.guilds.cache.size} Servidores, atendendo a ${client.users.cache.size} Membros `)
    })
    
    client.on("guildCreate", guild => {
        console.log(`o bot foi entrou no servidor: ${guild.name} (id: ${guild.id}) População ${guild.memberCount} membros"`)
        client.user.setActivity(`v!ajuda - Estou em ${client.guilds.cache.size} Servidores, atendendo a ${client.users.cache.size} Membros `)
    })
    
    client.on("guildDelete", guild => {
        console.log(`O bot foi removido do servidor: ${guild.name} (id: ${guild.id})`)
        client.user.setActivity(`v!ajuda - Estou em ${client.guilds.cache.size} Servidores, atendendo a ${client.users.cache.size} Membros `)
    })

    
     setInterval(function () {client.user.setActivity(`${prefix}ajuda - Estou em ${client.guilds.cache.size} Servidores, atendendo a ${client.users.cache.size} Membros`)}, 172800000)

  


client.login(token);