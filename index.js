require("dotenv").config();
var color = require("cli-color");
const fs = require("fs");
const path = require("path");
const { REST } = require("@discordjs/rest");
const { Routes, PermissionFlagsBits } = require("discord-api-types/v10")
const { Client, IntentsBitField, Collection } = require('discord.js');
const bot = new Client({
    intents: [
        new IntentsBitField(1 << 0),
        new IntentsBitField(1 << 9)
    ],
    presence: {
        status: 'idle',
        activities: [{
            type: 1,
            name: 'spiritofthehawk@proton.me',
            url: 'https://www.twitch.tv/spiritothawk'
        }],
    },
});

//! Подключаем файл конфигурации
const config = require(path.join(__dirname, 'botconfig.json')); 

//! Загружаем конфигурацию
const token = config.token;
const GUILD_ID = config.GUILD_ID;
const GUILD_ID2 = config.GUILD_ID2;

//! Создаём слэш-команды
const dir = path.join(__dirname, 'commands');
const commandFiles = fs.readdirSync(dir).filter(file => file.endsWith(".js"));

const commands = [];

bot.commands = new Collection();

async function setCommands() {
    for await (const file of commandFiles) {
        const command = require(path.join(dir, `${file}`));
        commands.push(command.data.toJSON());
        bot.commands.set(command.data.name, command);
    }
};

setCommands();

//! Регистрируем команды
bot.on('ready', () => { 
    console.log(color.cyan(`Запустился бот ${bot.user.username}`));

    const CLIENT_ID = bot.user.id;

    const rest = new REST({
        version: "10"
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
                console.log(color.yellowBright("Successfully registered commands locally on WasteLand Origin."));
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

    //? Создаём ссылку-приглашение для бота
    (async () => {
        try {
            const link = bot.generateInvite({ scopes: ['bot'], permissions: [PermissionFlagsBits.Administrator] });
            console.log(color.yellow(link));
        } catch (err) {
            if (err) console.error(color.red(err));
        }
    })();
});

bot.on("interactionCreate", async Interaction => {
    if (!Interaction.isChatInputCommand()) return;

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
