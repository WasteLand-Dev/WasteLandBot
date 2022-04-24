const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("ping")
        .setDescription("Pong!"),
    async execute(interaction) {
        interaction.reply({
            content: "Pong!",
            emphemeral: true
        });
        console.log("Ping test completed");
    }
};