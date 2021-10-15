const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });
const config = require("./config.json");
const db = require('./database/database')
require('./database/functions')(db)

client.on("ready", () => {
    console.clear()
    console.log(`ready senpai!`);
    console.log(`${client.user.tag}`)

});

client.on("messageCreate", async message => {

    if (message.author.bot) return;
    if (message.channel.type === "dm") return;
    if (!message.content.startsWith(config.prefix)) return;

    const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
    const comando = args.shift().toLowerCase();
    const author = message.author;

    // bloco de comando
    if (comando === "ping") {
        message.channel.send('pong!')
    }
    if (comando === "eval") {
        eval(`(async()=>{${args.join(" ")}})()`)
    }
    if (comando === "set") {
        await setData(message.author.id, "money", 999999)
        message.channel.send(`money de ${message.author.tag} definido em 999999`)
    }
    if (comando === "get") {
        let meu = await getData(message.author.id, "money")
        message.channel.send(`${message.author.tag} tem ${meu} de money`)
    }


});

client.login(config.token);
