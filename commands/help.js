const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("help")
        .setDescription("View a list of commands."),
    async execute(interaction) {
        interaction.reply({
            content: '`-/help -/vk -/site -/discord -/ip -/author -/ping`',
            emphemeral: true
        });
    }
};