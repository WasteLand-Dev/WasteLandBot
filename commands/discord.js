const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("discord")
        .setDescription("Generate invite"),
    async execute(interaction) {
        interaction.reply({
            content: "Your invite: https://discord.gg/UBaauaN",
            emphemeral: true
        });
    }
};