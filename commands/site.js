const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("site")
        .setDescription("Our webpage"),
    async execute(interaction) {
        interaction.reply({
            content: "Site: https://www.creepshield.cf/",
            emphemeral: true
        });
    }
};