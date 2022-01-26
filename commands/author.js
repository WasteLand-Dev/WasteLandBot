const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("author")
        .setDescription("Who create this bot?"),
    async execute(interaction) {
        interaction.reply({
            content: "Author: SpiritOfTheHawk",
            emphemeral: true
        });
    }
};