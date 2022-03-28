const { SlashCommandBuilder } = require("@discordjs/builders");
const { MessageSelectMenu } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("ping")
        .setDescription("Pong!"),
    async execute(interaction) {
        interaction.reply({
            content: "Pong!",
            emphemeral: true
        });
    }
};