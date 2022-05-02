const { SlashCommandBuilder } = require("@discordjs/builders");
var color = require("cli-color");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("site")
        .setDescription("Our webpage"),
    async execute(interaction) {
        interaction.reply({
            content: "Site: https://www.wlorigin.cf/",
            emphemeral: true
        });
        console.log(color.cyanBright("Website link sent"));
    }
};