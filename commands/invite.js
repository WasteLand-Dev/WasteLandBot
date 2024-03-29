const { SlashCommandBuilder } = require("@discordjs/builders");
var color = require("cli-color");

const link = "https://discord.com/api/oauth2/authorize?client_id=702055264324681779&scope=bot&permissions=8";

module.exports = {
    data: new SlashCommandBuilder()
        .setName("invite")
        .setDescription("Creates a link to invite a bot."),
    async execute(interaction) {
        interaction.reply({
            content: ("||" + link + "|| \n`-Your link. By default, the commands do not work on your server, to activate them write`" + "*` @spiritofthehawk`*"),
            emphemeral: true
        })
        console.warn(color.cyanBright("Bot invitation sent"));
    }
};
