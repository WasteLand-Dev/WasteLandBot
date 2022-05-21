const { SlashCommandBuilder } = require("@discordjs/builders");
var color = require("cli-color");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("Telegram")
        .setDescription("Generate invite"),
    async execute(interaction) {
        interaction.reply({
            content: "Your invite: https://wlorigin.cf/telegram.html",
            emphemeral: true
        });
        console.log(color.cyanBright("Telegram invitation link sent"));
    }
};