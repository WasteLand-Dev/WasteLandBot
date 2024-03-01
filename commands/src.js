const { SlashCommandBuilder } = require("@discordjs/builders");
var color = require("cli-color");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("src")
        .setDescription("View a github page"),
    async execute(interaction) {
        interaction.reply({
		content: "Bot: https://github.com/WasteLand-Dev/WasteLandBot \nSite: https://codeberg.org/WasteLandOrigin/WasteLandSite",
            emphemeral: true
        });
        console.log(color.cyanBright("Command src executed"));
    }
};
