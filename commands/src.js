const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("src")
        .setDescription("View a github page"),
    async execute(interaction) {
        interaction.reply({
            content: "https://dev.wlorigin.cf/",
            emphemeral: true
        });
        console.log("Command src executed");
    }
};