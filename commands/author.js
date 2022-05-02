const { SlashCommandBuilder } = require("@discordjs/builders");
var color = require("cli-color");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("author")
        .setDescription("Who create this bot?"),
    async execute(interaction) {
        interaction.reply({
            content: "Author: SpiritOfTheHawk",
            emphemeral: true
        });
        console.log(color.cyanBright("Command author executed"));
    }
};