const { channelMention } = require("@discordjs/builders")
const Discord = require("discord.js")

module.exports = {
    name: "rules", 
    aliases: ["sigma"], 

    run: async(client, message, args) => {
        var list = [
             "https://c.tenor.com/LwGdxJKSTssAAAAd/rule-rule-number-one.gif",
             "https://c.tenor.com/Mk5Qw7hpv64AAAAd/sigma-buff.gif",
             "https://c.tenor.com/0HLcWGO0J-MAAAAC/sigma-rule-638.gif",
             "https://c.tenor.com/H4AEMLeD1gcAAAAd/sigma-rule-761.gif",
             "https://c.tenor.com/TSest82r1NMAAAAd/sigma-rule-668.gif",
             "https://c.tenor.com/h3sw09aCVUIAAAAd/sigma-sigma-male.gif",
             "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGylxjxnCZERltz1F9c2VEr3LWZ-ltewlgTQ&usqp=CAU",
             "https://cdn.dopl3r.com//media/memes_files/sigmarule-347-beat-kids-stay-sigma-liDMh.jpg",
             "https://img.ifunny.co/images/a20f95503029eb7f721deef8d4ec70903ced6b3153efc4a60bac4aaf9fde62ca_1.webm",
             "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQC_HlUKrsi_YxDyjXf1HgVo2MT9-wZqUOQWg&usqp=CAU",
             "https://c.tenor.com/x94VfARGAqMAAAAM/sigma-sigma-tips.gif",
             "https://s2.dmcdn.net/v/TMrfz1XWESK_fGWOO/x1080",
             "https://c.tenor.com/lzE3MuDKqB0AAAAd/goku.gif",
             "https://c.tenor.com/-BlQLmxd5HsAAAAM/sigma-rule-741.gif",
             "https://c.tenor.com/vAiFitZ-DTAAAAAM/sigma-rule-745.gif",
             "https://c.tenor.com/Gik_zylbxNEAAAAM/sigma-rule-760.gif",
             "https://c.tenor.com/EYNwwZcR-FgAAAAC/sigma-rule-675.gif",
             "https://c.tenor.com/RxSPzBR-yJMAAAAC/sigma-rule-642.gif",
             "https://c.tenor.com/uJ4CVfQU0jQAAAAC/sigma-sigma-male.gif",
             "https://c.tenor.com/j5qNgbTrkPIAAAAd/sigma-rule-736.gif",
             "https://c.tenor.com/YF9PlQ30x7EAAAAC/sigma-rule.gif",
             "https://c.tenor.com/NCAKXoQNkNAAAAAC/sigma-rule-738.gif",
             "https://c.tenor.com/tv3Idczt7wwAAAAM/sigma-rule-765.gif",
             "https://c.tenor.com/F2DcoXHuoN4AAAAM/sigma-rule-759.gif",
             "https://c.tenor.com/G4EQ6CLhBLEAAAAM/sigma-rule-733.gif",
             "https://c.tenor.com/XpNIL7dX6FsAAAAM/rule53no-fumo-rule53.gif",
             "https://c.tenor.com/FxwJCUvKgVgAAAAM/fgo-jalter.gif",
             "https://c.tenor.com/aHnQBRGQIUMAAAAM/darling-in-the-franxx-dragon-ball-z.gif",
             "https://c.tenor.com/Sd74UTP0ytAAAAAC/rule129-noo.gif",
             "https://c.tenor.com/qMUaCJRzx4MAAAAM/rule-40.gif",
             "https://c.tenor.com/Ka-7EAfE5e0AAAAM/fumo-touhou-rule.gif",
             "https://c.tenor.com/SSttxb0JoYAAAAAM/rule152-no.gif",
             "https://c.tenor.com/pchyCNhEEDkAAAAM/rule157-no.gif",
             "https://c.tenor.com/D1RtHh0MZvkAAAAM/epic-games-rule335.gif",
             "https://c.tenor.com/btbSBlyplJcAAAAM/crab-game.gif",
             "https://c.tenor.com/YOCKOZXQhTMAAAAM/cringetopia-rule3.gif",
             "https://c.tenor.com/rlAemF8cfosAAAAM/rule28-rule-goku.gif",
             "https://c.tenor.com/Y5QyjIIiywcAAAAd/giga-chad.gif",
             "https://c.tenor.com/Ngmo28J_2fUAAAAC/rule43.gif",
             "https://c.tenor.com/5gD1L6MTyR8AAAAM/dragon-ball-z-patrick-bateman.gif",
             "https://c.tenor.com/2_mH4BaKu_oAAAAC/cringetopia-rule8a.gif",              
        ]

        var randomchoice = list[Math.floor(Math.random() * list.length )]

        let sigmaembed = new Discord.MessageEmbed()
        sigmaembed.setTitle(`😎 Sigma`)
        sigmaembed.setColor("#7a297a")
        sigmaembed.setImage(randomchoice)
        sigmaembed.setThumbnail(message.author.displayAvatarURL({size:1024, format:"jpeg", dynamic: "true"}))
        message.channel.send({embeds: [sigmaembed]})
    }
}