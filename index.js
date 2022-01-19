require("dotenv").config();
const { Client, Intents } = require('discord.js');
const bot = new Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES
    ],
    presence: {
        status: 'inactive',
        activities: [{
            type: 'STREAMING',
            name: '-&Help to list of commands',
            url: 'https://www.twitch.tv/spiritofthehawk_sothe'
        }],
    },
});

// !подключаем файл конфигурации
const config = require('./botconfig.json'); 

// !получаем токен и префикс
const token = config.token; 
const prefix = config.prefix;

// ?создаём ссылку-приглашение для бота
bot.on('ready', () => { 
    console.log(`Запустился бот ${bot.user.username}`);
    //bot.generateInvite(["ADMINISTRATOR"]).then(link => { 
    //    console.log(link);
    //})
    });

bot.on("messageCreate", msg => {
    if (msg.content.startsWith(prefix)) {
        if (msg.content.substring(1) === "ping") {
            msg.reply("Pong!!!!");
        }
    }
});

// ?Простые сообщения
bot.on('message', msg => {
    if (msg.content === prefix + 'Help') {
        msg.reply('`-&Help -&VK -&Site -&Discord -&IP -&Author -&Ping`');
    }
    if (msg.content === prefix + 'VK') {
        msg.reply('VK: https://vk.com/thewastelandrp');
    }
    if (msg.content === prefix + 'Site') {
        msg.reply('Site: http://www.creepshield.cf');
    }
    if (msg.content === prefix + 'Discord') {
        msg.reply('https://discord.gg/UBaauaN');
    }
    if (msg.content === prefix + 'IP') {
        msg.reply('IP: thewasteland.cf / origin.thewasteland.cf / craft.thewasteland.cf / play.thewasteland.cf');
    }
    if (msg.content === prefix + 'Author') {
        msg.reply('Author: mrKarimG');
    }
    if (msg.content === prefix + 'Ping') {
        msg.reply('Pong!');
    }
});
bot.login(token);