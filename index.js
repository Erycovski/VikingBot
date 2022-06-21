const { Client, Collection, Intents } = require('discord.js');
const config = require('./config.json')
const { token } = require('./config.json');
const prefix = config.prefix;
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

    for (let file of comandos) {
        let puxar = require(`./commands/${local}/${file}`)

        if (puxar.name) {
            client.commands.set(puxar.name, puxar)
        }
        if (puxar.aliases && Array.isArray(puxar.aliases))
            puxar.aliases.forEach(x => client.aliases.set(x, puxar.name))
    }
});



client.on("messageCreate", async (message) => {

    let prefix = config.prefix;

    if (message.author.bot) return;
    if (message.channel.type == 'dm') return;

    if (!message.content.toLowerCase().startsWith(prefix.toLowerCase())) return;

    if (!message.content.startsWith(prefix)) return;
    const args = message.content.slice(prefix.length).trim().split(/ +/g);

    let cmd = args.shift().toLowerCase()
    if (cmd.length === 0) return;
    let command = client.commands.get(cmd)
    if (!command) command = client.commands.get(client.aliases.get(cmd))

    try {
        command.run(client, message, args)
    } catch (err) {

        console.error('Erro:' + err);
    }
});

let frases = [
    `${prefix}ajuda - Porque não tenta fazer uma pergunta aos deuses? use ${prefix}8ball`,
    `${prefix}ajuda - Gostou da foto de algum membro do servidor? use ${prefix}avatar`,
    `${prefix}ajuda - Que tal demonstrar sua amizade com um abraço? tente usar ${prefix}hug`,
    `${prefix}ajuda - Seu amigo falou que jojo é ruim? demostre sua raiva com um tapa! use ${prefix}slap`,
    `${prefix}ajuda - Querendo saber que dia o servidor foi criado? use ${prefix}serverinfo`,
    `${prefix}ajuda - Estou em ${client.guilds.cache.size} Servidores, atendendo a ${client.users.cache.size} Membros`
]

let randomfrase = frases[[Math.floor(Math.random() * frases.length)]]


client.on("ready", () => {
    console.log(`Bot iniciado, com ${client.users.cache.size} usuarios, em ${client.channels.cache.size} canais, em ${client.guilds.cache.size} servidores`)
})

client.on("guildCreate", guild => {
    console.log(`o bot foi entrou no servidor: ${guild.name} (id: ${guild.id}) População ${guild.memberCount} membros"`)
})

client.on("guildDelete", guild => {
    console.log(`O bot foi removido do servidor: ${guild.name} (id: ${guild.id})`)
})


setTimeout(function () {client.user.setActivity(randomfrase)}, 3000)

setInterval(function () {client.user.setActivity(randomfrase)}, 86400000)




client.login(token);