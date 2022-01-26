const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("ip")
        .setDescription("Can i connect?"),
    async execute(interaction) {
        interaction.reply({
            content: "IP: thewasteland.cf / origin.thewasteland.cf / craft.thewasteland.cf / play.thewasteland.cf",
            emphemeral: true
        });
    }
};