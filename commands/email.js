const { SlashCommandBuilder } = require("@discordjs/builders");
var color = require("cli-color");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("email")
        .setDescription("Technical support"),
    async execute(interaction) {
        interaction.reply({
            content: "support@wlorigin.cf",
            emphemeral: true
        });
        console.log(color.cyanBright("Email address sent"));
    }
};