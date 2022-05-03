require("dotenv").config();
var color = require("cli-color");
const fs = require("fs");
const { REST } = require("@discordjs/rest");
const { Routes } = require("discord-api-types/v9")
const { Client, Intents, Collection } = require('discord.js');
const bot = new Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES
    ],
    presence: {
        status: 'inactive',
        activities: [{
            type: 'STREAMING',
            name: 'support@wlorigin.cf',
            url: 'https://www.twitch.tv/spiritothawk'
        }],
    },
});

//! Подключаем файл конфигурации
const config = require('./botconfig.json'); 

//! Загружаем конфигурацию
const token = config.token;
/* const prefix = config.prefix; */
const GUILD_ID = config.GUILD_ID;
const GUILD_ID2 = config.GUILD_ID2;

//! Создаём слэш-команды
const commandFiles = fs.readdirSync("./commands").filter(file => file.endsWith(".js"));

const commands = [];

bot.commands = new Collection();

for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    commands.push(command.data.toJSON());
    bot.commands.set(command.data.name, command);
}

//! Регистрируем команды
bot.on('ready', () => { 
    console.log(color.cyan(`Запустился бот ${bot.user.username}`));

    const CLIENT_ID = bot.user.id;

    const rest = new REST({
        version: "9"
    }).setToken(token);

    (async () => {
        try {
            if (process.env.ENV === "production") {
                await rest.put(Routes.applicationCommands(CLIENT_ID), {
                    body: commands
                });
                console.log(color.yellowBright("Successfully registered commands globally."));
            } else {
                await rest.put(Routes.applicationGuildCommands(CLIENT_ID, GUILD_ID), {
                    body: commands
                });
                console.log(color.yellowBright("Successfully registered commands locally on WasteLand."));
                await rest.put(Routes.applicationGuildCommands(CLIENT_ID, GUILD_ID2), {
                    body: commands
                });
                console.log(color.yellowBright("Successfully registered commands locally on SpiritOTHawk projects."));
            }
            console.log(color.cyan("Регистрация команд завершена."));
        } catch (err) {
            if (err) console.error(color.red(err));
        }
    })();
    // ?Создаём ссылку-приглашение для бота
    const link = bot.generateInvite({ scopes: ['bot'], permissions: ["ADMINISTRATOR"] });
    console.log(color.yellow(link));
    module.exports = link;
});

bot.on("interactionCreate", async Interaction => {
    if (!Interaction.isCommand()) return;

    const command = bot.commands.get(Interaction.commandName);

    if (!command) return;

    try {
        await command.execute(Interaction);
    } catch(err) {
        if (err) console.error(color.red(err));

        await Interaction.reply({
            content: "An error occured while executing that command.",
            ephemeral: true
        });
    }
});

bot.login(token);