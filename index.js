const Discord = require('discord.js');
const bot = new Discord.Client();

// !подключаем файл конфигурации
let config = require('./botconfig.json'); 

// !получаем токен и префикс
let token = config.token; 
let prefix = config.prefix;

// ?создаём ссылку-приглашение для бота
bot.on('ready', () => { 
    console.log(`Запустился бот ${bot.user.username}`);
    bot.generateInvite(["ADMINISTRATOR"]).then(link => { 
        console.log(link);
    });
// ?устанавливаем статус
    bot.user.setPresence({
        status: 'inactive',
        activity: {
            type: 'STREAMING',
            name: '-&Help to list of commands',
            url: 'https://www.twitch.tv/spiritofthehawk_sothe'
        },
    });
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