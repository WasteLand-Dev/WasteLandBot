const { SlashCommandBuilder } = require("@discordjs/builders");
var color = require("cli-color");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("ping")
        .setDescription("Pong!"),
    async execute(interaction) {
        interaction.reply({
            content: "Pong!",
            emphemeral: true
        });
        console.log(color.cyanBright("Ping test completed"));
    }
};