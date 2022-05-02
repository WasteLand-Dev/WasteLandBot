const { SlashCommandBuilder } = require("@discordjs/builders");
var color = require("cli-color");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("src")
        .setDescription("View a github page"),
    async execute(interaction) {
        interaction.reply({
            content: "https://dev.wlorigin.cf/",
            emphemeral: true
        });
        console.log(color.cyanBright("Command src executed"));
    }
};