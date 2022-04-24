const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("site")
        .setDescription("Our webpage"),
    async execute(interaction) {
        interaction.reply({
            content: "Site: https://www.wlorigin.cf/",
            emphemeral: true
        });
        console.log("Website link sent");
    }
};