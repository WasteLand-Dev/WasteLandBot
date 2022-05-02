const { SlashCommandBuilder } = require("@discordjs/builders");
var color = require("cli-color");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("discord")
        .setDescription("Generate invite"),
    async execute(interaction) {
        interaction.reply({
            content: "Your invite: https://discord.gg/UBaauaN",
            emphemeral: true
        });
        console.log(color.cyanBright("Discord invitation link sent"));
    }
};